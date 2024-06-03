const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const cost = form.cost.value;
    const about = form.about.value;
    const photo = form.photo.value;

    const treatment = { name, cost, about, photo };
    console.log(treatment);
  };
  return (
    <div className="lg:w-[60%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleAddService} className="grid gap-5">
        <input
          name="name"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Treatment Name"
        />
        <input
          name="cost"
          type="number"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Treatment Cost"
        />
        <textarea
          name="about"
          type="text"
          className="h-40 w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="About treatment ..."
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
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
