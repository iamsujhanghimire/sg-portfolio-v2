import React from 'react'
import {FaCloudDownloadAlt, FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaBootstrap, FaNodeJs, FaSass, FaJava, FaFigma, FaJsSquare} from 'react-icons/fa'
import {TbBrandKotlin, TbBrandNextjs, TbMessageCircle2} from 'react-icons/tb'
import {SiAdobexd, SiFirebase, SiMongodb, SiTailwindcss} from 'react-icons/si'

export default function About() {
  return (
    <div id='about' className='bg-white flex flex-col p-10 md:p-28'>
        {/* Title */}
        <div className="title">
            <h1 className='md:text-8xl text-6xl font-extrabold textStroke py-5'>About</h1>
            <h1 className='md:text-3xl text-xl text-center font-medium'>Tech and Tools I Work With:</h1>
        </div>
        {/* Icons */}
        <div className="icons max-md:flex-wrap flex text-4xl lg:text-5xl justify-center py-5">
            <FaJsSquare/> <FaHtml5/> <FaCss3Alt/> <FaReact/> <FaPython/>
            <FaJava/> <TbBrandKotlin/> <FaNodeJs/> <SiFirebase/> <SiMongodb/> <FaGitAlt/> 
            <FaGithub/> <FaBootstrap/><FaSass/> <SiTailwindcss/>
            <TbBrandNextjs/> <SiAdobexd/> <FaFigma/>

        </div>
        {/* Description */}
        <div className="aboutDesc">
            <h3 className='text-3xl md:text-4xl font-subtitleFont font-extrabold text-center'>Hello World!</h3>
            <p className='text-center text-sm md:text-lg py-5 font-light'>I am <span className='font-bold'>Sujhan Ghimire
                </span>, a <span className='font-medium'>senior at Clark University, Worcester, MA</span> and I love creating visually 
                appealing websites, graphics, and I occasionally take pictures. I work with a few web 
                development tools, languages and frameworks which I believe works best for what I do. 
                I am most familiar with <span className='font-medium'>Java, Python, Javascript, CSS3, ReactJS, Sass, and Kotlin.</span><br /><br />
                I am also a creative and innovative fellow and I love brainstorming ideas to solve peoples’ 
                problems. I have demonstrated this numerous times with my works in <span className='font-medium'>Taalo Co., Atharva 
                Initiations, and Students Landing</span> . Digitally, I design websites using <span className='font-medium'>Adobe XD</span> and I love 
                taking digital photos.
            </p>
        </div>
        <div className="abtButtons md:flex my-[2vh] justify-evenly">
        <div className="resumeBtn text-center">
            <a
              href="documents/SujhanGhimire23.pdf"
              download="SujhanGhimire23.pdf"
              className="mx-auto border flex justify-center w-[60vw] md:w-[30vw] z-10 py-3 p-10 font-extrabold textStroke items-center border-black rounded-full md:text-[1.5vw] hover:textNormal bg-white">
                <h3 className="my-auto md:pr-5">My Resume</h3>        
                <FaCloudDownloadAlt className="max-md:hidden stroke-current stroke-[20px] fill-white"/>
            </a>
          </div>
          <div className="contactBtn my-1 text-center">
            <a
              href="#contact"
              className="mx-auto border flex justify-center w-[60vw] md:w-[30vw] z-10 py-3 p-10 font-extrabold textStroke items-center border-black rounded-full md:text-[1.5vw] hover:textNormal bg-white">
                <h3 className="my-auto md:pr-5">Get to know me</h3>
                <TbMessageCircle2 className='max-md:hidden'/>
            </a>
          </div>
        </div>
    </div>
  )
}
