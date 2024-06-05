import { FaPhoneVolume, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactNav = () => {
  return (
    <div className="lg:flex lg:justify-between lg:pt-5 lg:w-[90%] py-5 px-2  mx-auto">
      <div className=" flex justify-center items-center gap-2 text-white text-lg">
        <FaLocationDot className="text-2xl" />
        <span>Road# 2, House# 2, Baitul Aman Housing, Mohammadpur</span>
      </div>
      <div className="flex justify-center items-center gap-2 text-white text-lg">
        <FaPhoneVolume className="text-2xl" />
        <span>+880 123 456 789</span>
      </div>
      <div className="flex justify-center items-center gap-2 text-white text-lg">
        <MdOutlineEmail className="text-2xl" />
        <span>Hellow@example.com</span>
      </div>
      <div className="flex justify-center items-center gap-2 text-white text-lg">
        <FaClock className="text-2xl" />
        <span>Mon - Sat: 8.00 AM - 6.00 PM BD</span>
      </div>
    </div>
  );
};

export default ContactNav;
