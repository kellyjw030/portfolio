import Header from "@/components/Header"

export default function Home() {
  return (
    <main>
      <Header page="home"/>
      <section id="about-me" className="on-load-animation-500">
        <div className="flex lg:m-65 m-10 md:m-32">
          <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 md:grid-cols-2">
            <div className="w-full flex items-center justify-center">
              <h1 className={`text-7xl font-black`}>HI THERE!</h1>
            </div>
            <div>
              <p className="pt-7">
                My name is Kelly. I am a software developer
                currently studying Software Engineering 
                at Singapore Institude of Technology.
              </p>
              <div className="col-start-1 lg:col-start-2 mt-5">
                <h2 className="text-2xl font-black pb-4">SKILLS</h2>
                <p>Python, Flask, TypeScript, JavaScript, Next.js, Node.js, React, Kotlin, Jetpack Compose, PHP, C</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>

  );
}
