import { AwesomeButton } from "react-awesome-button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

   const navLink = <>
      <li>
         <NavLink className="lg:text-white uppercase text-base" to='/dashBoard'>
            DashBoard
         </NavLink>
      </li>
      <li>
         <NavLink className="lg:text-white uppercase text-base" to='/contact'>
            Contact Us
         </NavLink>
      </li>
   </>
   return (
      <div className="w-full fixed z-30 bg-black bg-opacity-30 m-auto">
         <div className="navbar z-40 max-w-7xl m-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52">
                     {navLink}
                  </ul>
               </div>
               <span className="text-3xl font-bold">
                  <Link className="text-white" to='/'>Web<span className="text-sky-500">Sculpt</span></Link>
               </span>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLink}
               </ul>
            </div>
            <div className="navbar-end">
               <Link to="/login">
                  <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-lg'>Login</span></AwesomeButton>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;