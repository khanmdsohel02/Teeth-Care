import React from "react";

const ManageServices = () => {
  return (
    <div className="text-3xl text-slate-900">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-center mb-10 text-slate-200">
          Manage Treatment
        </h1>
        <div className="overflow-x-auto">
          <table className="table text-slate-200 bg-blue-600 rounded-none">
            {/* head */}
            <thead className="text-center text-xl text-slate-200">
              <tr>
                <th>S.No</th>
                <th>Treatment Name</th>
                <th>Treatment Cost</th>
                <th>About Treatment</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">{/* rows */}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
