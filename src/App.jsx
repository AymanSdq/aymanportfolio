import { useState } from 'react';
import React from 'react';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsSlack} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";
import {FaLaravel} from "react-icons/fa";
import {SiAdobephotoshop} from "react-icons/si";
import {SiAdobeillustrator} from "react-icons/si";
import {SiAdobexd} from "react-icons/si";
import {MdManageAccounts} from "react-icons/md";
import {BsSpeedometer} from "react-icons/bs";
import {MdHttps} from "react-icons/md";






function App() {
  const [darkMode , setdarkMode] = useState(false);
  
  const GoToGit = () => {
    window.open("https://github.com/AymanSdq","_blank");
  }
  const GoTolink = () => {
    window.open("https://www.linkedin.com/in/sedqi-ayman-015a00237/","_blank");
  }
  const GoToTwit = () => {
    window.open("https://twitter.com/AymenSedqi","_blank");
  }
  
  return(
    <main className={darkMode ? "dark" : ""}>
      <div className=" dark:text-white dark:bg-gray-800 light">
      {/* The First Section */}
      <section className='flex'>
        {/* This is the header section */}
        <div className='w-full min-h-full flex justify-between py-10 mb-12 mx-7 items-center md:mx-32'>
          {/* The Div logo */}
          <h1 className='font-burtons text-xl'>AymanSedqi</h1>
          {/* The menu link */}
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:hidden' onClick={()=> setdarkMode(!darkMode)}/>
              <BsFillSunFill className='cursor-pointer text-3xl hidden dark:flex ' onClick={()=> setdarkMode(!darkMode)}/>
            </li>
            <li>
              <a href="#" className='bg-gradient-to-r from-cyan-700 to-teal-700  text-white px-4 py-2 rounded-md ml-8'>Resume</a>
            </li>
          </ul>
        </div>
      </section>
      {/* The second sections */}
      <section className='flex flex-col w-full'>
            { /* This is the image sections */}
            <div className='mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 bg-orange-400 rounded-full relative flex overflow-hidden md:h-96 md:w-96'>
              <img src="/Image/dev-ed-wave.png" alt="3d Me" className=''/>
            </div>
            <div className='text-center gap-5 flex flex-col mx-4 mt-4'>
              <h1 className='text-4xl text-cyan-500'>Ayman Sedqi</h1>
              <h3 className='text-xl'>Full-Stack Developer</h3>
              <p>
                Freelancer providing services for programming needs. Join me down bellow and let-s get cracking
              </p>
              <div className='flex m-4 text-4xl justify-center gap-20'>
                <BsTwitter className='cursor-pointer text-gray-500 hover:text-black dark:text-cyan-500' onClick={GoToTwit}/>
                <BsSlack className=' cursor-pointer text-gray-500 hover:text-black dark:text-cyan-500'/>
                <BsLinkedin className=' cursor-pointer text-gray-500 hover:text-black dark:text-cyan-500' onClick={GoTolink}/>
                <BsGithub className=' cursor-pointer text-gray-500 hover:text-black dark:text-cyan-500' onClick={GoToGit} />
              </div>
            </div>
      </section>

      {/*  Section thirdt */}
      <section className='mt-5 mx-7 md:mx-32'>
            <div className='h-64 flex flex-col justify-center gap-4'>
                <h1 className='text-3xl text-cyan-500'>Service Offered</h1>
                <p>
                Since the beginning of my journey as a freelance <span className='text-cyan-700'>designer</span> and <span className='text-cyan-700'>developer</span>, I ve done remote work for agencies consulted for startups and collaborated with talanted people to create digital products for both business and consumer use.
                </p>
            </div>  
      </section>


      {/* Section fourth */}
      <section className='flex w-full justify-center '>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* This is  */}
          <div className='w-80 h-96 p-4 rounded-md flex flex-col items-center gap-3 text-center bg-gray-100 drop-shadow-xl dark:bg-slate-700'>
            <img src="/Image/consulting.png" className="w-24 h-24" />
            <h1 className='text-2xl'>Consulting</h1>
            <h3>When ever you need coaching on a programming language front-end or even back-end</h3>
            <p className='text-cyan-600'>Programming Language</p>
            <div className='flex gap-5 text-4xl my-5'>
                <FaReact className='cursor-pointer p-1 text-cyan-500 bg-black rounded'/>
                <TbBrandNextjs className='cursor-pointer p-1 text-white bg-black rounded'/>
                <FaLaravel className=' cursor-pointer p-1 text-white bg-orange-600 rounded'/>
            </div>
          </div>

          {/* This is  */}
          <div className='w-80 h-96 p-4 rounded-md flex flex-col items-center gap-3 text-center bg-gray-100 drop-shadow-xl dark:bg-slate-700'>
            <img src="/Image/design.png" className="w-24 h-24" />
            <h1 className='text-2xl'>Beautiful Designs</h1>
            <h3>Creating elegant designs suited for your needs following core design theory.</h3>
            <p className='text-cyan-600'>Design tool I use</p>
            <div className='flex gap-5 text-4xl my-5'>
                <SiAdobephotoshop className='cursor-pointer text-blue-900 dark:text-cyan-500'/>
                <SiAdobeillustrator className='cursor-pointer text-amber-700 '/>
                <SiAdobexd className='cursor-pointer text-pink-700 '/>
            </div>
          </div>
          
          {/* This is  */}
          <div className='w-80 h-96 p-4 rounded-md flex flex-col items-center gap-3 text-center bg-gray-100 drop-shadow-xl dark:bg-slate-700'>
            <img src="/Image/code.png" className="w-24 h-24" />
            <h1 className='text-2xl'>Project</h1>
            <h3>If you need someone who create you a project for your own business Big or small</h3>
            <p className='text-cyan-600'>Things I do</p>
            <div className='flex gap-5 text-4xl my-5'>
              <MdManageAccounts className='cursor-pointer  text-white bg-blue-700 rounded dark:bg-cyan-500'/>
              <BsSpeedometer className='cursor-pointer p-1 text-white bg-yellow-700 rounded'/>
              <MdHttps className='cursor-pointer p-1 text-white bg-red-600 rounded'/>
            </div>
          </div>
          </div>
      </section>


      {/* his is the all my project section */}
      <section className=' grid grid-cols-1 lg:grid-cols-3 mt-20  mx-7 md:mx-32 '>

        <div className='w-96 h-96 flex flex-col justify-center items-center '>
          <div className='w-64 rounded-full overflow-hidden'>
            <img src="/Image/dev-ed-wave.png" alt="3d Me" className=''/>
          </div>
          <h1 className='mt-4 text-2xl'>Ayman Sedqi</h1>
        </div>

        <div className='w-96 h-96 flex justify-center gap-20 items-center '>
          <div className='flex flex-col'>
            <ul className='flex flex-col'>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <ul className='flex flex-col'>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className='w-96 h-96 flex flex-col justify-center items-center'>
          <form action="" className='flex flex-col'>
            <p className=''>Full Name </p>
            <input type="text" className=' rounded-sm border border-gray bg-slate-100 my-1 px-5 outline-none' placeholder='Ex : Ayman Sedqi'/>
            <p className=''>Mail</p>
            <input type="text" className=' rounded-sm border border-gray bg-slate-100 my-1 px-5 outline-none' placeholder='Ex : contact@ayman.com'/>
            <p className=''>Message</p>
            <textarea className='resize-none rounded-sm border border-gray bg-slate-100 my-1 px-5 outline-none' placeholder='Type your Message' id="" cols="30" rows="5"></textarea>
            <a href="#" className='flex justify-center text-center bg-gradient-to-r from-cyan-700 to-teal-700 py-1 text-white rounded-md mt-4'>Resume</a>
          </form>
        </div>


      </section>

      </div>
    </main>
  )
  
}

export default App
