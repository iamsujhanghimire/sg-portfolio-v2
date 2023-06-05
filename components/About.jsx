import React from 'react'
import {FaCloudDownloadAlt, FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaBootstrap, FaNodeJs, FaSass, FaJava, FaFigma, FaJsSquare} from 'react-icons/fa'
import {TbBrandKotlin, TbBrandNextjs, TbMessageCircle2} from 'react-icons/tb'
import {SiAdobexd, SiFirebase, SiFlutter, SiMongodb, SiTailwindcss} from 'react-icons/si'

export default function About() {
  return (
    <div id='about' className='bg-white flex flex-col p-5 px-10 sm:px-20 md:py-10'>
        {/* Title */}
        <div className="title">
            <h1 className='text-[12vw] sm:text-[8vw] leading-none font-extrabold textStroke py-2 md:py-5'>About</h1>
            <h1 className='md:text-3xl text-lg text-center font-subtitleFont font-semibold'>Tech and Tools I Work With:</h1>
        </div>
        {/* Icons */}
        <div className="icons max-md:flex-wrap flex text-4xl lg:text-5xl justify-center py-5">
          <div className="group icon-container relative inline-block">
            <FaJsSquare title="JavaScript" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">JavaScript</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaHtml5 title="HTML5" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">HTML5</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaCss3Alt title="CSS3" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">CSS3</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaReact title="React" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">ReactJS</span>
          </div>
          <div className="group icon-container relative inline-block">
            <SiFlutter title="Flutter" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Flutter</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaPython title="Python" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Python</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaJava title="Java" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Java</span>
          </div>
          <div className="group icon-container relative inline-block">
            <TbBrandKotlin title="Kotlin" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Kotlin</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaNodeJs title="Node.js" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Node.js</span>
          </div>
          <div className="group icon-container relative inline-block">
            <SiFirebase title="Firebase" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Firebase</span>
          </div>
          <div className="group icon-container relative inline-block">
            <SiMongodb title="MongoDB" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">MongoDB</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaGitAlt title="Git" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Git</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaGithub title="GitHub" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">GitHub</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaBootstrap title="Bootstrap" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Bootstrap</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaSass title="Sass" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Sass</span>
          </div>
          <div className="group icon-container relative inline-block">
            <SiTailwindcss title="Tailwind CSS" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">TailwindCSS</span>
          </div>
          <div className="group icon-container relative inline-block">
            <TbBrandNextjs title="Next.js" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Next.js</span>
          </div>
          <div className="group icon-container relative inline-block">
            <SiAdobexd title="Adobe XD" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">AdobeXD</span>
          </div>
          <div className="group icon-container relative inline-block">
            <FaFigma title="Figma" className="icon"/> 
            <span className="text bg-black text-white text-lg bottom-12 opacity-0 group-hover:opacity-100 ease-in-out absolute">Figma</span>
          </div>
        </div>
        {/* Description */}
        <div className="aboutDesc">
            <h3 className='text-lg sm:text-[4vw] font-extrabold text-center md:my-3'>Hello World!</h3>
            <p className='text-center text-sm md:text-lg py-5 lg:px-28 font-light'>I am <span className='font-bold'>Sujhan Ghimire
                </span>, a <span className='font-medium'>recent bachelors degree graduate from Clark University, Worcester, MA</span> and I love creating visually 
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
              target="_blank"
              download="SujhanGhimire23.pdf"
              className="mx-auto border flex justify-center items-center sm:w-[30vw] w-[40vw] sm:text-[2vw] z-10 py-2 font-extrabold textStroke border-black rounded-full text-[3vw] leading-none hover:textNormal bg-white">
                <p className="my-auto sm:pr-4">My Resume</p><FaCloudDownloadAlt className="max-sm:hidden stroke-black stroke-[20px] fill-white"/>
            </a>
          </div>
          <div className="contactBtn text-center max-md:mt-2">
            <a
              href="https://linktr.ee/sujhan"
              target="_blank"
              className="mx-auto border flex justify-center items-center sm:w-[30vw] w-[40vw] sm:text-[2vw] z-10 py-2 font-extrabold textStroke border-black rounded-full text-[3vw] leading-none hover:textNormal bg-white">
                <h3 className="my-auto sm:pr-4">Know me more</h3>
                <TbMessageCircle2 className='max-sm:hidden stroke-black stroke-[1px] fill-white'/>
            </a>
          </div>
        </div>
    </div>
  )
}
