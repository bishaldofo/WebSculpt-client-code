import { FaChevronLeft } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   const isAdmin = true;
   return (
      <div className="flex max-w-7xl m-auto">
         <div className="w-64 min-h-full bg-sky-500">
            <div className="pt-5 px-5"><Link className="flex items-center text-white font-semibold" to='/'><FaChevronLeft></FaChevronLeft>Homepage</Link>
            </div>
            <ul className="menu px-5">
               {
                  isAdmin ?
                     <> 
                        <h4 className="text-xl font-bold text-white uppercase pb-2">Admin</h4>
                        <li><NavLink to='/dashBoard/users'>All Employee List</NavLink></li>
                        <li><NavLink to='/dashBoard/manageUser'>Manage Employee</NavLink></li>
                     </>
                     : <></>
               }
            </ul>
         </div>
         <div className="flex-1 pt-10 pl-10">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default DashboardLayout;