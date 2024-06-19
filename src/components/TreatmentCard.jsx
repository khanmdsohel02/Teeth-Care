/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TreatmentCard = ({ treatment }) => {
  const { _id: id, name, cost, about, photo } = treatment;
  // console.log(name, cost, about, photo);

  return (
    <div className="card w-96 bg-blue-400 shadow-2xl hover:shadow-blue-600">
      <figure className="px-10 pt-10 h-[250px]">
        <img src={photo} alt="Shoes" className="rounded-xl w-[100%] h-[100%]" />
      </figure>
      <div className="card-body items-center text-slate-100 space-y-2">
        <h4 className=" font-semibold px-4 text-pretty  rounded-xl text-slate-100  bg-blue-700 ">
          Taka: {cost}
        </h4>
        <h2 className="card-title text-4xl capitalize">{name}</h2>
        <p className="text-xl text-wrap">{about}</p>
        <div className="card-actions mt-4">
          <Link
            to={`appointment/${id}`}
            className="btn bg-blue-600 text-white text-lg hover:bg-blue-800 border-none"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
