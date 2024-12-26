import Lottie from 'lottie-react';
import lottieData from '../assets/Lottie/register.json'
import { useContext, useState } from 'react';
import AuthContext from '../Context/Authcontext/AuthContext';
import { Link,  Navigate, useLocation, useNavigate  } from 'react-router-dom';
import googlelogo from '../assets/Logo/googleicon.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // const [show,setshow] =useState(false)
  // const location = useLocation();
  const [err, seterr] = useState("");
    const {CreateUser,googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister =event =>{
        event.preventDefault();
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        const userData ={email,password}
        console.log(userData);

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
          seterr("At Least one UpperCase, one LowerCase and should be six characters long");
          toast.error(`${err}`, {
            position: "top-center"
          });
          // console.log(err);
          return;
        }
        CreateUser(email,password)
        .then(result=>{
            const user =result.user
            // console.log(user);
            toast.error("User Create Successfull", {
              position: "top-center", 
              autoClose: 3000, 
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored", 
            });
        })
        .catch(error=>{
            const Errormessage =error.message
            // console.log(Errormessage);
            toast.error(Errormessage, {
              position: "top-center", 
              autoClose: 3000, 
              draggable: true,
              theme: "colored", 
            });
        })
    }

      const handleGoogleSignIn =()=>{
        googleSignIn()
        .then((result)=>{
          // console.log(result.user);
          toast.error("Create User with Google Successful", {
            position: "top-center", 
            theme: "colored"
          });
          navigate(location?.state ? location?.state : "/");
        })
        .catch((error)=>{
         const errorMessage = error.message;
        //  console.log(errorMessage);
        toast.error(errorMessage, {
          position: "top-center", 
          theme: "colored"
        });
        })
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <Lottie animationData={lottieData} loop={true} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
            <div className="text-center text-2xl font-bold ">Register User</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <button
            onClick={handleGoogleSignIn}
            className="shadow-md hover:shadow-xl border mb-3 border-[#13131312] justify-center py-2 mx-8 flex items-center gap-3  text-lg rounded-md "
          >
            <img src={googlelogo} className="w-6 h-6" alt="" />
            <p className="text-base">Sign In With Google</p>
          </button>
          <div className="text-sm ml-8 mt-3 font-normal text-[#706F6F]">
            Already You Have an Account ?
            <Link to="/login" className="text-sm font-normal text-[#FF8C47]">
              Login
            </Link>
          </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Register;