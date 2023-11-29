import { AwesomeButton } from "react-awesome-button";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
   const {
      register,
      reset,
      formState: { errors },
   } = useForm()
   
   return (
      <div className="h-screen flex flex-col justify-center items-center w-full md:w-[600px] m-auto space-y-5">
         <Helmet>
            <title>WebSculpt | Contact</title>
         </Helmet>
         <div className="mb-10"><Link className="flex items-center text-gray-900 font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link>
         </div>
         <div className="text-center px-10 mb-10">
            <h1 className="text-3xl text-sky-500 font-bold mb-5">Contact Us</h1>
            <p>For further questions, including partnership opportunities, please email hello@websculpt.com or contact using our contact form.</p>
         </div>
         <form className="w-full">
            <div className="flex flex-col gap-5 md:flex-row">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">First Name</span>
                  </label>
                  <input type="text" name="fName" {...register("fName", { required: true })} placeholder="First Name" className="input input-bordered" />
                  {errors.fName && <span className="text-red-600">First Name is required</span>}
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" name="lName" {...register("lName", { required: true })} placeholder="Last Name" className="input input-bordered" />
                  {errors.lName && <span className="text-red-600">Last Name is required</span>}
               </div>
            </div>
            <div className="form-control w-full mt-5">
               <textarea name="message" {...register("message", { required: true })} className="textarea textarea-bordered" placeholder="Message"></textarea>
               {errors.message && <span className="text-red-600">Message is required</span>}
            </div>
            <div className="form-control mt-10">
               <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-xl'>Send Message</span></AwesomeButton>
            </div>
         </form>
      </div>
   );
};

export default Contact;