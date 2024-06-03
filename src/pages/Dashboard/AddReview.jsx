const AddReview = () => {
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const review = form.review.value;
    const photo = form.photo.value;

    const blog = { title, review, photo };
    console.log(blog);
  };
  return (
    <div className="lg:w-[60%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleAddReview} className="grid gap-5">
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
          placeholder="Photo URL"
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
