import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiKey } from "react-icons/bi";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../assets/loginAnimation.json";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    //loading
    Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    signIn(email, pass)
      .then(() => {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password!",
        });
      });
  };

  return (
    <div className="bg-[url(/bg.png)] bg-contain">
      <div className="bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5">
          <div className="title mt-5">
            <Title>Login Now</Title>
          </div>

          <div className="flex justify-between items-center gap-5 pt-8 flex-col lg:flex-row">
            {/* Login Form */}
            <div className="login-form flex-1 w-full max-w-md">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                {/* Email */}
                <div className="flex items-center">
                  <BiEnvelope className="text-3xl text-slate-500" />
                  <input
                    className="flex-1 border-b-2 p-2 bg-transparent outline-none focus:border-orange-400 transition-all duration-200"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <div className="flex items-center">
                    <BiKey className="text-3xl text-slate-500" />
                    <input
                      className="flex-1 border-b-2 p-2 bg-transparent outline-none focus:border-orange-400 transition-all duration-200"
                      type="password"
                      name="pass"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <p className="text-end text-[13px] text-slate-500">
                    Forgot password?
                  </p>
                </div>

                {/* Register link */}
                <div className="p-1 flex gap-2 text-sm text-slate-600">
                  <span>Don't have an account?</span>
                  <Link
                    to="/registration"
                    className="text-orange-500 hover:underline"
                  >
                    Register
                  </Link>
                </div>

                {/* Submit button */}
                <input
                  type="submit"
                  value="Login Now"
                  className="btn cursor-pointer bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded font-semibold transition"
                />
              </form>
            </div>

            {/* Social login */}
            <Social from={from} />

            {/* Lottie animation */}
            <div className="lottie flex-1 mx-20 hidden lg:block">
              <Lottie animationData={loginAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
