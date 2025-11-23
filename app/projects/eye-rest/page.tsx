import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import ProjectInfo from '@/components/ProjectInfo'
import Footer from '@/components/Footer'

function EyeRest() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="Eye Rest Mobile Application"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={["UI", "Integration of Google MediaPipe Face Landmark Detection"]}
        duration="Feb 2025 – Apr 2025"
        brief="A mobile application that utilizes eye tracking to perform guided eye exercises
        via the mobile camera, and alerts users to perform these exercises to reduce eye strain.
        This project was built by a team of 5 developers."
        tools={['Kotlin', 'Jetpack Compose']}
        features={["Eye roll and blink exercises", "Exercise analytics dashboard", "Personlized eye health feedback", "Alarm to remind users to perform regular eye exercises"]}
        images={[
          
          {
            images: [
            "/images/eye-rest/eye-rest-thumbnail.jpg",
            "/images/eye-rest/homescreen.jpg",
            "/images/eye-rest/insights.jpg",
            "/images/eye-rest/workout_1.jpg"
          ],
            caption: "Application Screenshots",
          }
        ]}
        singleImages={[
          {
            image: "/images/eye-rest/eye-rest-sys-arch.png",
            caption: "System Architecture",
          }
        ]}
        />
      </section>
      
      <Footer></Footer>
    </main>
  )
}

export default EyeRest