import React from 'react'
import Header from "@/components/Header"
import ProjectCard from "@/components/ProjectCard"
import Title from '@/components/Title'
import Footer from '@/components/Footer'

function Work() {
  return (
    <main className="">
      <Header page="projects"/>
      <Title title="ALL PROJECTS"/>

      <div className="on-load-animation-500 place-self-center grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-7 m-5 sm:grid-cols-1">
        <ProjectCard
        projectName = "AI Powered Lab Compliance Monitoring"
        pageLink="/projects/labcomply"
        projectDesc="A lab safety system to detect food and drinks rule violations in
        laboratories."
        thumbnail="/images/lab-comply-thumbnail.png"
        tech={['Python', 'Flask', 'PostgreSQL', 'Docker', 'Linux (Ubuntu)', 'OpenCV']}
        />
        <ProjectCard 
        projectName = "Staff Management System"
        pageLink="/projects/hrstaffinator"
        projectDesc="A web application for payroll management and staff claim submissions."
        thumbnail="/images/hrstaffinator-thumbnail.png"
        tech={['React', 'Next.js', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS']}
        />
        <ProjectCard       
        projectName = "Eye Rest Mobile Application"
        pageLink="/projects/eye-rest"
        projectDesc="A android application that helps users manage their eye health with guided eye exercises
        powered by facial landmark detection."
        thumbnail="/images/eye-rest/eye-rest-thumbnail.jpg"
        tech={['Kotlin', 'Jetpack Compose', 'Google MediaPipe']}
        />

        <ProjectCard 
        projectName = "Bus Route Optimizer"
        pageLink="/projects/bus-route-optimizer"
        projectDesc="A program that helps drivers calculate most efficient routes and drop-off points."
        thumbnail="/images/bus-route-optimizer-thumbnail.png"
        tech={['Python', 'Streamlit', 'Route4Me API', 'OneMap API']}
        />

      </div>

      <Footer></Footer>
    </main>

  )
}

export default Work