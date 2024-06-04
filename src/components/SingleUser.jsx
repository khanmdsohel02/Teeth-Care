import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

/* eslint-disable react/prop-types */
const SingleUser = ({ index, user }) => {
  const { user: currentUser } = useContext(AuthContext);
  return (
    <tr>
      <td className="text-lg">{index + 1}</td>
      <td className="w-24 h-24">
        <img
          className="w-[100%] h-[100%] rounded-full"
          src={user?.photo || currentUser?.photoURL}
          alt="photo"
        />
      </td>
      <td className="text-lg ">{user?.name || currentUser?.displayName}</td>
      <td className="text-lg">{user?.email || currentUser?.email}</td>
      <td className="text-lg">{user?.PhNum}</td>
    </tr>
  );
};

export default SingleUser;
