import {React, useState} from 'react'
import { TbMenu2 } from 'react-icons/tb'
import { GrClose } from 'react-icons/gr'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
  <>
    <nav className="w-full bg-white">
            <div className="justify-center p-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">                
                <div>
                <div className="flex items-center justify-between md:py-5 md:block">
                        <a href="#home" className='md:hidden md:w-0 md:h-0'>
                            <img src="./favicon-light.png" alt="" className='w-[15vw] mx-[10vw]' />
                        </a>
                   <div className="md:hidden text-end mx-[10vw]">
                            <button
                                className="text-black rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <GrClose className=' text-3xl'/>                                        
                                ) : (
                                  <TbMenu2 className=' text-3xl'/>
                                )}
                            </button>
                        </div>
                    </div>                    
                </div>
                <div>
                    <div
                        className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-2xl justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="mx-4 my-6 md:my-0 text-center">
                              <a href="#home" className="p-2 text-center font-extrabold hover:textStroke">Home</a>
                            </li>
                            <li className="mx-4 my-6 md:my-0 text-center">
                              <a href="#about" className="p-2 text-center font-extrabold hover:textStroke">About</a>
                            </li>                                                    
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="divider h-1 w-4/5 mx-auto bg-black rounded-full"></div>
        </>
  )
}
