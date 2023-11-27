import { AwesomeButton } from "react-awesome-button";

const ServiceCard = ({ service }) => {
   const {name, image, description} = service || {}
   return (
      <div>
         <div className="card rounded-md bg-base-100 border shadow-lg pb-5">
            <figure className=""><img className="w-2/5 object-cover" src={image} alt={name} /></figure>
            <div className="card-body text-center pt-0">
               <h2 className="text-xl font-semibold text-center">{name}</h2>
               <p className="">{description}</p>
               <div className="card-actions justify-center mt-5">
                  <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-xl'>Let's Connect</span></AwesomeButton>
               </div>
            </div>
         </div> 
      </div>
   );
};

export default ServiceCard;