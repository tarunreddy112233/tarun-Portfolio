import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="w-full">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-center md:text-left">Software Engineer & Aspiring AI/ML Engineer</h3>

                    <p className="text-muted-foreground text-center md:text-left">
                        I am a Java Full Stack Developer with 3+ years of experience building scalable, secure, and high-performance web and cloud applications. I specialize in Java, Spring Boot, Microservices, React, and modern cloud technologies, focusing on clean architecture, maintainable code, and real-world impact.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        I have hands-on experience across the full SDLC—designing, developing, testing, and deploying RESTful APIs, integrating frontends with backends, implementing authentication, and optimizing performance in distributed systems. Comfortable in Agile teams, I actively contribute to design discussions, code reviews, and continuous improvement initiatives.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        Lately, I am expanding into AI-driven applications, including LLM integrations, LangChain workflows, vector databases, and intelligent automation, exploring ways to combine AI with robust backend systems.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        Technically, I work with Java, Spring Boot, React, SQL/NoSQL databases, Docker, Kubernetes, CI/CD pipelines, and cloud platforms like AWS and Azure. I am passionate about building reliable software, learning continuously, and contributing to impactful engineering teams, and I am seeking opportunities to leverage my full-stack and AI expertise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="/Resume/Tarun_Reddy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}