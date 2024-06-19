import { useLoaderData } from "react-router-dom";
import SingleTreatment from "../../components/SingleTreatment";

const ManageTreatments = () => {
  const treatments = useLoaderData();

  return (
    <div className="text-3xl">
      <div>
        <h1 className="lg:text-5xl font-bold text-center mb-10 text-slate-200">
          Manage Treatment
        </h1>
        <div>
          <table className="table text-slate-200 bg-blue-600 rounded-none">
            {/* head */}
            <thead className="text-center lg:text-xl text-slate-200">
              <tr className="bg-blue-700">
                <th className="hidden lg:block">S.No</th>
                <th>Treatment Name</th>
                <th>Treatment Cost</th>
                <th className="hidden lg:block">About Treatment</th>
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
