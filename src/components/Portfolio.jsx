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
            <h1 className='text-4xl font-bold text-center text-[#301934]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati ea, illum magni odio molestiae facilis sunt optio quod dolorem. Fugit doloremque deserunt ut eaque ipsum laborum, non quis enim.
            </p>
            <section className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={deployedPapyrus} title='Papyrus Note Taking App'/>
                <ProjectItem img={linguini} title='Linguini Language Tutor App'/>
                <ProjectItem img={mainQuizPage} title='Quiz Game'/>
                <ProjectItem img={firstProject} title='First Portfolio'/>
                <ProjectItem img={recipeConcierge} title='Recipe Finder App'/>
                <ProjectItem img={weatherScreenshot} title='Weather App'/>
            </section>
        </section>


    )
}

export default Portfolio