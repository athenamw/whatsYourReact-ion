import React from "react"
import {FaHtml5, FaCss3, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import resume from '../assets/resume.pdf'




const Resume = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full mb-4">
            <h1 className='text-4xl font-bold text-center text-violet-800'>Resume</h1>

             <section className="flex flex-col items-center justify-center w-full mb-10">
                <p className="text-center py-8">I have gained multiple skills and learned new languages and technologies.</p>
             </section>
             <section className="flex p-8 space-x-4 max-w-[200px] w-full">
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                        <FaHtml5 className="cursor-pointer" size={30}/>
                        </a>
                        <a href="https://devdocs.io/css/">
                        <FaCss3 className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://react.dev/">
                        <FaReact className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://nodejs.org/en/docs">
                        <FaNodeJs className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://v2.tailwindcss.com/docs">
                        <SiTailwindcss className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://dev.mysql.com/doc/">
                        <TbSql className="cursor-pointer" size={40} />
                        </a>
                    </section>
            <section>
            <p className='text-center py-8'>Please feel free to download my resume to review my experience and work history.</p>
            <button className="button color-violet-900 w-full">
                 <a className="button cursor-pointer bg-[#6A1B9A] text-gray-100 mt-4 p-4 rounded-lg mb-4" href="../assets/resume.pdf" download="assets/resume.pdf">Download My Resume</a>                 
             </button>
            </section>
        </section>      
    )
}

export default Resume