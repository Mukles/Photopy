import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.int";

const Login = () => {
  const location = useLocation();
  const navegate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const redirect = (url) => {
    console.log(`${url ? `${url}` : "/"}`);
    navegate(`${url ? `${url}` : "/"}`);
  };

  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const loginHander = async (e) => {
    e.preventDefault();
    try {
      if (userDetails.email !== "" && userDetails.password !== "") {
        console.log(userDetails);
        await signInWithEmailAndPassword(
          userDetails.email,
          userDetails.password
        );
        redirect(location?.state?.from.pathname);
      }
    } catch (err) {
      alert(err);
    }
  };

  const onGoogleSignIn = async (e) => {
    try {
      await signInWithGoogle();
      redirect(location?.state?.from.pathname);
    } catch (err) {
      alert(err);
    }
  };

  const onSignInGithub = async () => {
    try {
      await signInWithGithub();
      redirect(location?.state?.from.pathname);
    } catch (err) {
      alert(err);
    }
  };

  const onSignInFacebook = async () => {
    try {
      await signInWithFacebook();
      redirect(location?.state?.from.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  const onBulrHander = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to your account
                </h2>
              </div>
              <div className="mt-12">
                <div>
                  <div>
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Email Address
                    </div>
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type=""
                      name="email"
                      onChange={onBulrHander}
                      placeholder="mike@gmail.com"
                    />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                      </div>
                      <div>
                        <a
                          href="j"
                          className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                cursor-pointer"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type=""
                      name="password"
                      onChange={onBulrHander}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={(e) => loginHander(e)}
                      className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                        shadow-lg"
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                  Don't have an account ?{" "}
                  <Link
                    to={`/register`}
                    state={location.state}
                    className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="mt-10 grid space-y-4">
                <button
                  onClick={onGoogleSignIn}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt=""
                      srcSet=""
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
                <button
                  onClick={onSignInGithub}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute left-0 w-5 text-gray-700"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Github
                    </span>
                  </div>
                </button>
                <button
                  onClick={onSignInFacebook}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                      className="absolute left-0 w-5"
                      alt="Facebook logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
              </div>

              <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{" "}
                  <a
                    href="
                  "
                    className="underline"
                  >
                    Terms of Use
                  </a>{" "}
                  and confirm you have read our{" "}
                  <a href="f" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the{" "}
                  <a href="f" className="underline">
                    Google Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="f" className="underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
