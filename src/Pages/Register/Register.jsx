import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="py-10">
         <Helmet>
            <title>WebSculpt | Register</title>
         </Helmet>
         <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-[500px] m-auto space-y-5">
               <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link></div>
               <div>
                  <h2 className="text-3xl font-bold mb-3 text-sky-500">Sign Up</h2>
                  <p>Enter your email address to get started</p>
               </div>

               <div>
                  <button className="btn w-full bg-white shadow-md" type="submit"><img className="w-4" src="https://i.ibb.co/YWF3FVg/google.png" alt="" />Sign in with Google</button>
               </div>
               <form className="w-full m-auto space-y-2">
                  <div className="flex flex-col gap-5 md:flex-row">
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Your Name" className="input input-bordered" required />
                     </div>

                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Designation
                           </span>
                        </label>
                        <select className="select select-bordered">
                           <option disabled selected>Select your Designation</option>
                           <option>Admin</option>
                           <option>HR</option>
                           <option>Employee</option>
                        </select>
                     </div>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row">
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered" required />
                     </div>
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                  </div>
                  <div className="form-control">
                     <input type="file" className="file-input w-full max-w-xs rounded-l-none rounded-md" />
                  </div>
                  <div className="form-control pt-5">
                     <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-xl'>Sign Up</span></AwesomeButton>
                  </div>
               </form>
               <div className="pt-4">
                  <Link className="underline text-sky-500" to='/login'>Already have an account? Sign In</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;