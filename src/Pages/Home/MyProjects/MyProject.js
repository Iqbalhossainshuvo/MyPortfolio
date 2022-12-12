import React from 'react';
import { Pagination,EffectFlip, Navigation  } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import car from '../../../asset/Project pic/car1.png'
import edu from '../../../asset/Project pic/Edu1.png'
import texi from '../../../asset/Project pic/texi3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const MyProject = () => {
    return (
        <div>

            <div class="card  w-80 bg-base-100 shadow-xl mx-auto mt-40 mb-20 ">
                <div class="card-body bg-green-400">
                    <h2 className='text-center text-4xl font-bold text-white tracking-widest '>MY PROJECTS</h2> <hr />
                </div>
            </div>


            <div className='lg:grid grid-cols-3 gap-10   '>

                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body  ">

                        <figure><img src={car} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-green">RESELLER-CAR</h2>
                            <p>Old car buying and selling web site</p>
                            <a href="https://reseller-car.web.app/" target=" _blank" > <button className='btn bg-green-400 border-none text-white ' >Live Site</button> </a>
                        </div>


                        <Link to='/resellercar' class="btn btn-sm bg-green-400 border-none">See Details</Link>
                        
                    </div>
                </div>




                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body ">

                        <figure><img src={edu} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-green">EDUZONE</h2>
                            <p>Online school platform.
                                
                            </p>
                            <a href="https://eduzone-2d184.web.app/" target=" _blank"> <button className='btn bg-green-400 border-none text-white'>Live Site</button></a>
                        </div>


                        <Link to='/eduzone' class="btn btn-sm bg-green-400 border-none">See Details</Link>
                        
                    </div>
                </div>



                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                <div class="card-body ">

                    <figure><img src={texi} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-green">ONLINE TEXI SERVICE</h2>
                        <p>Automobile Servicing Website.</p>
                        <a href="https://online-taxi-service-8d471.web.app/" target=" _blank"> <button className='btn bg-green-400 border-none text-white'>Live Site</button></a>
                    </div>


                    <Link to='/texiservice' class="btn btn-sm bg-green-400 border-none">See Details</Link>
                   
                    
                </div>
            </div>


            </div>



           





        </div>






    );
   
};

export default MyProject;