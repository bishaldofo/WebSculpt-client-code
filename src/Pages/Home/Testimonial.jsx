import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
   const [reviews, setReviews] = useState([])

   useEffect( () => {
      const fetchData = async () => {
         try {
            const res = await axios.get('reviews.json');
            setReviews(res.data)
         } catch (error) {
            console.error("Error fetching menu:", error)
         }
      }
      fetchData();
   }, [])
   return (
      <div className='bg-base-200 py-20'>
         <div className='flex max-w-7xl m-auto items-center justify-center gap-5 flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
               <h2 className='text-3xl font-semibold text-sky-500 mb-5'>What peolpe are saying</h2>
               <p>Discover the buzz around our commitment to excellence! Clients rave about our innovative solutions, unwavering dedication, and transformative impact. Dive into success stories and join the chorus of satisfied voices at WebSculpt. It's not just business; it's a journey from aspirations to achievements!</p>
            </div>
            <div className='w-full md:w-1/2'>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  {
                     reviews.map(review => 
                        <SwiperSlide key={review._id}>
                           <div className='flex items-center justify-center flex-col space-y-3 px-10 lg:px-20'>
                              <Rating
                                 style={{ maxWidth: 180 }}
                                 value={review.rating}
                                 readOnly
                              />
                              <div><FaQuoteLeft className='text-4xl my-5 text-sky-500' /></div>
                              <p className='text-center'>{review.details}</p>
                              <h4 className='text-xl font-light text-sky-500 italic'>{review.name}</h4>
                           </div>
                        </SwiperSlide>   
                     )
                  }
                  
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;