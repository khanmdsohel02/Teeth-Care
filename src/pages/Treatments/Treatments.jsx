import TreatmentCard from "../../components/TreatmentCard";
import { useEffect, useState } from "react";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [searchTreatment, setsearchTreatment] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    fetch(`https://teeth-care-backend.vercel.app/treatments`)
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data);

        // console.log(data);
      });
  }, []);

  const handleSearchByName = () => {
    fetch(
      `https://teeth-care-backend.vercel.app/treatments?name=${searchByName.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setsearchTreatment(data);
      });
  };

  return (
    <div className="lg:p-14 pt-7 mb-4">
      <h1 className="mb-14 text-5xl font-semibold text-center text-blue-600">
        Our Treatments
      </h1>
      <div className="flex justify-center mt-16 mb-14 w-full">
        <div className="join grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0">
          <div>
            <div>
              <input
                onChange={(e) => setSearchByName(e.target.value)}
                type="text"
                className="input input-bordered join-item outline-none capitalize lg:rounded-lg rounded-none w-[100%]"
                placeholder="Search By Name"
                value={searchByName}
              />
            </div>
          </div>
          <select
            onChange={(e) => setSearchByName(e.target.value)}
            className="select select-bordered border-r-0 join-item capitalize rounded-none w-[100%]"
            value={searchByName}
          >
            <option selected>Filtering By Name</option>
            {treatments.map((treatment) => (
              <option
                className="text-slate-100 text-lg capitalize bg-slate-600"
                value={treatment?.name}
                key={treatment._id}
                defaultValue={searchByName}
              >
                {treatment?.name}
              </option>
            ))}
          </select>
          <div className="indicator w-[100%]">
            <button
              onClick={handleSearchByName}
              className="btn join-item bg-blue-500 text-slate-100 hover:bg-blue-600 text-lg rounded-none w-[100%] lg:rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-8 lg:w-[80%] mx-auto">
        {searchTreatment.length > 0 ? (
          <>
            {searchTreatment.map((treatment) => (
              <TreatmentCard key={treatment._id} treatment={treatment} />
            ))}
          </>
        ) : (
          <>
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment._id} treatment={treatment} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Treatments;
