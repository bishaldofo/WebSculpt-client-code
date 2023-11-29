import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
   const { user, logOut, loading } = useContext(AuthContext)

   if (loading) {
      return <div className="h-screen flex justify-center items-center">
         <progress className="progress w-56"></progress>
      </div>
   }
   
   const handleLogOut = (e) => {
      e.preventDefault();
      logOut()
   }

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
               
               {
                  user ?
                     <>
                        <h4 className="text-white mr-2 text-lg">
                           {
                              user?.displayName
                           }
                        </h4>
                        <div className="dropdown dropdown-end">
                           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                           </div>
                           </div>
                           <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                              <li>
                                 <button className="btn pt-3">Profile</button>
                              </li>
                              <li><button className="btn pt-3 mt-2" onClick={handleLogOut}>Logout</button></li>
                           </ul>
                        </div>
                     </>
                     :
                     <>
                        <Link to="/login">
                           <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-lg'>Login</span></AwesomeButton>
                        </Link>
                     </>
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;