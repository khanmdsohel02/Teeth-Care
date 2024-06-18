import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-red-100 h-[100vh]">
      <img
        className="w-[95%] lg:w-[50%] rounded-lg mb-6"
        src="https://i.ibb.co/FsCwPfJ/404.jpg"
        alt="404"
      />
      <Link to="/">
        <button className="btn bg-red-600 hover:bg-red-700 text-white py-2 px-7 text-lg border-none">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
