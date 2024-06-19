/* eslint-disable react/prop-types */
const SingleUser = ({ index, user }) => {
  return (
    <tr className="text-center lg:text-xl text-slate-200 border-slate-200  border-b">
      <td className="text-lg hidden lg:block">{index + 1}</td>
      <td className="w-20 h-20">
        <img
          className="w-[100%] h-[100%] rounded-full"
          src={user?.photo}
          alt="photo"
        />
      </td>
      <td className="text-lg ">{user?.fName}</td>
      <td className="text-lg">{user?.email}</td>
      <td className="text-lg">{user?.PhNum || "-----------"}</td>
    </tr>
  );
};

export default SingleUser;
