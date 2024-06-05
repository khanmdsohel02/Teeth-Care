import BlogCard from "../../components/BlogCard";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="lg:my-20 my-10 lg:w-[80%] mx-auto min-h-screen">
      <h1 className="mb-14 text-5xl font-semibold text-center text-blue-600">
        Recent Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-20">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
