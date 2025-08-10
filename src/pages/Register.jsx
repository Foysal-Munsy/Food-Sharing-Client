import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import signup from "../assets/Signup.json";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const goTo = useNavigate();
  const location = useLocation();
  const { createUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const pass = form.pass.value;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (pass.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters long!",
      });
    }

    if (!uppercaseRegex.test(pass)) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must include at least one uppercase letter!",
      });
    }

    if (!lowercaseRegex.test(pass)) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must include at least one lowercase letter!",
      });
    }

    // If valid, create user
    createUser(email, pass)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            setUser({ ...res.user, displayName: name, photoURL: image });
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              showConfirmButton: false,
              timer: 1500,
            });
            goTo(location.state ? location.state : "/");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: err.message,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="bg-[url(/bg.png)] bg-contain">
      <div className="bg-white bg-opacity-90 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="title mt-5">
            <Title>Register Now</Title>
          </div>
          {/* login-form flex-1 w-full max-w-md */}
          <div className="flex justify-between items-center gap-5 pt-8 flex-col lg:flex-row ">
            <div className="login-for flex-1 w-full max-w-md">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <BiUser className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiImageAdd className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="text"
                    name="image"
                    placeholder="Enter Image URL"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiEnvelope className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiKey className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="password"
                    name="pass"
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <div className="p-1 flex gap-2 text-sm text-slate-600">
                  <span>Already have an account?</span>
                  <Link to="/login" className="text-orange-500 hover:underline">
                    Login
                  </Link>
                </div>

                <input
                  type="submit"
                  value="Register Now"
                  className="btn cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-semibold transition"
                />
              </form>
            </div>

            <Social />

            <div className="lottie flex-1 flex justify-center items-center min-w-[300px] max-w-[500px] h-[400px]">
              <Lottie
                animationData={signup}
                className="h-[400px]"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
