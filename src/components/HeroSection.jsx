import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
<<<<<<< HEAD
  return <section id="home"
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="conatiner max-w-4xl mx-auto text-center z-10">
      <div className="space-y-6">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi,I'm </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1"> Tarun Reddy Lakkireddy</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
          "Java Full Stack Developer with 3 years of experience building scalable, high-performance web and mobile applications.
          Specialized in Java, Spring Boot, Microservices, React, and modern cloud technologies.
          Proven ability to deliver production-ready, end-to-end solutions, with growing expertise in AI-driven applications and LLM integrations."
        </p>

        <div className="flex flex-col space-y-5 items-center justify-center opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My work
          </a>
        </div>
      </div>

    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>
=======
    return <section id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="conatiner max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi,I'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Abhijeet </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Singh Parihar </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                "MERN Stack Developer and UI/UX enthusiast, crafting responsive,
                user-focused web apps that blend performance with pixel-perfect design."
            </p>

            <div className="flex flex-col space-y-5 items-center justify-center opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    View My work
                </a>
            </div>
        </div> 

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
}