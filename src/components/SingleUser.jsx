/* eslint-disable react/prop-types */
const SingleUser = ({ index, user }) => {
  return (
    <tr>
      <th className="text-lg">{index + 1}</th>
      <td className="w-24 h-24">
        <img
          className="w-[100%] h-[100%] rounded-full"
          src={user?.photo}
          alt="photo"
        />
      </td>
      <td className="text-lg ">{user?.name}</td>
      <td className="text-lg">{user?.email}</td>
    </tr>
  );
};

export default SingleUser;
