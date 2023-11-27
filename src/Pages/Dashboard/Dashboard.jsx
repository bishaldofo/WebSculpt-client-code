import { Helmet } from "react-helmet";
import DashboardLayout from "../../Layout/DashboardLayout";

const Dashboard = () => {
   return (
      <div>
         <Helmet>
            <title>WebSculpt | Dashboard</title>
         </Helmet>
         <DashboardLayout></DashboardLayout>
      </div>
   );
};

export default Dashboard;