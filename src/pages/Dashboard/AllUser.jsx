import SingleUser from "../../components/SingleUser";

const AllUser = () => {
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
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {<SingleUser />}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
