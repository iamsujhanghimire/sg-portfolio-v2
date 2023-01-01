import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen, FaInstagram} from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'

export default function Contact() {
  return (
    <div id='contact' className='text-center'>
      <div className="divider h-1 w-4/5 mx-auto bg-black rounded-full"></div>
      <div className='py-1'>
        <h1>Reach out to me on:</h1>
      </div>
      <div className="logos flex justify-center text-3xl">
        <a href="https://www.linkedin.com/in/iamsujhanghimire" target="_blank" className='px-1'><FaLinkedin/></a>
        <a href="https://www.github.com/iamsujhanghimire" target="_blank" className='px-1'><FaGithub/></a>
        <a href="https://www.instagram.com/iamsujhanghimire" target="_blank" className='px-1'><FaInstagram/></a>
        <a href="https://www.linktr.ee/sujhan" target="_blank" className='px-1'><SiLinktree/></a>
      </div>
      <div className='text-[0.5rem] py-1'>Sujhan Ghimire 2023. All rights reserved</div>
    </div>
  )
}
