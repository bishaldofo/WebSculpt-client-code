import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'


const HomeSlider = () => {
   return (
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
         <SwiperSlide>
            <div className='relative flex items-center justify-center'>
               <img className='h-[90vh] md:h-screen w-full object-cover' src="https://i.ibb.co/LPk36ys/slider1.jpg" alt="" />
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent'></div>
               <div className='absolute px-5 md:px-0 flex max-w-7xl'>
                  <div className='w-full space-y-5'>
                     <h1 className='text-white text-3xl md:text-6xl font-semibold'><span className='font-light'>Hire <span className='text-sky-500'>Experts</span> &</span> <br /> <span className='font-semibold'>Get Your Project Done</span></h1>
                     <p className='text-white'>Your Success, Our Mission- Building a Legacy Together.</p>
                     <div>
                        <AwesomeButton className='bg-sky-500' type="primary"><span className='text-white text-xl'>Let's Connect</span></AwesomeButton>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='relative flex items-center justify-center'>
               <img className='h-[90vh] md:h-screen w-full object-cover' src="https://i.ibb.co/gF0R3Lc/slider2.jpg" alt="" />
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent'></div>
               <div className='absolute px-5 md:px-0 flex max-w-7xl'>
                  <div className='w-full space-y-5'>
                     <h1 className='text-white text-3xl md:text-6xl font-semibold'><span className='font-light'>Hire <span className='text-sky-500'>Experts</span> &</span> <br /> <span className='font-semibold'>Get Your Project Done</span></h1>
                     <p className='text-white'>Your Success, Our Mission- Building a Legacy Together.</p>
                     <div>
                        <AwesomeButton type="primary"><span className='text-white text-xl'>Let's Connect</span></AwesomeButton>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='relative flex items-center justify-center'>
               <img className='h-[90vh] md:h-screen w-full object-cover' src="https://i.ibb.co/Hx8KRq8/slider3.jpg" alt="" />
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent'></div>
               <div className='absolute px-5 md:px-0 flex max-w-7xl'>
                  <div className='w-full space-y-5'>
                     <h1 className='text-white text-3xl md:text-6xl font-semibold'><span className='font-light'>Hire <span className='text-sky-500'>Experts</span> &</span> <br /> <span className='font-semibold'>Get Your Project Done</span></h1>
                     <p className='text-white'>Your Success, Our Mission- Building a Legacy Together.</p>
                     <div>
                        <AwesomeButton type="primary"><span className='text-white text-xl'>Let's Connect</span></AwesomeButton>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='relative flex items-center justify-center'>
               <img className='h-[90vh] md:h-screen w-full object-cover' src="https://i.ibb.co/x1M3N2R/slider4.jpg" alt="" />
               <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent'></div>
               <div className='absolute px-5 md:px-0 flex max-w-7xl'>
                  <div className='w-full space-y-5'>
                     <h1 className='text-white text-3xl md:text-6xl font-semibold'><span className='font-light'>Hire <span className='text-sky-500'>Experts</span> &</span> <br /> <span className='font-semibold'>Get Your Project Done</span></h1>
                     <p className='text-white'>Your Success, Our Mission- Building a Legacy Together.</p>
                     <div>
                        <AwesomeButton type="primary"><span className='text-white text-xl'>Let's Connect</span></AwesomeButton>
                     </div>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default HomeSlider;