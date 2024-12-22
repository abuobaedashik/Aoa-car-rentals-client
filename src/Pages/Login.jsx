import Lottie from "lottie-react";
import lottielogin from '../assets/Lottie/Login.json'
import React, { useContext } from "react";
import AuthContext from "../Context/Authcontext/AuthContext";
import { Link } from "react-router-dom";
import googlelogo from '../assets/Logo/googleicon.png'

const Login = () => {
    const {LogInUser,googleSignIn}=useContext(AuthContext)
    const handleLogin =event =>{
        event.preventDefault();
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        const userData ={email,password}
        console.log(userData);
        // login
        LogInUser(email,password)
        .then(result=>{
            const user =result.user
            console.log(user);
        })
        .catch(error=>{
            const Errormessage =error.message
            console.log(Errormessage);
        })
        
    }

    const handleGoogleSignIn =()=>{
      googleSignIn()
      .then((result)=>{
        // console.log(result.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error)=>{
       const errorMessage = error.message;
      //  console.log(errorMessage);
      })
    }
    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={lottielogin} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center text-2xl font-bold ">Login User</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/* google login  */}
          <button onClick={handleGoogleSignIn}  className="shadow-md hover:shadow-xl border border-[#13131312] justify-center py-2 mb-3 mx-8 flex items-center gap-3  text-lg rounded-md ">
            <img src={googlelogo} className="w-6 h-6" alt="" />
            <p className="text-base">Sign In With Google</p>
          </button>
          <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">
            Dont Have an Account ?{" "}
            <Link to="/register" className="text-sm font-normal text-[#FF8C47]">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
