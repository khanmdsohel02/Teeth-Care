/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TreatmentCard = ({ treatment }) => {
  const { name, cost, about, photo } = treatment;
  console.log(name, cost, about, photo);

  return (
    <div className="card w-96 bg-blue-400 shadow-2xl hover:shadow-blue-600">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl w-[100%]" />
      </figure>
      <div className="card-body items-center text-center text-slate-100 space-y-2">
        <h2 className="card-title text-4xl">{name}</h2>
        <h4 className="card-title text-blue-900">Taka:{cost}</h4>
        <p className="text-xl">{about}</p>
        <div className="card-actions mt-4">
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
