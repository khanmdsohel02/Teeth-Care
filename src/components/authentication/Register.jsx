const Register = () => {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("Anonymous");
  // const [photoURL, setPhotoURL] = useState("Anonymous");

  // const handleEmailAndPasswordSignUp = (e) => {
  //   e.preventDefault();
  //   createUserAndSetDisplayName(email, password, displayName, photoURL);
  // };

  // function createUserAndSetDisplayName(email, password, displayName, photoURL) {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;

  //       // Update the user profile
  //       return updateProfile(user, {
  //         displayName: displayName,
  //         photoURL: photoURL,
  //       }).then(() => {
  //         console.log("User registered:", user);
  //         console.log("User email:", user.email);
  //         console.log("User Name:", user.displayName);
  //         console.log("User Photo:", user.photoURL);

  //         // Redirect to home page
  //         navigate("/");
  //       });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       if (errorMessage.includes("weak-password")) {
  //         toast.error("Password should be at least 6 characters");
  //       } else if (errorMessage.includes("email-already-in-use")) {
  //         toast.error("Email already Exists");
  //       }
  //     });
  // }

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
          Create an Account!
        </h3>
        <form onSubmit="" className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">User Name</span>
            </label>
            <input
              // onChange={(e) => setDisplayName(e.target.value)}
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered text-lg"
              name="username"
              required
            />
          </div>
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
              <span className="label-text text-lg">Passwoed</span>
            </label>
            <input
              // onChange={(e) => setPassword(e.target.value)}
              type="passwoed"
              placeholder="Passwoed"
              className="input input-bordered text-lg"
              name="passwoed"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
              // onChange={(e) => setPhotoURL(e.target.value)}
              type="text"
              placeholder="Your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"SignUp"}
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

export default Register;
