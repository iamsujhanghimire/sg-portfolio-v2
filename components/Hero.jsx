import React from 'react'
import {FaAngleDoubleDown, FaCloudDownloadAlt} from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="hero flex flex-col items-center justify-center" id='hero'>
      {/* Hero Image */}
        <div className="heroImg relative flex justify-center">
          <img src="./img/BW.png" className="max-h-[80vh] z-0 mx-auto" />
          {/* Name */}
          <div className="heroName absolute lg:bottom-[15vh] bottom-[25vh]">
            <h1 className="text-center z-10 lg:text-[12.5rem] md:text-9xl text-7xl font-black font-titleFont textStroke">Sujhan Ghimire</h1>
          </div>
          {/* Description */}
          <div className="heroDesc absolute bottom-[12vh] textStroke font-bold w-[90vw]">
            <h3 className="text-center uppercase text-lg md:text-xl lg:text-[2vw]">Senior @ Clark University, Frontend Web Developer, Aspiring Product Manager</h3>
          </div>
          {/* Resume Button*/}
          <div className="resumeBtn absolute bottom-0 flex items-center text-center mx-auto">
            <a
              href="documents/SujhanGhimire23.pdf"
              download="SujhanGhimire23.pdf"
              className="mx-auto border flex justify-center items-center w-[60vw] sm:w-[30vw] z-10 py-3 p-10 font-extrabold textStroke text-xl border-black rounded-full md:text-[2.2vw] lg:text-[2vw] hover:textNormal bg-white">
                <h3 className="my-auto pr-5">My Resume</h3><FaCloudDownloadAlt className="max-md:hidden stroke-current stroke-[20px] fill-white"/>
            </a>
          </div>
        </div>

        {/* Double Down Icon */}
        <div className="downArrow ">
          <a href="#about"><FaAngleDoubleDown className="text-4xl my-2 stroke-current stroke-[20px] hover:fill-black fill-white"/></a>
        </div>
      </div>
  )
}
