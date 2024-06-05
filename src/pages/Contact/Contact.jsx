import { useContext, useRef } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaPhoneVolume } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const form = useRef();

  const handleContactData = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mpojwit",
        "template_hm4e26v",
        form.current,
        "iW2TU-bHiNGdI8TAJ"
      )
      .then(
        () => {
          toast.success("Message Send");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log(error);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h1 className="lg:mb-10 lg:pt-10 text-5xl font-semibold text-center text-blue-600">
        Contact Us
      </h1>
      <div className="hero mb-14  lg:w-[80%] mx-auto">
        <div className="hero-content w-full flex-col lg:flex-row lg:gap-16">
          {/* contact Form */}
          <div className="flex-1 mt-16 card p-4 lg:p-10  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
            <form
              ref={form}
              onSubmit={handleContactData}
              className="grid gap-5"
            >
              <input
                name="username"
                type="text"
                className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
                placeholder="Full Name"
                defaultValue={user?.displayName}
              />
              <input
                name="email"
                type="text"
                className="w-full input input-bordered text-xl bg-blue-100 text-blue-900 font-medium"
                placeholder="Email"
                defaultValue={user?.email}
              />

              <textarea
                name="message"
                type="text"
                className="lg:min-h-40 min-h-20 w-full pt-2 input input-bordered text-xl bg-blue-100 text-blue-900 font-medium "
                placeholder="Describe your problem ..."
              />

              <input
                className="btn text-slate-200 pb-2 pt-1 text-2xl bg-transparent border-slate-200 hover:border-none hover:bg-blue-600"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          {/* map */}
          <address className="flex-1 lg:mt-16 space-y-2 mt-7">
            <div className=" flex items-center gap-2  text-white text-lg">
              <FaLocationDot className="text-2xl" />
              <span>Road# 2, House# 2, Baitul Aman Housing, Mohammadpur</span>
            </div>
            <div className="flex  items-center gap-2 text-white text-lg">
              <FaPhoneVolume className="text-2xl" />
              <a href="tel:+1234567890">1234567890</a>
            </div>
            <div className="flex items-center gap-2 text-white text-lg">
              <MdOutlineEmail className="text-2xl" />
              <a href="mailto:teeth@care.com" target="_blank">
                teeth@care.com
              </a>
            </div>
            <div className="flex  items-center gap-2 text-white text-lg">
              <FaClock className="text-2xl" />
              <span>Mon - Sat: 8.00 AM - 6.00 PM BD</span>
            </div>
            <iframe
              className="w-full lg:h-[300px] rounded-lg border-2 border-blue-600"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.366559583074!2d90.363497!3d23.829859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12555555555%3A0xae6d8391967a1b11!2sSporsho%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1717579969715!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </address>
        </div>
      </div>
    </>
  );
};

export default Contact;
