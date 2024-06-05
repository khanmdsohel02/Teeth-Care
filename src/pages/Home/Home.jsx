import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Contact from "../Contact/Contact";
import TreatmentCard from "../../components/TreatmentCard";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://teeth-care-backend.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });

    fetch("https://teeth-care-backend.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const treatments = useLoaderData();

  return (
    <>
      {/* Hero */}
      <div className="hero h-[70vh]  md:min-h-screen bg-gradient-to-t from-blue-700 to-blue-400">
        <div className="hero-content w-full  lg:flex-row-reverse gap-x-[10%]">
          <img
            src="https://i.ibb.co/zFgmsc2/header.jpg"
            className="lg:max-w-xl rounded-lg shadow-lg hidden lg:block"
          />
          <div>
            <h1 className="lg:text-5xl text-2xl text-slate-100 font-bold capitalize">
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
              to={"treatments"}
              className="btn bg-blue-600 hover:border-none border border-slate-200 hover:bg-blue-700  text-slate-100 text-lg"
            >
              See All Treatments
            </Link>
          </div>
        </div>
      </div>
      {/* Wellcome Message */}
      <div className="hero lg:my-20 my-5">
        <div className="hero-content flex-col-reverse lg:flex-row gap-x-[10%]">
          <img
            src="https://i.ibb.co/YW6FqHh/WPic.png"
            className="lg:max-w-2xl rounded-lg shadow-2xl bg-blue-400"
          />
          <div className="lg:space-y-6 space-y-2 text-blue-500">
            <h3 className="text-xl font-semibold uppercase">
              WELCOME TO Teeth DENTAL CARE!
            </h3>
            <h1 className="lg:text-5xl text-3xl  font-bold">
              We Create Beautiful Smiles
            </h1>
            <p className="py-6 text-xl">
              <p>
                Dentalia is a modern dental clinic, specialized in advanced
                diagnostics and treatment of dental and oral disorders.
              </p>

              <p className="pt-5">
                We offer comprehensive services from all fields of dentistry. In
                addition to high-end dental equipment, all services are provided
                in a comfortable, luxury environment. New patients are welcomed
                with a complimentary oral health consultation.
              </p>
            </p>
          </div>
        </div>
      </div>
      {/* Our Treatments
       */}
      <div className="lg:py-14 py-7 bg-gradient-to-br	from-blue-400 to-blue-700">
        <h1 className="lg:mb-14 mb-7 lg:text-5xl text-4xl font-semibold text-center text-slate-200">
          Our Treatments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-10">
          {treatments
            ?.toReversed()
            .slice(0, 3)
            .map((treatment) => (
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
      {/* Recent Blogs
       */}
      <div className="lg:my-20 my-8 lg:w-[80%] mx-auto">
        <h1 className="lg:mb-16 mb-9 text-5xl font-semibold text-center text-blue-600">
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-20">
          {blogs
            ?.toReversed()
            .slice(0, 2)
            .map((blog) => (
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
      {/* testimonial */}
      <div className="lg:mb-20 lg:mt-28 mb-10 lg:w-[80%] mx-auto bg-bg-img p-14 rounded-lg shadow-lg bg-cover bg-center">
        <h1 className="mb-14 lg:text-5xl text-3xl  text-center font-semibold text-blue-500">
          Happy Patients!
        </h1>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="max-w-40 mx-auto h-40">
                <img
                  className="w-[100%] h-[100%] rounded-full"
                  src={review?.photo}
                  alt="client"
                />
              </div>
              <div className="mt-16 text-center text-slate-800 space-y-4">
                <h1 className="text-2xl uppercase font-semibold">
                  {review?.title}
                </h1>
                <p className="text-2xl first-letter:uppercase">
                  {review?.review}
                </p>
                <p className="uppercase text-xl font-semibold">
                  {review?.reviewername}
                </p>
                <small className="text-sm font-medium">
                  {review?.reviewDate}
                </small>
              </div>
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
      {/* Contact */}

      <Contact />
    </>
  );
};

export default Home;
