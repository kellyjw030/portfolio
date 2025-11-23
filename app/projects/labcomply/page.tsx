import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import ProjectInfo from '@/components/ProjectInfo'

function LabComply() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="LabComply - AI Powered Lab Compliance Monitoring"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={[
          "Labs Management page (Frontend and backend)",
          "Integration of camera feed to dashboad",
          "Detection Pipeline (Human to food/ drink association)",
          "Configuring Docker for containers to access host machine GPUs"
        ]}
        duration="May 2025 – Nov 2025"
        brief="Bringing food and drinks into these spaces heightens the chances of spillage and the presence
              of bugs, which could lead to damaged lab equipment.
              This project utilizes pretrained YOLO models, IP cameras, and an NVR within the labs to automate
              the detection of food and beverages to help lab safety personnel
              enforce a 'No food or drinks' rule in laboratories. This project was built by a team of 5 developers."
        tools={['Python', 'Flask', 'PostgreSQL', 'Docker', 'Linux (Ubuntu)', 'OpenCV']}
        features={[
          "Detection of food/ drinks mapped to most likely owner",
          "Facial recognition to identify repeated violators",
          "Dashboard to manage cameras, captured events, labs",
          "Email and Telegram notification to inform lab personnel of repeated violations"
        ]}
        images={[]}
        singleImages={[]}
        />
      </section>

      
      <Footer></Footer>
    </main>
  )
}

export default LabComply