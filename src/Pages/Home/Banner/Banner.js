import React from 'react';
import coder3 from '../../../asset/coder3.gif'
import linkedin from '../../../asset/linkedin.png'
import facebook from '../../../asset/facebook.png'
import github from '../../../asset/github.png'



const Banner = () => {
    return (
        <div>
        <div class="hero  my-10">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={coder3} class=" rounded-lg  mb-10" alt='' />
                <div className='px-6'>
                    <h1 class="text-5xl font-bold">I'm <span className='text-green-400'>IQBAL</span> Hossain</h1>
                    <p class="py-6  text-gray-600">I'm a Front End Web Developer with <span className='text-green-400 font-semibold' >M</span>
                        <span className='font-semibold text-gray-700'>E</span>
                        <span className='text-cyan-500 font-semibold'>R</span>
                        <span className='text-green-600	font-semibold '>N</span>.
                        I've completed more than 20 websites. <br /> If you need any help to build your website feel free to contact with me.</p>

                    <span className='flex'>
                        <a href="https://drive.google.com/file/d/1E9W4oXv0ARR1enRvRDHJ8c0Ifp1yVAM-/view?usp=sharing" target=" _blank"> <button className='btn border-none bg-green-400 text-white' >Get Resume</button></a>

                        <span className='flex justify-center mt-2 ml-6 '>
                            <a href="https://www.linkedin.com/in/iqbalshuvod/"><img src={linkedin} className="w-8 mx-4" alt="" /></a>
                           
                            <a href="https://github.com/Iqbalhossainshuvo" target=" _blank"><img src={github} className="w-8" alt="" /></a>
                        </span>
                    </span>


                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;