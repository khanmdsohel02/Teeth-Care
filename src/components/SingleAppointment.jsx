/* eslint-disable react/prop-types */
const SingleAppointment = ({ appointment, index }) => {
  return (
    <>
      <tr className="text-center text-xl text-slate-200 border-b-slate-200 ">
        <td>{index + 1}</td>
        <td>{appointment?.treatment}</td>
        <td>{appointment?.treatmentCost}</td>
        <td>{appointment?.patientName}</td>
        <td>{appointment?.patientEmail}</td>
        <td>{appointment?.phNum}</td>
        <td>{appointment?.appointDate}</td>
        <td>
          <input className="" type="checkbox" name="done" id="checkboxid" />
        </td>
      </tr>
    </>
  );
};

export default SingleAppointment;
