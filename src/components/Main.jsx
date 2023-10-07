import React from "react";
import Typewriter from "typewriter-effect";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import me from '../assets/me.png'



const Main = () => {
    return (
        <section id='main'>
            <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHx0ZXh0dXJlZCUyMGJhY2tncm91bmQlMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=600" alt="lavender gradient" /> 

            <section className="w-full h-screen absolute top-0 left-0 bg-white/30 align-items-center">           
                <section className="max-w-[700px] m-auto pl-10 h-full w-full flex flex-col justify-center lg:items-center items-center">                   
                    <img src={me} className="rounded-full"/>                 
                    <h1 className="sm:text-5xl text:4xl font-bold text-violet-800">Athena Wallis</h1>                    
                    
                    <h2 className="flex sm:text-3xl text-2-xl pt-4 text-violet-800">                 
                    <Typewriter
                        options={{
                        strings: ['Software Developer', ' Customer Service Expert', ' Lifelong Learner', 'Creative Thinker'],
                        autoStart: true,
                        loop: true,                        
                        }}
                     />
                    </h2>
                   
                    <section className="flex justify-between  pt-6 max-w-[200px] w-full fixed bottom-0">
                        <a href="https://github.com/athenamw">
                        <FaGithub className="cursor-pointer" size={20}/>
                        </a>
                        <a href="https://www.linkedin.com/in/athenawallis/">
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                        </a>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Main