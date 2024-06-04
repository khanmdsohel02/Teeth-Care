import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createNewUser, googleLogin } = useContext(AuthContext);
  console.log(location);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const fname = form.username.value;
    const photo = form.photo.value;
    // console.log(email, password, fname, photo);
    const userInfo = { email, password, fname, photo };

    createNewUser(email, password, fname, photo)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // Update the user profile
        return updateProfile(user, {
          displayName: fname,
          photoURL: photo,
        }).then(() => {
          console.log("User registered:", user);
          console.log("User email:", user.email);
          console.log("User Name:", user.displayName);
          console.log("User Photo:", user.photoURL);

          // Redirect to home page
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    fetch(`http://localhost:3000/users/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.acknowledged) {
          toast.success(`${fname} welcome to Teeth Care!`);
          form.reset();
          navigate(location?.state ? location.state : "/");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state ? location.state : "/");

        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="card shrink-0 w-full max-w-lg shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
        <h3 className="text-5xl font-bold text-center py-10 text-slate-100">
          Create an Account!
        </h3>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                User Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered text-xl bg-blue-100 text-blue-900"
              name="username"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                Your E-mail
              </span>
            </label>
            <input
              type="email"
              placeholder="Your E-mail"
              className="input ininput input-bordered text-xl bg-blue-100 text-blue-900"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                Passwoed
              </span>
            </label>
            <input
              type="passwoed"
              placeholder="Passwoed"
              className="input ininput input-bordered text-xl bg-blue-100 text-blue-900"
              name="password"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Your Photo URL"
              className="input input-bordered text-xl bg-blue-100 text-blue-900"
              required
            />
          </div>
          <label className="label mt-3 lg:w-[62%] w-[85%] text-blue-400">
            <span className="text-lg text-slate-100">
              {" "}
              Already Have An Account?
            </span>
            <Link
              className=" font-semibold  text-xl underline text-slate-100"
              to={"/login"}
            >
              Login
            </Link>
          </label>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"SignUp"}
              className="btn bg-slate-100 hover:bg-blue-700 text-blue-600 hover:text-slate-100 text-xl font-semibold border-none"
            />
          </div>

          <div className="form-control mt-4">
            <input
              onClick={handleGoogleLogin}
              type="submit"
              value={"SignIn with Google"}
              className="btn  border border-slate-100 bg-transparent hover:border-none hover:bg-blue-700 text-white hover:text-white text-xl font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
