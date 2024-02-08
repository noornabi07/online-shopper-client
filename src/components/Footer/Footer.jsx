import React from 'react';
import footerLogo from '../assets/all-products/logo_big.png'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
                <div className='flex justify-center items-center gap-3'>
                    <img src={footerLogo} alt="" />
                    <h2 className='uppercase font-bold text-4xl text-red-300'>shopper</h2>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <a className=" hover:-mt-3 font-semibold cursor-pointer hover:duration-300 hover:text-red-300">Company</a>
                    <a className=" hover:-mt-3 font-semibold cursor-pointer hover:duration-300 hover:text-red-300">Products</a>
                    <a className=" hover:-mt-3 font-semibold cursor-pointer hover:duration-300 hover:text-red-300">Offices</a>
                    <a className=" hover:-mt-3 font-semibold cursor-pointer hover:duration-300 hover:text-red-300">About</a>
                    <a className=" hover:-mt-3 font-semibold cursor-pointer hover:duration-300 hover:text-red-300">Contact</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/mdnurnobiislam.suhayel.1'><FaFacebookF className='text-2xl hover:scale-105 hover:duration-300 hover:text-red-400  font-semibold text-gray-600 cursor-pointer'></FaFacebookF ></Link>
                        <Link to='https://www.instagram.com/musicpromoter33/'><FaInstagram className='text-2xl hover:scale-105 hover:duration-300 hover:text-red-400 font-semibold text-gray-600 cursor-pointer'></FaInstagram></Link>
                        <Link to='https://twitter.com/MDNurna56749656'><FaTwitter className='text-2xl hover:scale-105 hover:duration-300 hover:text-red-400 font-semibold text-gray-600 cursor-pointer'></FaTwitter></Link>
                        <Link to='+8801863702344'><FaWhatsapp className='text-2xl hover:scale-105 hover:duration-300 hover:text-red-400 font-semibold text-gray-600 cursor-pointer'></FaWhatsapp></Link>
                        
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Noornabi Islam</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;