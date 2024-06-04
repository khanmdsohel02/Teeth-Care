import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTreatment = () => {
  const [treatment, setTreatment] = useState({});
  const navigate = useNavigate();
  console.log(treatment);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/treatment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTreatment(data);
        console.log(data);
      });
  }, [id]);
  const handleUpdateTreatment = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const cost = form.cost.value;
    const about = form.about.value;
    const photo = form.photo.value;
    const updateInfo = { name, cost, about, photo };

    const isConfirm = window.confirm(
      `Are you sure? You want to update ${name} treatment?`
    );

    if (isConfirm) {
      fetch(`http://localhost:3000/treatment/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Treatment updated successfully");
            form.reset();
            navigate(-1);
          }
        });
    }
  };

  return (
    <>
      {" "}
      <div className="lg:w-[60%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
        <form onSubmit={handleUpdateTreatment} className="grid gap-5">
          <input
            name="name"
            type="text"
            className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
            placeholder="Treatment Name"
            defaultValue={treatment?.name}
          />
          <input
            name="cost"
            type="number"
            className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
            placeholder="Treatment Cost"
            defaultValue={treatment?.cost}
          />
          <textarea
            name="about"
            type="text"
            className="h-40 w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
            placeholder="About treatment ..."
            defaultValue={treatment?.about}
          />

          <input
            name="photo"
            type="text"
            className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
            placeholder="Photo URL"
            defaultValue={treatment?.photo}
          />

          <button
            type="submit"
            className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
          >
            Update Treatment
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateTreatment;
