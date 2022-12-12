import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation ,faUser, faMobile, faMessage, } from '@fortawesome/free-solid-svg-icons';
import linkedin from '../../../asset/linkedin.png'
import github from '../../../asset/github.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vps78v6', 'template_ohqvsqe', form.current, 'tWnyNfflpUQ_5fA0L')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }

    return (
        <div >

        <div class="card w-80  shadow-xl mx-auto my-20 ">
            <div class="card-body bg-green-400">
                <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>Contact</h2>  <hr />
            </div>

        </div>

        <div className='lg:grid grid-cols-2 mb-20 '>

            <div class="card w-10/12 bg-green-100 text-neutral-content my-4 mx-auto  ">
                <div class="card-body text-black ">
                    <h2 class=" text-2xl font-semibold ">Contact Information</h2>

                    <span className='flex  my-4'>
                        <a href="https://www.linkedin.com/in/iqbalshuvod/" target=" _blank"><img src={linkedin} className="w-8 mx-4" alt="" /></a>
                        <a href="https://github.com/Iqbalhossainshuvo/" target=" _blank"><img src={github} className="w-8" alt="" /></a>
                    </span>

                    <p className='my-2'> Name:<br />  <FontAwesomeIcon className='text-white mr-2  h-6' icon={faUser} />  Iqbal Hossain</p>
                    <p className='my-2'> Phone: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMobile} />  +8801690204487</p>
                    <p className='my-2'> Email: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMessage} /> mdiqbalhossain03050@gmail.com</p>
                    <p className='my-2'> Location: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faLocation} /> Dhaka, Bangladesh</p>

                </div>

            </div>



            <div className='flex justify-center items-center my-4  mx-auto  bg-green-100 rounded-lg'>
                <div className=' my-10 px-4'>

                    <form ref={form} onSubmit={sendEmail}>



                        <div className='text-center'>
                            <input type="name" placeholder="Type Your Name" className="input w-full max-w-sm " required /> <br />
                            <input type="email" placeholder="Enter Your Email" className="input w-full max-w-sm mt-4" required /> <br />

                            <input type="text" placeholder="Subject" className="input w-full max-w-sm my-4" required />

                            <textarea className="textarea input w-full max-w-sm" placeholder="Your Message" required ></textarea>
                        </div> <br />

                        <div className='text-center mt-2'><button className='btn btn-primary bg-green-400 border-none text-white'>Send Message</button></div>

                    </form>


                </div>
            </div>




        </div>





    </div>
    );
};

export default Contact;