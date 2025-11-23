import React from 'react'
import Header from "@/components/Header"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <main>
      <Header page="about"/>
      <section id="about-me" className="on-load-animation-500">
        <div className="flex lg:m-65 m-10 md:m-32">
          <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 md:grid-cols-2">
            <div className="w-full flex items-center justify-center">
              <h1 className={`text-7xl font-black`}>ABOUT ME</h1>
            </div>
            <div>
              <p className="pt-7">
                My journey into software engineering
                began with programming simple plugins in digital content creation programs, which
                led me to pursue it at SIT. I have hands-on experience building applications for web as well as mobile,
                and I’m always learning new things to expand my skills and take on new challenges.
              </p>
              <div className="mt-5">
                <h2 className="text-md font-black pb-1">CONTACT ME</h2>
                <Link className="underline" href="mailto:kellyjw2002@gmail.com">kellyjw2002@gmail.com</Link>

              </div>
              {/* <div className="mt-5">
                <h2 className="text-md font-black pb-1">LINKS</h2>
                <div className="flex gap-3">
                  <Link href="https://www.linkedin.com/in/kelly-teo" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="w-10"/>
                  </Link>
                  <Link href="https://github.com/kellyjw030" target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="w-10"/>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About