import React from 'react'
import {FaAngleDoubleDown, FaCloudDownloadAlt} from 'react-icons/fa'
export default function Hero() {
  return (
    <div className="hero flex flex-col items-center justify-center" id='hero'>
      {/* Hero Image */}
        <div className="heroImg relative flex justify-center">
          <img src="./img/sg-vector.png" className="sm:w-[40vw] w-[80vw] h-auto z-0 mx-auto" />
          {/* Name */}
          <div className="heroName absolute bottom-[6vh] md:bottom-[8vh]">
            <h1 className="text-center z-10 text-[20vw] sm:text-[10vw] font-titleFont leading-none font-black textStroke">Sujhan<br/>Ghimire</h1>
          </div>
          {/* Description */}
          <div className="heroDesc absolute bottom-[4vh] md:bottom-[5vh] textStroke font-bold w-[90vw]">
            <h3 className="text-center uppercase text-[3vw] sm:text-[2vw] font-subtitleFont">Aspiring Product Manager and Frontend Developer</h3>
          </div>
          {/* Resume Button*/}
          <div className="resumeBtn absolute bottom-0 flex items-center text-center mx-auto">
            <a
              href="documents/SujhanGhimire23.pdf"
              target="_blank"
              download="SujhanGhimire23.pdf"
              className="mx-auto border flex justify-center items-center sm:w-[30vw] w-[40vw] sm:text-[2vw] z-10 py-2 font-extrabold textStroke border-black rounded-full text-[3vw] leading-none hover:textNormal bg-white">
                <p className="my-auto sm:pr-4">My Resume</p><FaCloudDownloadAlt className="max-sm:hidden stroke-black stroke-[20px] fill-white"/>
            </a>
          </div>
        </div>
      </div>
  )
}
