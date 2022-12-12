import React from 'react';
import mypic from '../../asset/mypic.jpg'
const About = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>


                <div className='flex justify-center my-10'>
                    <p className=''><img src={mypic} height={200} width={300} alt="" /></p>
                </div>

                <div className='mx-20 my-10'>
                    <h2 className='text-2xl my-4'>I'm Md. Iqbal Hosssain</h2>
                  <h4 className='mt-2  text-justify'>I'm MERN Stack Developer from Dhaka, Bangladesh. Passionate about technology. I love to explore new technologies, solve new problems and continuously learn new things to make the applications and websites I build more useful and enjoyable for their users.</h4>
                </div>
            </div>




            <div class="card w-80 shadow-xl mx-auto my-20 ">
                <div class="card-body bg-green-400">
                    <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>MY SKILLS</h2>  <hr />
                </div>
            </div>






            <div className='my-10 px-10  py-10'>
                <div className='text-left lg:grid grid-cols-3'>

                    <div class="card w-72 shadow-xl">
                        <div class="card-body  ">
                            <h2 class="card-title text-green-400">Font-End</h2>

                            <div className='py-10'>

                                <p >  <span className='text-gray-600 font-semibold '>HTML </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold '>CSS </span> <progress class="progress progress-primary  w-56" value="75" max="100"></progress> </p>
                                <p > <span className='text-gray-600 font-semibold'>javaScript + ES6 </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Bootstrap </span> <progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Tailwind </span><progress class="progress progress-primary  w-56" value="75" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>React </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>React Router </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>

                            </div>
                        </div>
                    </div>

                    <div class="card w-72 shadow-xl my-6">
                        <div class="card-body">
                            <h2 class="card-title text-emerald-400">Back-End</h2> <hr />

                            <div className='py-10'>

                                <p> <span className='text-gray-600 font-semibold'>Node </span><progress class="progress progress-primary  w-56" value="30" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Express </span><progress class="progress progress-primary  w-56" value="35" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>MongoDB </span><progress class="progress progress-primary  w-56" value="45" max="100"></progress></p>
                            </div>
                        </div>
                    </div>

                    <div class="card w-72 shadow-xl">
                        <div class="card-body ">
                            <h2 class="card-title text-green-400">Tools</h2>

                            <div className='py-10'>

                                <p> <span className='text-gray-600 font-semibold'>Github</span><progress class="progress progress-primary  w-56" value="60" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Firebase</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Netlify </span><progress class="progress progress-primary  w-56" value="85" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Heroku </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>VS Code</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;