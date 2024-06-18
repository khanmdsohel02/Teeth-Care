/* eslint-disable react/prop-types */
const SingleUser = ({ index, user }) => {
  return (
    <tr>
      <td className="text-lg">{index + 1}</td>
      <td className="w-24 h-24">
        <img
          className="w-[100%] h-[100%] rounded-full"
          src={user?.photo}
          alt="photo"
        />
      </td>
      <td className="text-lg ">{user?.fName}</td>
      <td className="text-lg">{user?.email}</td>
      <td className="text-lg">{user?.PhNum}</td>
    </tr>
  );
};

export default SingleUser;
