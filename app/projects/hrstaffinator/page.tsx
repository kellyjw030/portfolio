import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import ProjectInfo from '@/components/ProjectInfo'
import Footer from '@/components/Footer'

function HRStaffinator() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="HRStaffinator - Staff Management System"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={["2FA Setup & Verification", "Session Management", "Password Resets", "Administrative Control Panel", "Profile page"]}
        duration="May 2025 – Aug 2025"
        brief="A centralized system to streamline and digitize claims and staff scheduling processes,
        as well as payroll management based on department."
        tools={['React', 'Next.js', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS']}
        features={["Claims submission and review", "Overtime hours requests and review", "Payroll statement generation"]}
        images={[]}
        singleImages={[ 
        {
          image: "/images/hrstaffinator/hrstaffinator-uam.png",
          caption: "Administrative Control Panel",
        },
        {
          image: "/images/hrstaffinator/hrstaffinator-claim.png",
          caption: "Claims Submission Page",
        },
        {
          image: "/images/hrstaffinator/hrstaffinator-ot.png",
          caption: "Overtime Hours Page",
        },
        {
          image: "/images/hrstaffinator/hrstaffinator-profile.png",
          caption: "Profile Page",
        },
        ]}
            
        />
      </section>
      
      <Footer></Footer>
    </main>
  )
}

export default HRStaffinator