import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='p-5 text-center position-relative'>
        <div className='container'>
            <span className='px-1'>
                <a target='blank' href="https://github.com/eakelvin">
                    <AiFillGithub size={40} />
                </a>
            </span>
            <span className='px-1'>
                <a target='blank' href="https://www.linkedin.com/in/kelvin-akaba-2883a81b3/">
                    <AiFillLinkedin size={40} />
                </a>
            </span>

            <a href="#" className='position-absolute bottom-0 end-0 p-4'>
                <h1><BsFillArrowUpCircleFill /></h1>
            </a>
        </div>  
    </div>
  )
}

export default Footer
