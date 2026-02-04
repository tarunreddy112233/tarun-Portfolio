import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const achievements = [
    {
        role: "Software Engineer",
        company: "Ojas Innovative Technologies",
        location: "Hyderabad, India",
        period: "Jan 2021 - Dec 2023",
        responsibilities: [
            "Developed backend APIs using Java, Spring Boot, Hibernate for a mobile banking application handling 1000+ requests per minute for various modules like FD/RD, Fund Transfer, Demat",
            "Designed and implemented a centralized error tracking and logging framework using structured logs for critical user flows such as Login and Registration reducing production issue resolution by 40%.",
            "Designed and exposed scalable RESTful APIs for multiple banking modules using Spring Boot and MVC architecture",
            "Built a dynamic multilingual feature enabling users to switch app language at runtime",
            "Actively participated in code reviews and design discussions and supported production release through real-time monitoring and detailed log analysis, resulting in a 25% reduction in post-release defects.",
            "Collaborated with cross-functional teams to interpret and integrate new initiatives, documenting their software impacts effectively.",
            "Implemented agile methodologies through daily scrums to manage project workflows and adapt to evolving features"
        ],
        technologies: [
            "Java", "JavaScript", "web development", "Git", "HTML", "CSS", "React", "Typescript",
            "Spring MVC", "Spring Boot", "Maven", "Docker", "Helm charts", "Kubernetes",
            "MySQL", "Oracle SQL", "Azure AKS", "Agile methodologies", "RESTful APIs"
        ]
    }
];

export const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section id="experience" className="py-20 px-4 relative">
            <div data-aos="fade-up" className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Professional <span className="text-primary">Experience</span>
                </h2>

                <div className="space-y-12">
                    {achievements.map((job, index) => (
                        <div key={index} className="transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                        {job.role}
                                    </h3>
                                    <p className="text-lg text-foreground/90 mt-1 font-semibold">
                                        {job.company} <span className="text-muted-foreground font-normal text-sm ml-2">| {job.location}</span>
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="text-muted-foreground font-medium">
                                        {job.period}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <ul className="space-y-3">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground text-[1rem] leading-relaxed text-left">
                                            <span className="mr-3 text-primary text-2xl leading-none mt-[-2px]">•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 text-lg text-left">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2 justify-start">
                                    {job.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-sm border border-primary/20 bg-background hover:border-primary/50 transition-colors font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
