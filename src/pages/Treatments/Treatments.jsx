import { useLoaderData } from "react-router-dom";
import TreatmentCard from "../../components/TreatmentCard";
// import { useEffect, useState } from "react";

const Treatments = () => {
  // const [treatments, setTreatments] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/treatments")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTreatments(data);
  //     });
  // }, []);

  // console.log(treatments);

  const treatments = useLoaderData();
  console.log(treatments);

  return (
    <div className="p-14  min-h-screen">
      <h1 className="mb-14 text-5xl font-semibold text-center text-blue-600">
        Our Treatments
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-10">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment._id} treatment={treatment} />
        ))}
      </div>
      <div className="flex justify-center mt-16"></div>
    </div>
  );
};

export default Treatments;
