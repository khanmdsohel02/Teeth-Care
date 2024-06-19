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

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAllInfo(data);
      });
  }, [user?.email]);

  const reauthenticate = async (email, password) => {
    const credential = EmailAuthProvider.credential(email, password);

    try {
      const authSuccess = await reauthenticateWithCredential(user, credential);

      return authSuccess;
    } catch (error) {
      if (error.message.includes("invalid-credential")) {
        toast.error("Maybe Your a Google User Or Your Old password is wrong");
        return;
      }
    }
  };

  const handlePasswordUpdate = async () => {
    fetch(`http://localhost:3000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setHidden(!hidden);
          toast.success("Password Changed");
        }
      });
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (user) {
      try {
        const authenticated = await reauthenticate(user.email, oldPassword);
        console.log(authenticated);
        if (authenticated?.user?.emailVerified && user?.emailVerified) {
          await updatePassword(user, newPassword);
          handlePasswordUpdate();
        } else if (
          !authenticated?.user?.emailVerified &&
          !user?.emailVerified
        ) {
          toast.warning("First Verify Your Email");
        }
      } catch (error) {
        if (error.message.includes("requires-recent-login")) {
          toast.error(
            "You Already changed your password, If you want to change? Please login again"
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
            <img src={userAllInfo?.photo || user?.photoURL} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center text-red-500">
        <p className="text-lg text-slate-100">{userAllInfo?.PhNum}</p>
        <h2 className="card-title  text-3xl font-semibold text-slate-100">
          {userAllInfo?.fName || user?.displayName}
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
            className="text-slate-100 p-2 rounded-lg text-lg font-semibold hover:border-2 hover:text-slate-200  border border-blue-600 hover:border-none hover:bg-red-600"
            title="Are you sure?"
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
