import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Contact from "../Contact/Contact";
import TreatmentCard from "../../components/TreatmentCard";
import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [reviews, setReviews] = useState();
  console.log(reviews);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });

    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  console.log(blogs);

  const treatments = useLoaderData();
  console.log(treatments);

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-t from-blue-700 to-blue-400">
        <div className="hero-content w-full flex-col lg:flex-row-reverse gap-x-[10%]">
          <img
            src="../../../public/assets/header.svg"
            className="max-w-xl rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-5xl text-slate-100 font-bold capitalize">
              complete dental solution for everyone!
            </h1>
            <p className="py-6 text-xl text-slate-100">
              Dentalia is a modern dental clinic, specialized in advanced
              diagnostics and treatment of dental and oral disorders.
              <br /> <br />
              We offer comprehensive services from all fields of dentistry. In
              addition to high-end dental equipment, all services are provided
              in a comfortable, luxury environment. New patients are welcomed
              with a complimentary oral health consultation.
            </p>
            <Link
              to={"/appointments"}
              className="btn btn-primary text-slate-100 text-lg"
            >
              Get Appointments
            </Link>
          </div>
        </div>
      </div>

      <div className="hero my-20">
        <div className="hero-content flex-col-reverse lg:flex-row gap-x-[10%]">
          <img
            src="../../../public/assets/WPic.png"
            className="lg:max-w-2xl rounded-lg shadow-2xl bg-blue-400"
          />
          <div className="space-y-6 text-gray-600">
            <h3 className="text-xl font-semibold uppercase">
              WELCOME TO Teeth DENTAL CARE!
            </h3>
            <h1 className="text-5xl font-bold">We Create Beautiful Smiles</h1>
            <p className="py-6 text-xl">
              Dentalia is a modern dental clinic, specialized in advanced
              diagnostics and treatment of dental and oral disorders.
              <br /> <br />
              We offer comprehensive services from all fields of dentistry. In
              addition to high-end dental equipment, all services are provided
              in a comfortable, luxury environment. New patients are welcomed
              with a complimentary oral health consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="p-14  bg-gradient-to-br	from-blue-400 to-blue-700">
        <h1 className="mb-14 text-5xl text-center text-blue-100">
          Our Treatments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-10">
          {treatments?.slice(0, 3).map((treatment) => (
            <TreatmentCard key={treatment._id} treatment={treatment} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link
            className="btn bg-blue-600 text-slate-100 text-xl hover:bg-blue-700"
            to="/treatments"
          >
            See More
          </Link>
        </div>
      </div>

      <div className="my-20 lg:w-[80%] mx-auto">
        <h1 className="mb-14 text-5xl text-center text-gray-600">
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-20">
          {blogs?.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link
            className="btn bg-blue-600 text-slate-100 text-xl hover:bg-blue-700"
            to="/blogs"
          >
            See More
          </Link>
        </div>
      </div>

      <div className="mb-20 mt-28 w-[80%] mx-auto bg-bg-ima p-14 rounded-lg shadow-lg bg-cover bg-center">
        <h1 className="mb-14 text-5xl text-center font-semibold text-blue-500">
          What is Patients says!
        </h1>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className=" flex justify-center items-center p-4"
        >
          {" "}
          {reviews?.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Swiper>
      </div>

      <Contact />
    </>
  );
};

export default Home;

{
  /*  */
}
