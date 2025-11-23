import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import ProjectInfo from '@/components/ProjectInfo'

function BusRouteOptimizer() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="Bus Route Optimizer"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={["Route and Map API Integration", "Grouping Algorithm", "Trip Distance Calculation"]}
        duration="Apr 2024 – July 2024"
        brief="Running a travel bus company entails significant operational costs
        due to fuel, maintenance, and Electronic Road Pricing (ERP) tolls. This project aims to
        provide a way to optimize travel routes between Changi Airport and various hotels in Singapore,
        as well as plan efficient drop-off points."
        tools={['Python', 'Streamlit', 'Route4Me API', 'OneMap API']}
        features={["Cost breakdown", "Interactive map for visualization", "Route customization based on fuel, time, ERP costs etc.", "Selection of shortest path algorithms (Dijkstra, A*, etc.)"]}
        images={[]}
        singleImages={[        
          {
          image: "/images/bus-route-optimizer/bus-route-application.png",
          caption: "Main Application View",
          },
          {
          image: "/images/bus-route-optimizer/bus-route-drop-off-pnts.png",
          caption: "Hotel Grouping (Drop-off point at Green Marker for all passangers staying at hotels marked by Blue Marker)",
          },
        ]}
        />
      </section>
      
      <Footer></Footer>
    </main>
  )
}

export default BusRouteOptimizer