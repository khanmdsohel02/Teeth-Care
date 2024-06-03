import { Link } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailAndPasswordLogin = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Logged in successfully
  //       const user = userCredential.user;
  //       console.log("User logged in:", user);
  //       console.log("User logged in:", user.email);
  //       console.log("User logged in:", user.displayName);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       if (errorMessage.includes("invalid")) {
  //         toast.error("Invalid Email or Password");
  //       }
  //     });
  // };

  // const provider = new GoogleAuthProvider();

  // const handleGoogleLogIn = (e) => {
  //   e.preventDefault();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("User signed in:", user.email);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };

  return (
    <div className="hero min-h-screen">
      <div className="card shrink-0 w-full max-w-lg shadow-lg shadow-red-400">
        <h3 className="text-5xl font-bold text-center py-10 text-red-400">
          LogIn Here!
        </h3>
        <form onSubmit="" className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Your E-mail</span>
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your E-mail"
              className="input input-bordered text-lg"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="input input-bordered text-lg"
              name="password"
              required
            />
            <label className="label mt-3">
              <a
                href="#"
                className="label-text-alt link link-hover text-red-600  hover:font-bold text-lg"
              >
                Forgot password?
              </a>
            </label>
            <label className="label mt-3">
              {" "}
              <span> New?</span>
              <Link to={"/register"}>Register</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"SignIn"}
              className="btn bg-red-400 hover:bg-red-600 text-red-900 hover:text-white text-xl font-semibold"
            />
          </div>
          <div className="divider divider-success mt-6">OR</div>
          <div className="form-control mt-4">
            <input
              // onClick={handleGoogleLogIn}
              type="submit"
              value={"SignIn with Google"}
              className="btn  border border-red-600 bg-transparent hover:bg-red-600 text-white hover:text-white text-xl font-semibold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
