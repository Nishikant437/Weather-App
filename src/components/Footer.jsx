import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t bg-neutral-100">
        <div className="container mx-auto p-0.5 flex justify-center">
            <p>© All Rights Reserved 2025.</p>
        </div>

        <div className="flex items-center gap-4 justify-center mb-1 text-2xl">
        <a href='' className='hover:text-yellow-500'>
                <FaFacebook size={20}/>
            </a>
            <a href='' className='hover:text-yellow-500'>
                <FaInstagram size={20}/>
            </a>
            <a href='' className='hover:text-yellow-500'>
                <FaLinkedin size={20}/>
            </a>
        </div>
    </footer>
  )
}

export default Footer;
