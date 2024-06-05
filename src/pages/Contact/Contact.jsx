import { useContext, useRef } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
          <div className="flex-1 lg:h-[440px] lg:mt-16 mt-5">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29210.145499516093!2d90.33740087798185!3d23.77346243386871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1717572710969!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
