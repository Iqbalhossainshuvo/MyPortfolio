import React from 'react';
import logo from '../../../asset/logo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
        <footer class="footer footer-center p-4 bg-gray-100 text-base-content">
        <img src={logo} height={40} width={60} alt="" /> 
        <div>
            <p className='font-semibold mb-4'>Copyrights &copy; {year} | All right reserved by Iqbal Hossain </p>
        </div>
    </footer>
    </div>
    );
};

export default Footer;