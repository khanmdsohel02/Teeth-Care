import { useLoaderData } from "react-router-dom";
import SingleAppointment from "../../components/SingleAppointment";

const AllAppointments = () => {
  const appointments = useLoaderData();

  return (
    <div>
      <div className="text-3xl">
        <div className="lg:w-full">
          <h1 className="text-5xl font-bold text-center mb-10 text-slate-200">
            All Appointment
          </h1>
          <div className="overflow-x-auto">
            <table className="table text-slate-200 bg-blue-600 rounded-none">
              {/* head */}
              <thead className="text-center text-xl text-slate-200">
                <tr className="bg-blue-700">
                  <th>S.No</th>
                  <th>Treatment Name</th>
                  <th>Treatment Cost</th>
                  <th>Patient Name </th>
                  <th>Patient Email</th>
                  <th>Phone Number</th>
                  <th>Meet Day</th>
                  <th>Done</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {appointments.map((appointment, index) => (
                  <SingleAppointment
                    key={appointment._id}
                    appointment={appointment}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
