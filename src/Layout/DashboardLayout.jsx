import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   return (
      <div className="flex max-w-7xl m-auto">
         <div className="w-64 min-h-full bg-sky-500">
            <ul className="menu">
               <li><NavLink to='/'>All Employee List</NavLink></li>
            </ul>
         </div>
         <div className="flex-1">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default DashboardLayout;