import React from "react";
import Typewriter from "typewriter-effect";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';


const Main = () => {
    return (
        <section id='main'>
            <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHx0ZXh0dXJlZCUyMGJhY2tncm91bmQlMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=600" alt="lavendar gradient" />            
            <section className="w-full h-screen absolute top-0 left-0 bg-white/30">
                <section className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text:4xl font-bold text-gray-800">Athena Wallis</h1>
                    
                    <h2 className="flex sm:text-3xl text-2-xl pt-4 text-gray-800">
                 
                    <Typewriter
                        options={{
                        strings: [' Developer', ' Customer Service Expert', ' Lifelong Learner', 'Creative Thinker' ],
                        autoStart: true,
                        loop: true,
                        
                        }}
                     />
                    </h2>
                    <section className="flex justify-between pt-6 max-w-[200px] w-full">
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