/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleTreatment = ({ treatment, index }) => {
  const { _id: id, name, cost, about, photo } = treatment;

  const handleDeleteProduct = async (id) => {
    const isConfirm = window.confirm(
      `Are you sure? You want to delete ${name}`
    );

    if (isConfirm) {
      await fetch(`http://localhost:3000/treatment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Treatment deleted successfully");
            window.location.reload();
          }
        });
    }
  };

  return (
    <>
      <tr className="text-center text-xl text-slate-200 border-slate-200  border-b">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{cost} TK</td>
        <td>{about.slice(0, 30)}...</td>
        {/* <td className="border-red-500 border-r">{img.slice(0, 20)}...</td> */}
        <td className=" w-[130px] h-[100px]">
          <img
            className="w-[100%] h-[100%] rounded-full"
            src={photo}
            alt="photo"
          />
        </td>
        <td className="flex gap-2 justify-center mt-4">
          <Link
            to={`/updateproduct/${id}`}
            className="btn text-red-500 bg-orange-200 text-lg"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDeleteProduct(id)}
            className="btn bg-red-500 hover:bg-red-600 text-white text-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleTreatment;
