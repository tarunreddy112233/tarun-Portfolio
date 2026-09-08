import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="w-full">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-center md:text-left">Software Engineer | Full-Stack & AI Application Development</h3>

                    <p className="text-muted-foreground text-center md:text-left">
                        Software Engineer with 6+ years of experience designing, developing, and deploying scalable distributed applications and cloud-native services across banking, retail, supply chain, and enterprise domains.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        My core strengths include Java, Python, Spring Boot, Microservices, REST APIs, React.js, Apache Kafka, AWS, Docker, and Kubernetes, with hands-on experience building production systems, event-driven architectures, high-throughput services, and secure APIs.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        I also work on Generative AI and LLM-based applications, including prompt engineering, NLP-oriented applications, vector search, embeddings, RAG, LangChain workflows, intelligent content processing, and AI workflow automation.
                    </p>

                    <p className="text-muted-foreground text-center md:text-left">
                        I have experience across the full SDLC, including system design, distributed processing, API architecture, reliability, scalability, CI/CD, MLOps-oriented deployment practices, testing, monitoring, and production operations. I enjoy collaborating with engineering, QA, DevOps, product, and business teams to deliver reliable software with measurable impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a
                            href="/Resume/Lakkireddy_Tarun_Resume.pdf"
                            download="Tarun_Reddy_Lakkireddy_Resume.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}