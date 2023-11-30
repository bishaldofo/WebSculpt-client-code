import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Users from "../Pages/DashboardPage/Users/Users";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         }
      ]
   },
   {
      path: "/dashBoard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
         {
            path: 'users',
            element: <Users></Users>
         }
      ]
   },
   {
      path: '/contact',
      element: <Contact></Contact>
   },
   {
      path: '/login',
      element: <Login></Login>
   },
   {
      path: '/register',
      element: <Register></Register>
   }
]);
 
export default router