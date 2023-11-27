import { Helmet } from "react-helmet";
import HomeSlider from "./HomeSlider";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>WebSculpt | Home</title>
         </Helmet>
         <HomeSlider></HomeSlider>
         <Services></Services>
         <Testimonial></Testimonial>
      </div>
   );
};

export default Home;