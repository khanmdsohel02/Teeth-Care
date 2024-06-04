import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, updateUserInfo } = useContext(AuthContext);

  const [userAllInfo, setUserAllInfo] = useState({});
  console.log(userAllInfo);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAllInfo(data);
      });
  }, [user]);

  const handleUserUpdateInfo = (e) => {
    const isConfirm = window.confirm("All informations are correct?");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const PhNum = form.phnumber.value;
    const email = form.email.value;
    const userInfo = { email, name, photo, PhNum };

    console.log(PhNum);
    if (isConfirm) {
      updateUserInfo(name, photo)
        .then(() => {
          navigate(-1);
          console.log("User info updated successfully");
        })
        .catch((error) => {
          console.error("Error updating user info:", error.message);
        });

      fetch(`http://localhost:3000/users/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("User info updated successfully");
            form.reset();
            navigate(-1);
          }
        });
    }
  };

  return (
    <div className="lg:w-[60%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleUserUpdateInfo} className="grid gap-5">
        <input
          name="id"
          type="text"
          className="w-full input input-bordered text-xl text-blue-900 font-medium"
          defaultValue={user?.uid}
          disabled
        />

        <input
          name="email"
          type="email"
          className="w-full input input-bordered text-xl  text-blue-900 font-medium"
          defaultValue={user?.email}
          disabled
        />
        <input
          name="name"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          defaultValue={user?.displayName}
        />
        <input
          name="phnumber"
          type="number"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Phone Number"
          defaultValue={userAllInfo?.PhNum}
        />

        <input
          name="photo"
          type="text"
          className="w-full input input-bordered text-xl font-medium bg-blue-100 text-blue-900"
          defaultValue={user?.photoURL}
        />

        <button
          type="submit"
          className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;