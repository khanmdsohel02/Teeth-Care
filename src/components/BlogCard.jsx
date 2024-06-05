/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  return (
    <div className="card card-compact w-full md:w-auto bg-blue-400 shadow-2xl text-slate-200">
      <figure className="lg:h-[350px] lg:w-[750px]">
        <img
          className="w-full lg:h-full h-[250px] bg-cover"
          src={blog?.photo}
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <small className="text-sm text-blue-700 font-medium">
          {blog?.createdDate}
        </small>
        <h2 className="card-title text-3xl">{blog?.question}</h2>
        <p className="text-xl">{blog?.qanswer}</p>
      </div>
    </div>
  );
};

export default BlogCard;
