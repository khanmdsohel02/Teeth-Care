import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Link } from "react-router-dom";
import { reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import { EmailAuthProvider } from "firebase/auth/web-extension";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userAllInfo, setUserAllInfo] = useState({});
  const [hidden, setHidden] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  console.log(oldPassword);
  console.log(newPassword);
  console.log(hidden);

  useEffect(() => {
    fetch(`https://teeth-care-backend.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAllInfo(data);
      });
  }, [user?.email]);

  const reauthenticate = async (email, password) => {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      const authSuccess = await reauthenticateWithCredential(user, credential);
      console.log("Reauthentication successful");
      return authSuccess;
    } catch (error) {
      console.error("Reauthentication failed", error);
      return "Reauthenticationfailed ";
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (user) {
      try {
        const authenticated = await reauthenticate(user.email, oldPassword);

        if (authenticated?.user?.emailVerified) {
          await updatePassword(user, newPassword);
          toast.success("Password Changed");
          setHidden(!hidden);
        } else if (authenticated === "Reauthenticationfailed") {
          toast.error("Plz!Provide correct old password");
        }
      } catch (error) {
        if (error.message.includes("requires-recent-login")) {
          toast.error(
            "You Already changed your password, If you want to change it again? Please login again"
          );
        }
      }
    }
  };

  return (
    <div className="card lg:w-96 bg-blue-400 shadow-lg shadow-blue-600">
      <small className="p-5 text-slate-100">
        <b>ID: </b>
        {user?.uid || userAllInfo?._id}
      </small>
      <figure className="px-10 pt-10">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL || userAllInfo?.photo} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center text-red-500">
        <p className="text-lg text-slate-100">{userAllInfo?.PhNum}</p>
        <h2 className="card-title  text-3xl font-semibold text-slate-100">
          {user?.displayName || userAllInfo?.fName}
        </h2>
        <p className="text-xl text-slate-100">
          {user?.email || userAllInfo?.email}
        </p>
        <div className="card-actions mt-3 mb-5">
          <Link
            to="update-profile"
            className="btn text-2xl font-semibold border-slate-200 bg-transparent hover:bg-blue-600 text-slate-100 hover:border-none"
          >
            Update Profile
          </Link>
        </div>
        {hidden ? (
          <button
            onClick={() => setHidden(!hidden)}
            className="text-slate-200 p-2 rounded-lg text-lg font-semibold hover:border-2 hover:text-slate-300  border border-blue-600"
          >
            Password Change
          </button>
        ) : (
          <>
            {" "}
            <label className="input input-bordered flex items-center gap-2 bg-blue-600">
              <input
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                name="password"
                className="grow"
                placeholder="Old Password"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-blue-600">
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                name="password"
                className="grow"
                placeholder="New Password"
              />
            </label>
            <button
              onClick={handlePasswordChange}
              className="btn text-slate-100 text-xl border-none bg-blue-600 hover:bg-red-500"
            >
              Change
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
