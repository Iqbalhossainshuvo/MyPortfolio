import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png'

const Navbar = () => {

    const menuItems = <>
    <li><Link className='rounded-lg font-semibold' to="/">Home</Link></li>
    <li><Link className='rounded-lg font-semibold' to="/about">About</Link></li>
    <li><Link className='rounded-lg font-semibold' to="/blog">Blogs</Link></li>
    <li><Link className='rounded-lg font-semibold' to="/contact">Contact</Link></li>
    
    {/* contact */}

</>
    return (
        <div>
            <div class="" >
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar px-10 bg-gray-100">
                        <div class="flex-1 px-2 mx-2 custom">
                            <Link to="/" className="btn btn-ghost normal-case"> <img src={logo} height={50} width={50} alt="" /> </Link>
                        </div>

                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal text-black gap-x-4">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                   
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                      

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;