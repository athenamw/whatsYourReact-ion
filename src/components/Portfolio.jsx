import React from 'react';
import ProjectItem from './ProjectItem'
import deployedPapyrus from '../assets/deployedPapyrus.png'
import linguini from '../assets/linguini.png'
import mainQuizPage from '../assets/mainQuizPage.png'
import firstProject from '../assets/firstProject.png'
import recipeConcierge from '../assets/recipeConcierge.png'
import weatherScreenshot from '../assets/weatherScreenshot.png'


const Portfolio = () => {
    return (
        <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-violet-800'>Projects</h1>
            <p className='text-center py-8'>
                While taking a coding bootcamp through UC Berkeley and EdX, I have learned many skills. These include HTML, Css, Javascript, React, Mongo, SQL, Express, Node which have allowed me to create projects and improve my skills over time. 
            </p>
            <section className='grid sm:grid-cols-2 gap-12 '>
                <ProjectItem img={linguini} title='Linguini Language Tutor App'className="w"/>
                <ProjectItem img={recipeConcierge} title='Recipe Finder App'/>
                <ProjectItem img={firstProject} title='First Portfolio'/>
                <ProjectItem img={weatherScreenshot} title='Weather App'/>
                <ProjectItem img={deployedPapyrus} title='Papyrus Note Taking App'/>                
                <ProjectItem img={mainQuizPage} title='Quiz Game'/>                
            </section>
        </section>


    )
}

export default Portfolio