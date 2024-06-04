import { useLoaderData } from "react-router-dom";
import SingleTreatment from "../../components/SingleTreatment";

const ManageTreatments = () => {
  const treatments = useLoaderData();
  console.log(treatments);

  return (
    <div className="text-3xl">
      <div className="lg:w-full">
        <h1 className="text-5xl font-bold text-center mb-10 text-slate-200">
          Manage Treatment
        </h1>
        <div className="overflow-x-auto">
          <table className="table text-slate-200 bg-blue-600 rounded-none">
            {/* head */}
            <thead className="text-center text-xl text-slate-200">
              <tr className="bg-blue-700">
                <th>S.No</th>
                <th>Treatment Name</th>
                <th>Treatment Cost</th>
                <th>About Treatment</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              {treatments.map((treatment, index) => (
                <SingleTreatment
                  key={treatment._id}
                  treatment={treatment}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTreatments;
