import { useState, useEffect } from "react"
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: "Java", level: 95, category: "programming", logo: "/Images/Java.png" },
    { name: "Python", level: 85, category: "programming", logo: "/Images/python.png" },
    { name: "JavaScript", level: 90, category: "programming", logo: "/Images/js_5968292.png" },
    { name: "TypeScript", level: 80, category: "programming", logo: "/Images/typescript_5968381.png" },
    { name: "SQL", level: 88, category: "programming", logo: "/Images/mysql.png" },
    { name: "HTML5", level: 90, category: "programming", logo: "/Images/html-5_5968267.png" },
    { name: "CSS3", level: 85, category: "programming", logo: "/Images/css-3_5968242.png" },

    { name: "Generative AI", level: 85, category: "genai", logo: "/Images/python.png" },
    { name: "LLMs", level: 85, category: "genai", logo: "/Images/python.png" },
    { name: "Prompt Engineering", level: 80, category: "genai", logo: "/Images/python.png" },
    { name: "NLP", level: 75, category: "genai", logo: "/Images/python.png" },
    { name: "RAG", level: 80, category: "genai", logo: "/Images/vectordb.jpeg" },
    { name: "LangChain", level: 80, category: "genai", logo: "/Images/python.png" },
    { name: "Vector Search", level: 80, category: "genai", logo: "/Images/vectordb.jpeg" },
    { name: "Embeddings", level: 75, category: "genai", logo: "/Images/vectordb.jpeg" },

    { name: "Spring Boot", level: 92, category: "frameworks", logo: "/Images/spring-boot.png" },
    { name: "Spring MVC", level: 90, category: "frameworks", logo: "/Images/spring-boot.png" },
    { name: "Spring Security", level: 85, category: "frameworks", logo: "/Images/spring-boot.png" },
    { name: "Hibernate", level: 85, category: "frameworks", logo: "/Images/Java.png" },
    { name: "JPA", level: 85, category: "frameworks", logo: "/Images/Java.png" },
    { name: "React.js", level: 85, category: "frameworks", logo: "/Images/molecule_10285707.png" },
    { name: "REST APIs", level: 90, category: "frameworks", logo: "/Images/axios.png" },
    { name: "Microservices", level: 88, category: "frameworks", logo: "/Images/microservices.png" },

    { name: "Apache Kafka", level: 85, category: "messaging", logo: "/Images/kafka.png" },
    { name: "RabbitMQ", level: 80, category: "messaging", logo: "/Images/rabbitmq.png" },
    { name: "Redis", level: 80, category: "messaging", logo: "/Images/redis.png" },
    { name: "Event-Driven Architecture", level: 85, category: "messaging", logo: "/Images/kafka.png" },
    { name: "Asynchronous Processing", level: 80, category: "messaging", logo: "/Images/kafka.png" },

    { name: "AWS", level: 85, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "EC2", level: 80, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "S3", level: 80, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "RDS", level: 75, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "Lambda", level: 80, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "API Gateway", level: 75, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "IAM", level: 75, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "CloudWatch", level: 75, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "Docker", level: 80, category: "cloud & devops", logo: "/Images/docker.png" },
    { name: "Kubernetes", level: 80, category: "cloud & devops", logo: "/Images/kubernetes.png" },
    { name: "Jenkins", level: 80, category: "cloud & devops", logo: "/Images/cicd.png" },
    { name: "Terraform", level: 70, category: "cloud & devops", logo: "/Images/terraform.png" },

    { name: "PostgreSQL", level: 85, category: "databases", logo: "/Images/postgresql.png" },
    { name: "MySQL", level: 85, category: "databases", logo: "/Images/mysql.png" },
    { name: "Oracle", level: 82, category: "databases", logo: "/Images/oracle.png" },
    { name: "MongoDB", level: 78, category: "databases", logo: "/Images/MongoDB.png" },
    { name: "DynamoDB", level: 70, category: "databases", logo: "/Images/aws.png" },
    { name: "SQL Optimization", level: 85, category: "databases", logo: "/Images/mysql.png" },
    { name: "Database Design", level: 85, category: "databases", logo: "/Images/mysql.png" },
    { name: "Data Modeling", level: 82, category: "databases", logo: "/Images/mysql.png" },

    { name: "Git", level: 90, category: "engineering", logo: "/Images/Git.png" },
    { name: "Maven", level: 85, category: "engineering", logo: "/Images/Java.png" },
    { name: "CI/CD", level: 85, category: "engineering", logo: "/Images/cicd.png" },
    { name: "JUnit", level: 80, category: "engineering", logo: "/Images/Java.png" },
    { name: "Mockito", level: 75, category: "engineering", logo: "/Images/Java.png" },
    { name: "Postman", level: 85, category: "engineering", logo: "/Images/Postman.png" },
    { name: "SonarQube", level: 75, category: "engineering", logo: "/Images/cicd.png" },
    { name: "Agile / Scrum", level: 85, category: "engineering", logo: "/Images/jira.jpeg" },
    { name: "SDLC", level: 88, category: "engineering", logo: "/Images/jira.jpeg" },
]

const categories = ["programming", "genai", "frameworks", "messaging", "cloud & devops", "databases", "engineering"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("programming");
    const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <img className="h-8 w-8 object-contain" src={skill.logo} alt="" />
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full" style={{ width: skill.level + "%" }} />
                        </div>

                        <div className="flex justify-end text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}