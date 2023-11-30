import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import { FaChevronLeft } from "react-icons/fa";

const Login = () => {
   const { login } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   
   const from = location.state?.from?.pathname || "/";

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      login(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Login successful!",
               showConfirmButton: false,
               timer: 1500
             });
            navigate(from, { replace: true });
         })
   }
   return (
      <div>
         <Helmet>
            <title>WebSculpt | Login</title>
         </Helmet>
         <div className="h-screen flex flex-col items-center justify-center">
            <div className="w-full md:w-[500px] m-auto space-y-5">
               <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link>
               </div>
               <div>
                  <h2 className="text-3xl font-bold mb-3 text-sky-500">Sign In</h2>
                  <p>Enter your email address to get started</p>
               </div>
               <SocialLogin></SocialLogin>
               <form onSubmit={handleLogin}  className=" w-full m-auto space-y-2">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email Address</span>
                     </label>
                     <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Your Password</span>
                     </label>
                     <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <div className="form-control pt-5">
                     <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-xl'>Sign In</span></AwesomeButton>
                  </div>
               </form>
               <div className="pt-4">
                  <Link className="underline text-sky-500" to='/register'>Don't have an account? Sign up</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;