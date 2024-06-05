import { FaPhoneVolume, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactNav = () => {
  return (
    <div className="lg:flex lg:justify-between lg:pt-5 lg:w-[90%] py-5 pl-5  mx-auto">
      <div className=" flex items-center gap-2 text-white text-lg">
        <FaLocationDot className="text-2xl" />
        <span>Road# 2, House# 2, Baitul Aman Housing, Mohammadpur</span>
      </div>
      <div className="flex  items-center gap-2 text-white text-lg">
        <FaPhoneVolume className="text-2xl" />
        <a href="tel:+1234567890">1234567890</a>
      </div>
      <div className="flex  items-center gap-2 text-white text-lg">
        <MdOutlineEmail className="text-2xl" />
        <a href="mailto:teeth@care.com" target="_blank">
          teeth@care.com
        </a>
      </div>
      <div className="flex  items-center gap-2 text-white text-lg">
        <FaClock className="text-2xl" />
        <span>Mon - Sat: 8.00 AM - 6.00 PM BD</span>
      </div>
    </div>
  );
};

export default ContactNav;
