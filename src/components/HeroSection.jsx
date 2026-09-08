import { ArrowDown, Mail, Linkedin, Github } from "lucide-react"

export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">Tarun Reddy Lakkireddy</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
          Software Engineer with 6+ years of experience building scalable distributed applications and cloud-native services.
          Specialized in Java, Python, Spring Boot, Microservices, REST APIs, React.js, Apache Kafka, AWS, Docker, and Kubernetes,
          with hands-on experience in Generative AI, LLMs, RAG, vector search, and intelligent application development.
        </p>

        <div className="flex flex-col space-y-5 items-center justify-center opacity-0 animate-fade-in-delay-4 mt-10">
          <div className="flex space-x-6 mb-8">
            <a href="mailto:tarunlakkireddy7@gmail.com" aria-label="Email Tarun" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tarun-reddy-lakkireddy-b3169b18b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/tarunreddy112233" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
          </div>

          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>
}