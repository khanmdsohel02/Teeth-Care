import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, updateUserInfo } = useContext(AuthContext);
  const [userAllInfo, setUserAllInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAllInfo(data);
      });
  }, [user?.email]);

  const handleUserUpdateInfo = (e) => {
    const token = localStorage.getItem("token");
    const isConfirm = window.confirm("All informations are correct?");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const fName = form.name.value;
    const photo = form.photo.value;
    const PhNum = form.phnumber.value;

    const userInfo = { email, fName, photo, PhNum };

    if (isConfirm) {
      updateUserInfo(fName, photo)
        .then(() => {
          console.log("User info updated successfully");
        })
        .catch((error) => {
          console.error("Error updating user info:", error.message);
        });

      fetch(`http://localhost:3000/update-user/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
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
          defaultValue={user?.email || userAllInfo?.email}
          disabled
        />
        <input
          name="name"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          defaultValue={user?.displayName || userAllInfo?.fName}
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
          defaultValue={user?.photoURL || userAllInfo?.photo}
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
