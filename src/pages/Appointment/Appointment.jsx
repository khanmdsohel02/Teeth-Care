import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { toast } from "react-toastify";

const Appointment = () => {
  const [treatment, setTreatment] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [phNum, setPhNum] = useState("");
  const whenAppoint = new Date().toDateString();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/treatment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTreatment(data);
      });
  }, [id]);

  const appointdata = {
    patientName: user?.displayName,
    patientEmail: user?.email,
    treatment: treatment?.name,
    treatmentCost: treatment?.cost,
    appointDate: selectedDate,
    phNum,
    whenAppoint,
    stutes: false,
  };

  const handleAppointment = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    fetch(`http://localhost:3000/appointment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(appointdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`We Get Your ${treatment?.name} Appointment`);
          navigate(-1);
        } else if (data.message) {
          toast.warning(data.message);
          navigate(-1);
        }
        navigate("/treatments");
      });
  };

  return (
    <div className="lg:w-[60%] mx-auto mt-24 mb-14 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleAppointment} className="grid gap-5">
        <input
          name="name"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium capitalize"
          placeholder="Treatment Name"
          value={treatment?.name}
          readOnly={true}
        />
        <input
          name="cost"
          type="number"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Treatment Cost"
          value={treatment?.cost}
          readOnly={true}
        />
        <textarea
          name="about"
          type="text"
          className="h-36 w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="About treatment ..."
          value={treatment?.about}
          readOnly={true}
        />

        <input
          name="phonenumber"
          type="number"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium "
          placeholder="Phone Number"
          onChange={(e) => setPhNum(e.target.value)}
          required
        />
        <input
          name="appointdate"
          type="date"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium "
          placeholder="Date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
