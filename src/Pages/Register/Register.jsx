import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
   const {createUser} = useContext(AuthContext)
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   const onSubmit = (data) => {
      console.log(data)
      createUser(data.email, data.password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
         })
   }
   
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
               <form onSubmit={handleSubmit(onSubmit)} className="w-full m-auto space-y-2">
                  <div className="flex flex-col gap-5 md:flex-row">
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                     </div>

                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Designation
                           </span>
                        </label>
                        <select defaultValue="default" {...register("designation", { required: true })} className="select select-bordered">
                           <option disabled value="default">Select your Designation</option>
                           <option value="admin">Admin</option>
                           <option value="hr">HR</option>
                           <option value="employee">Employee</option>
                        </select>
                        {errors.designation && <span className="text-red-600">Designation is required</span>}
                     </div>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row">
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Your Bank Account</span>
                        </label>
                        <input type="text" name="bank" {...register("bank", { required: true })} placeholder="Your Bank Account" className="input input-bordered" />
                        {errors.bank && <span className="text-red-600">Bank Account is required</span>}
                     </div>
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Salary</span>
                        </label>
                        <input type="text" name="salary" {...register("salary", { required: true })} placeholder="Salary" className="input input-bordered" />
                        {errors.salary && <span className="text-red-600">Salary is required</span>}
                     </div>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row">
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" name="email" {...register("email", { required: true })} placeholder="Your Email Address" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                     </div>
                     <div className="form-control w-full">
                        <label className="label">
                           <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name="password" {...register("password", {
                           required: true,
                           minLength: 8,
                           maxLength: 20,
                           pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                        })} placeholder="Your Password" className="input input-bordered" />
                        {errors.password?.type === "required" && (<p className="text-red-500">Password is required</p>)}
                        {errors.password?.type === "minLength" && (<p className="text-red-500">Password must be 8 characters</p>)}
                        {errors.password?.type === "maxLength" && (<p className="text-red-500">Password must be less than 20 characters</p>)}
                        {errors.password?.type === "pattern" && (<p className="text-red-500">Password must have one uppercase, one lowercase, one number and one special character</p>)}
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                  </div>
                  <div className="form-control">
                     <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs rounded-l-none rounded-md" />
                     {errors.image && <span className="text-red-600">Image is required</span>}
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