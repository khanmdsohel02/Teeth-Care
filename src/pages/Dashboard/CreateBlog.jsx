import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const question = form.question.value;
    const qanswer = form.qanswer.value;
    const photo = form.photo.value;
    const createdDate = form.date.value;

    const blog = { question, qanswer, photo, createdDate };
    console.log(blog);

    const isConfirm = window.confirm(
      `Are you sure?You want to create ${question} blog?`
    );

    if (isConfirm) {
      fetch("http://localhost:3000/blog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blog),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Blog created successfully");
            form.reset();
            navigate("/blogs");
          }
        });
    }
  };
  return (
    <div className="lg:w-[70%] w-[95%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
      <form onSubmit={handleCreateBlog} className="grid gap-5">
        <input
          name="question"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Question?"
        />

        <textarea
          name="qanswer"
          type="text"
          className="h-40 w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="QAnswer ..."
        />

        <input
          name="photo"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
          placeholder="Photo URL"
        />
        <input
          name="date"
          type="text"
          className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium hidden"
          defaultValue={new Date().toDateString()}
        />

        <button
          type="submit"
          className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
