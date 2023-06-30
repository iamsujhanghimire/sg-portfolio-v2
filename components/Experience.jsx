
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ className, children, onClick, position }) => (
  <button className={`${className} ${position} -mx-12`} onClick={onClick}>
    {children}
  </button>
);

const ExperienceCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <CustomArrow className="slick-prev" position='left'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black max-sm:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M15 19l-7-7 7-7" />
        </svg>
      </CustomArrow>
    ),
    nextArrow: (
      <CustomArrow className="slick-next" position='right'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black max-sm:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M9 5l7 7-7 7" />
        </svg>
      </CustomArrow>
    ),
  };

  return (
    <div id='experience' className='bg-white flex flex-col p-5 md:px-20 md:py-10'>
         {/* Title */}
         <div className="title">
             <h1 className='text-[12vw] sm:text-[8vw] leading-none font-extrabold textStroke py-2 md:py-5'>Experience</h1>            
         </div>
    <Slider {...settings} className='my-auto w-[70vw] md:w-[60vw] min-h-[inherit] border-2 pb-10 pt-5 md:px-10 z-0 border-black rounded-xl flex flex-col md:justify-center mx-auto'>
    <div>
        <div className="experience-slide">
          <div className="experience-content forz">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
               <a href="https://forz.design" target='_blank'><img src="./img/exp-logo/forz.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center font-subtitleFont md:my-5">Forz Design</h1>
               <div className="jobDetails">
                 <h3 className="text-md sm:text-[1.8vw] font-medium">Co-founder, Marketing and User Acquisition</h3>
                 <h3 className="font-extralight">03/2023 - Present</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
           <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
             <ul className="list-disc">
              <li>Developed and executed marketing and user acquisition campaigns</li>
              <li>Conducted market research to identify target audiences and market trends</li>
              <li>Collaborated with design and SEO teams to ensure all efforts align with client's brand identity and SEO strategy</li>
             </ul>
           </div>
         </div>
        </div>
      </div>
      <div>
        <div className="experience-slide">
        <div className="experience-content entDept">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
             <a href="https://www.clarku.edu/departments/entrepreneurship-and-innovation/2023/03/10/clark-tank-2023-and-beyond-winners-announced/" target='_blank'><img src="./img/exp-logo/clarkent.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center sm:leading-[3rem] font-subtitleFont md:my-5">Clark Entrepreneurship and Innovation Program</h1>
               <div className="jobDetails">
               <h3 className="text-md sm:text-[1.8vw] font-medium">Clark Tank Organizing Committee Member</h3>
                 <h3 className="font-extralight">08/2022 - 02/2023</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
          <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
            <ul className="list-disc">
              <li>Coordinated with the Clark Tank Committee to establish competition guidelines and requirements.</li>
              <li>Screened and evaluated applications from student entrepreneurs, assessing their potential for success in the Clark Tank competition.</li>
              <li>Conducted thorough assessments of each semi-finalist, identifying those with the greatest potential to succeed in the final.</li>
            </ul>
           </div>
         </div>
        </div>
      </div>
      <div>
        <div className="experience-slide">
        <div className="experience-content itsEndpoint">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
             <a href="https://www.clarku.edu/offices/its/about-its/" target='_blank'><img src="./img/exp-logo/clarkuni.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center font-subtitleFont md:my-5">Clark University</h1>
               <div className="jobDetails">
               <h3 className="text-md sm:text-[1.8vw] font-medium">Endpoint Technician</h3>
                 <h3 className="font-extralight">06/2022 - 12/2022</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
           <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
             <ul className="list-disc">
              <li>Installed and configured over 200 new computers, ensuring seamless operation for end-users at Clark University and Becker School of Design and Technology.</li>
              <li>Updated devices with new software and patches, ensuring system security and up-to-date functionality.</li>
              <li>Established new labs at Clark University and Becker School of Design and Technology, meeting merging requirements and collaborating closely with the IT team to ensure compliance and functionality.</li>
            </ul>
           </div>
         </div>
        </div>
      </div>
      <div>
        <div className="experience-slide">
        <div className="experience-content students-landing">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
             <a href="https://www.studentslanding.com" target='_blank'><img src="./img/exp-logo/slanding.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center font-subtitleFont md:my-5">Students Landing</h1>
               <div className="jobDetails">
               <h3 className="text-md sm:text-[1.8vw] font-medium">Co-founder, Product and Web</h3>
                 <h3 className="font-extralight">08/2021 - 10/2022</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
           <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
            <ul className="list-disc">
              <li>Created an intuitive and welcoming Students Landing homepage using Figma, HTML, CSS, and JavaScript for international students.</li>
              <li>Implemented customer retention initiatives, including Marketplace, Tutoring, and Referral Programs, enhancing Students Landing's value proposition.</li>
              <li>Created a seamless experience for incoming international students with a unique roommate matching system and international-friendly housing in United States.</li>
            </ul>
           </div>
         </div>
        </div>
      </div><div>
        <div className="experience-slide">
        <div className="experience-content taalo-co">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
             <a href="https://www.instagram.com/taalo.co" target='_blank'><img src="./img/exp-logo/taaloco.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center font-subtitleFont md:my-5">Taalo Accessory Company</h1>
               <div className="jobDetails">
               <h3 className="text-md sm:text-[1.8vw] font-medium">Founder, CEO</h3>
                 <h3 className="font-extralight">03/2018 - 12/2021</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
           <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
             <ul className="list-disc">
             <li>Pioneered the Design to Delivery (D2D) concept at Taalo Co, creating sustainable accessories from recycled fabric waste while supporting underprivileged communities.</li>
             <li>Oversaw product design and manufacturing, ensuring high-quality craftsmanship and seamless customer experience.</li>
             <li>Managed communication with factories, customers, investors, and mentors, ensuring smooth operations and prompt issue resolution.</li>         
            </ul>
           </div>
         </div>
        </div>
      </div>
      <div>
        <div className="experience-slide">
        <div className="experience-content atharva">
           {/* Intro */}
           <div className="jobTitle flex items-center justify-center flex-col max-sm:text-center">
             <div className="img md:pr-4">
             <a href="https://www.facebook.com/AtharvaNPL/" target='_blank'><img src="./img/exp-logo/atharva.png" className='rounded-full border grayscale hover:grayscale-0 border-black h-20 w-20' alt="job-logo" /></a>
             </div>
             <div className="intro">
               <h1 className="text-lg sm:text-[4vw] font-extrabold text-center font-subtitleFont md:my-5">Atharva Initiation</h1>
               <div className="jobDetails">
               <h3 className="text-md sm:text-[1.8vw] font-medium">Co-founder, Head of Marketing</h3>
                 <h3 className="font-extralight">03/2017 - 12/2021</h3>
               </div>
             </div>           
           </div>
           {/* Description */}
           <div className="jobDesc py-2 mx-auto px-10 text-xs md:text-lg">
             <ul className="list-disc">
              <li>Co-founded a strategy consulting firm in Nepal, focusing on company growth and financial literacy.</li>
              <li>Managed all communications, including investor relations, partnerships, and marketing campaigns.</li>
              <li>Led the development of Atharva's website, implemented innovative initiatives, and launched the Digital Gaun Abhiyan to empower rural communities.</li>
            </ul>
           </div>
         </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default ExperienceCarousel;