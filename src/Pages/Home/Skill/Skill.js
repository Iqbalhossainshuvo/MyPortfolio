import React from 'react';
import { Autoplay,Pagination, Navigation } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import html from '../../../asset/Programin img/html5.png'
import css from '../../../asset/Programin img/css.png'
import Bootstrap from '../../../asset/Programin img/bootstrap.png'
import Tailwind from '../../../asset/Programin img/Tailwind_CSS_Logo.svg.png'
import javaScript from '../../../asset/Programin img/JavaScript-logo.png'
import es6 from '../../../asset/Programin img/es6.png'
import react from '../../../asset/Programin img/react.png'
import router from '../../../asset/Programin img/router.png'
import firebase from '../../../asset/Programin img/firebase.png'
import node from '../../../asset/Programin img/node.png'
import express from '../../../asset/Programin img/express-js.png'
import mongodb from '../../../asset/Programin img/mongodb.png'
import github from '../../../asset/Programin img/github.png'
import netlify from '../../../asset/Programin img/netlify.png'
import vscode from '../../../asset/Programin img/vsCode.png'



const Skill = () => {

    return (
        <div>


        <div class="card w-80 bg-base-100 shadow-xl mx-auto my-20 ">
            <div class="card-body bg-green-400">
                <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>MY SKILLS</h2>  <hr />
            </div>

        </div>


        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                centeredSlides={true}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={html} className="h-24 w-30  mx-auto  " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={css} className="rounded-lg h-24 w-30 mx-auto  " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Bootstrap} className=" h-28 w-32 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Tailwind} className=" h-28 w-30 mx-auto  rounded-lg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={javaScript} className="rounded-lg h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={es6} className=" h-24 w-30 mx-auto rounded-lg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={router} className=" rounded-lg  h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={firebase} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={node} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={express} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mongodb} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={github} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={netlify} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={vscode} className=" h-24 w-30 mx-auto " alt="" />
                </SwiperSlide>
            </Swiper>
        </>


        <div className='my-10 px-10 py-10'>
            <div className='text-left lg:grid grid-cols-3'>

                <div class="card w-72 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body  ">
                        <h2 class="card-title text-cyan-600">Font-End</h2>

                        <div className='py-10'>

                            <p >  <span className='text-gray-600 font-semibold flex '>HTML</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold '>CSS </span> <progress class="progress progress-primary  w-56" value="75" max="100"></progress> </p>
                            <p > <span className='text-gray-600 font-semibold'>javaScript + ES6 </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>
                            <p> <span className='text-gray-600 font-semibold'>Bootstrap </span> <progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>Tailwind </span><progress class="progress progress-primary  w-56" value="75" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>React </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>React Router </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>

                        </div>
                    </div>
                </div>


                <div class="card w-72 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body ">
                        <h2 class="card-title text-emerald-500">Back-End</h2>

                        <div className='py-10'>

                        <p> <span className='text-gray-600 font-semibold'>Node </span><progress class="progress progress-primary  w-56" value="30" max="100"></progress></p>
                            <p> <span className='text-gray-600 font-semibold'>Express </span><progress class="progress progress-primary  w-56" value="35" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>MongoDB </span><progress class="progress progress-primary  w-56" value="45" max="100"></progress></p>
                        </div>
                    </div>
                </div>


                <div class="card w-72 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body ">
                        <h2 class="card-title text-purple-500">Tools</h2>

                        <div className='py-10'>

                            <p> <span className='text-gray-600 font-semibold'>Github</span><progress class="progress progress-primary  w-56" value="60" max="100"></progress></p>
                            <p> <span className='text-gray-600 font-semibold'>Firebase</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>Netlify </span><progress class="progress progress-primary  w-56" value="85" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>Vercel </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            <p > <span className='text-gray-600 font-semibold'>VS Code</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    );
};

export default Skill;