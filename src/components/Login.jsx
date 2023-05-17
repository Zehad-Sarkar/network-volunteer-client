import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const signINUser = result.user;
        // console.log(signINUser);
        navigate('/')
        alert("sign in succesfull");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="w-1/2 p-4 mx-auto space-y-2 text-center border rounded-lg">
      <h1 className="text-3xl font-bold">Login With</h1>
      <button
        onClick={handleGoogleSignIn}
        className="gap-2 font-bold bg-white btn btn-outline btn-primary"
      >
        <FaGoogle></FaGoogle> Continue With Google
      </button>
      <p>
        Dont have an account?
        <span className="text-blue-600 ">
          <Link to="/register"> Create an account</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
