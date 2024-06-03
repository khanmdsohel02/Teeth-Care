import { Link } from "react-router-dom";

const TreatmentCard = () => {
  return (
    <div className="card w-96 bg-blue-400 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">name!</h2>
        <h4 className="card-title">price!</h4>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link
            to={"/appointments"}
            className="btn bg-blue-600 text-white text-lg hover:bg-blue-700 border-none"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
