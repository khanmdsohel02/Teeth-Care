import { useContext, useRef } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const form = useRef();

  const handleContactData = (e) => {
    e.preventDefault();
    const ContactForm = e.target;
    const userName = ContactForm.username.value;
    const email = ContactForm.email.value;
    const message = ContactForm.message.value;

    const contactData = { userName, email, message };
    console.log(contactData);

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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-[70%] mx-auto mt-16 card p-4 lg:p-20  shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
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
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
