import { useLoaderData } from "react-router-dom";
import SingleUser from "../../components/SingleUser";

const AllUser = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table text-slate-200 bg-blue-600 rounded-none">
        {/* head */}
        <thead>
          <tr>
            <th className=" bg-blue-700 text-slate-200 text-xl font-semibold">
              S.No
            </th>
            <th className=" bg-blue-700 text-slate-200 text-xl font-semibold">
              Photo
            </th>
            <th className=" bg-blue-700 text-slate-200 text-xl font-semibold">
              Name
            </th>
            <th className=" bg-blue-700 text-slate-200 text-xl font-semibold">
              Email
            </th>
            <th className=" bg-blue-700 text-slate-200 text-xl font-semibold">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <SingleUser key={user._id} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
