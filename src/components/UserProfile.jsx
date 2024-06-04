import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userAllInfo, setUserAllInfo] = useState({});
  console.log(userAllInfo);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAllInfo(data);
      });
  }, [user?.email]);

  return (
    <div className="card w-96 bg-blue-400 shadow-lg shadow-blue-600">
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
        <div className="card-actions mt-3">
          <Link
            to="update-profile"
            className="btn text-2xl font-semibold border-slate-200 bg-transparent hover:bg-blue-600 text-slate-100 hover:border-none"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
