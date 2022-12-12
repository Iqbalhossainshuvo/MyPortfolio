import React from 'react';
import texi1 from '../../../asset/Project pic/texi1.png'
import texi2 from '../../../asset/Project pic/texi2.png'
import texi3 from '../../../asset/Project pic/texi3.png'

const Texiservice = () => {
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src={texi3}
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src={texi1}
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src={texi2}
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center m-4' ><a className='px-4' href="https://github.com/Iqbalhossainshuvo/Texi-Service-client">Client site code</a> <a href="https://github.com/Iqbalhossainshuvo/Texi-Service-Server">Server site code</a> </div>
            </div>



            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 lg:py-20">
                <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
                    Features:
                </h5>
                <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Users can become a seller or a buyer when they are registering. Buyer can report a product.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            User can Order Any choice product and also can report any product.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Seller can add a new product and delete their any product any time.
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            secure Admin panel, admin can remove any users or seller and reported products.
                        </li>
                    </ul>
                </div>
            </div>




            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
                    Technology use:
                </h5>
                <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            React
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            daisy UI
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Tailwind,
                        </li>
                    </ul>


                    
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Firebase
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            React Router Dom
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Axios
                        </li>
                    </ul>
                  
                    <ul className="">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            React HotToast
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Express.js
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            Node.js
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            MongoDB
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            dotenv
                        </li>
                        <li className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            JSON Web Tokens
                        </li>
                    </ul>
                  
                </div>
            </div>
        </>
    );
};

export default Texiservice;