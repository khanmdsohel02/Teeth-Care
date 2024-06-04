import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddReview = () => {
  const navigate = useNavigate();
  const handleAddReview = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const review = form.review.value;
    const photo = form.photo.value;
    const reviewername = form.reviewername.value;
    const reviewDate = form.reviewdate.value;

    const reviewData = { reviewername, title, review, photo, reviewDate };
    console.log(reviewData);

    const isConfirm = window.confirm(
      `Are you sure? ${title} is a correct review?`
    );
    if (isConfirm) {
      fetch("https://teeth-care-backend.vercel.app/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Review added successfully");
            form.reset();
            navigate("/");
          }
        });
    }
  };
  return (
    <div className="lg:w-[60%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleAddReview} className="grid gap-5">
        <input
          name="reviewername"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Reviewer Name ?"
        />
        <input
          name="title"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Review Title ?"
        />

        <textarea
          name="review"
          type="text"
          className="h-40 w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="About Review ..."
        />

        <input
          name="photo"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Reviewer Photo URL"
        />
        <input
          name="reviewdate"
          type="text"
          className="w-full hidden input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          defaultValue={new Date().toDateString()}
        />

        <button
          type="submit"
          className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};
export default AddReview;
