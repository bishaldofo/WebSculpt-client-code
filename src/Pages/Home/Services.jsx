import ServiceCard from "../../Component/ServiceCard/ServiceCard";
import useServices from "../../Hooks/useServices";

const Services = () => {
   const [services] = useServices();
   
   return (
      <div className="max-w-7xl m-auto text-center py-20">
         <h1 className="text-4xl font-light mb-10">Our <span className="text-sky-500">Services</span></h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
               services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;