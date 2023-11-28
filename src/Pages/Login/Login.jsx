import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

   const { login } = useContext(AuthContext);

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
         })
   }
   return (
      <div>
         <Helmet>
            <title>WebSculpt | Login</title>
         </Helmet>
         <div className="h-screen flex flex-col items-center justify-center">
            <div className="w-full md:w-[500px] m-auto space-y-5">
               <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link></div>
               <div>
                  <h2 className="text-3xl font-bold mb-3 text-sky-500">Sign In</h2>
                  <p>Enter your email address to get started</p>
               </div>

               <div>
                  <button className="btn w-full bg-white shadow-md" type="submit"><img className="w-4" src="https://i.ibb.co/YWF3FVg/google.png" alt="" />Sign in with Google</button>
               </div>
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