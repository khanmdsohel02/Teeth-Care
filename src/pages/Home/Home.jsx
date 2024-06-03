import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import ServiceCard from "../../components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Contact from "../Contact/Contact";

const Home = () => {
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
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <div className="my-20 w-[80%] mx-auto">
        <h1 className="mb-14 text-5xl text-center text-gray-600">
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
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
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <div className="client-img">
              <img src="" alt="client" />
            </div>
            <div className="client-review">
              <h1></h1>
              <p></p>
              <p></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Contact />
    </>
  );
};

export default Home;
