import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { email, password };

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");

        fetch(`https://teeth-care-backend.onrender.com/users/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);

            if (data?.message) {
              toast.success(data?.message);
              form.reset();
              navigate(location?.state ? location.state : "/");
            } else if (data?.result?.acknowledged) {
              toast.success("Login successfully");
              form.reset();
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.includes("invalid-credential")) {
          toast.error("Invalid email or password");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const fName = user?.displayName;
        const photo = user?.photoURL;
        const email = user?.email;
        navigate(location?.state ? location.state : "/");

        const googleUserInfo = { fName, photo, email };

        fetch(`https://teeth-care-backend.onrender.com/users/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);

            if (data?.message) {
              toast.success(data?.message);
              navigate(location?.state ? location.state : "/");
            } else if (data?.result?.acknowledged) {
              toast.success("Login successfully");
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        if (error.message.includes("popup-closed-by-user")) {
          toast.error("Why You Do this?");
        }
      });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.warning("Plz! Check Your Email");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("missing-email")) {
          toast.error("Plz! Fill Email Field");
        }

        // ..
      });
  };

  return (
    <div className="hero my-5 lg:h-[75vh] ">
      <div className="card shrink-0 w-full max-w-lg shadow-lg shadow-blue-400 bg-gradient-to-b from-blue-600 to-blue-500">
        <h3 className="text-5xl font-bold text-center lg:py-10 pt-3 text-slate-100">
          LogIn Here!
        </h3>
        <form onSubmit={handleLogin} className="card-body ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                Your E-mail
              </span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your E-mail"
              className="input input-bordered text-xl bg-blue-100 text-blue-900"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-slate-100">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-xl bg-blue-100 text-blue-900"
              name="password"
              required
            />
            <label className="label lg:mt-3">
              <button
                onClick={handleResetPassword}
                className="label-text-alt link link-hover text-slate-100  hover:font-semibold text-lg"
              >
                Forgot password?
              </button>
            </label>
            <label className="label lg:mt-3 lg:w-[65%] w-full text-slate-100">
              <span className="text-lg"> Don&apos;t Have An Account?</span>
              <Link
                className=" font-semibold  text-xl underline"
                to={"/register"}
              >
                Register
              </Link>
            </label>
          </div>
          <div className="form-control lg:mt-6">
            <input
              type="submit"
              value={"SignIn"}
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

export default Login;
