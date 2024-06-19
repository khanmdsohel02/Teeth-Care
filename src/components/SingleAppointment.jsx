import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const SingleAppointment = ({ appointment, index }) => {
  const [done, setDone] = useState(appointment?.status || false);
  const navigate = useNavigate();

  const handleDeleteAppointment = async (id) => {
    const token = localStorage.getItem("token");
    const isConfirm = window.confirm(
      `Are you sure? You want to delete ${appointment?.treatment}`
    );
    if (isConfirm) {
      await fetch(`http://localhost:3000/appointment/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Appointment deleted successfully");
            navigate("/dashboard/all-appointments");
          }
        });
    }
  };

  const handleUpdateAppointment = async (id, status) => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:3000/appointment/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Appointment status updated successfully");
          navigate("/dashboard/all-appointments");
        }
      });
  };

  useEffect(() => {
    if (done !== appointment?.status) {
      handleUpdateAppointment(appointment._id, done);
    }
  }, [done]);

  return (
    <>
      <tr className="text-center text-xl text-slate-200 border-b-slate-200">
        <td className="hidden lg:block">{index + 1}</td>
        <td>{appointment?.treatment}</td>
        <td className="hidden lg:block">{appointment?.treatmentCost}</td>
        <td>{appointment?.patientName}</td>
        <td>{appointment?.patientEmail}</td>
        <td>{appointment?.phNum}</td>
        <td>{appointment?.appointDate}</td>
        <td>
          <input
            onChange={() => setDone(!done)}
            type="checkbox"
            name="done"
            id="checkboxid"
            checked={done}
          />
        </td>
        <td className="pl-9">
          <TfiClose onClick={() => handleDeleteAppointment(appointment._id)} />
        </td>
      </tr>
    </>
  );
};

export default SingleAppointment;
