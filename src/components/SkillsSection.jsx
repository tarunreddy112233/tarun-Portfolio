import { useState } from "react"
import { cn } from "../lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const skills = [
<<<<<<< HEAD
    { name: "HTML", level: 95, category: "frontend", logo: "/Images/html-5_5968267.png" },
    { name: "CSS", level: 95, category: "frontend", logo: "/Images/css-3_5968242.png" },
    { name: "Javascript", level: 90, category: "frontend", logo: "/Images/js_5968292.png" },
    { name: "React", level: 80, category: "frontend", logo: "/Images/molecule_10285707.png" },
    { name: "Angular", level: 70, category: "frontend", logo: "/Images/angular-logo.png" },
    { name: "Typescript", level: 70, category: "frontend", logo: "/Images/typescript_5968381.png" },
    { name: "Bootstrap", level: 80, category: "frontend", logo: "/Images/bootstrap-logo.png" },

    { name: "Java", level: 95, category: "backend", logo: "/Images/Java.png" },
    { name: "Spring Boot", level: 90, category: "backend", logo: "/Images/spring-boot.png" },
    { name: "Spring MVC", level: 90, category: "backend", logo: "/Images/spring-boot.png" },
    { name: "Microservices", level: 85, category: "backend", logo: "/Images/microservices.png" },
    { name: "Rest APIs", level: 85, category: "backend", logo: "/Images/axios.png" },
    { name: "Axios API", level: 75, category: "backend", logo: "/Images/axios.png" },
    { name: "PHP", level: 75, category: "backend", logo: "/Images/php.png" },
    { name: "Node.js", level: 90, category: "backend", logo: "/Images/programing_15484303.png" },

    { name: "MySQL", level: 85, category: "database", logo: "/Images/mysql.png" },
    { name: "Oracle SQL", level: 85, category: "database", logo: "/Images/oracle.png" },
    { name: "PostgreSQL", level: 75, category: "database", logo: "/Images/postgresql.png" },
    { name: "MongoDB", level: 75, category: "database", logo: "/Images/MongoDB.png" },
    { name: "Firebase", level: 70, category: "database", logo: "/Images/firebase.png" },

    { name: "AWS", level: 75, category: "cloud & devops", logo: "/Images/aws.png" },
    { name: "GCP", level: 70, category: "cloud & devops", logo: "/Images/gcp.png" },
    { name: "Azure", level: 75, category: "cloud & devops", logo: "/Images/azure.jpeg" },
    { name: "Docker", level: 75, category: "cloud & devops", logo: "/Images/docker.png" },
    { name: "Kubernetes", level: 75, category: "cloud & devops", logo: "/Images/kubernetes.png" },
    { name: "CI/CD", level: 75, category: "cloud & devops", logo: "/Images/cicd.png" },

    { name: "Python", level: 75, category: "AI / ML", logo: "/Images/python.png" },
    { name: "Numpy", level: 70, category: "AI / ML", logo: "/Images/numpy.png" },
    { name: "Pandas", level: 70, category: "AI / ML", logo: "/Images/python.png" },
    { name: "Scikit-learn", level: 70, category: "AI / ML", logo: "/Images/python.png" },
    { name: "Vector DB", level: 70, category: "AI / ML", logo: "/Images/vectordb.jpeg" },

    { name: "Eclipse", level: 95, category: "tools", logo: "/Images/eclipse.jpeg" },
    { name: "IntelliJ", level: 90, category: "tools", logo: "/Images/intellij.jpeg" },
    { name: "Git/Github", level: 80, category: "tools", logo: "/Images/Git.png" },
    { name: "VS Code", level: 90, category: "tools", logo: "/Images/Visual Studio Code (VS Code).png" },
    { name: "Postman", level: 80, category: "tools", logo: "/Images/Postman.png" },
    { name: "Figma", level: 70, category: "tools", logo: "/Images/Figma.png" },
    { name: "Jira", level: 85, category: "tools", logo: "/Images/jira.jpeg" },
]

const categories = ["frontend", "backend", "database", "cloud & devops", "AI / ML", "tools"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("frontend");

    const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
=======
    {name: "HTML", level: 95, category: "frontend", logo: "/Images/html-5_5968267.png"},
    {name: "CSS", level: 95, category: "frontend", logo: "/Images/css-3_5968242.png"},
    {name: "Javascript", level: 95, category: "frontend", logo: "/Images/js_5968292.png"},
    {name: "React", level: 90, category: "frontend", logo: "/Images/molecule_10285707.png"},
    {name: "Redux", level: 70, category: "frontend", logo: "/Images/Redux.png"},
    {name: "Next.js", level: 70, category: "frontend", logo: "/Images/icons8-next.js.svg"},
    {name: "Tailwind CSS", level: 90, category: "frontend", logo: "/Images/Tailwind CSS.png"},
    {name: "Typescript", level: 70, category: "frontend", logo: "/Images/typescript_5968381.png"},
    {name: "Vite", level: 80, category: "frontend", logo: "/Images/Vite.js.png"},

    {name: "Node.js", level: 90, category: "backend", logo: "/Images/programing_15484303.png"},
    {name: "Express.js", level: 80, category: "backend", logo: "/Images/icons8-express-js (1).svg"},
    {name: "MongoDB", level: 75, category: "backend", logo: "/Images/MongoDB.png"},
    {name: "Java", level: 80, category: "backend", logo: "/Images/Java.png"},

    {name: "Git/Github", level: 80, category: "tools", logo: "/Images/Git.png"},
    {name: "VS Code", level: 90, category: "tools", logo: "/Images/Visual Studio Code (VS Code).png"},
    {name: "Postman", level: 70, category: "tools", logo: "/Images/Postman.png"},
    {name: "Figma", level: 80, category: "tools", logo: "/Images/Figma.png"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // animation happens only once
      });
    }, []);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
<<<<<<< HEAD
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full trasnition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                        {category}
=======
                {categories.map((category,key)=>(
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full trasnition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                        )}>
                           {category}
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
<<<<<<< HEAD
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-xs card-hover" >

                        <div className="flex items-center bg-card p-4 sm:bg-none sm:p-0 rounded-full justify-center sm:space-x-6">
                            <div className="sm:h-6 sm:w-6 sm:mb-4">
                                <img className="h-9 sm:h-6" src={skill.logo} alt="" />
                            </div>

                            <div className="hidden sm:flex mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
=======
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="sm:bg-card sm:p-6 sm:rounded-lg sm:shadow-xs card-hover" >
                        
                        <div className="flex items-center bg-card p-4 sm:bg-none sm:p-0 rounded-full justify-center sm:space-x-6">
                            <div className="sm:h-6 sm:w-6 sm:mb-4">
                              <img className="h-9 sm:h-6" src={skill.logo} alt="" />
                            </div>

                            <div className="hidden sm:flex mb-4">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            </div>
                        </div>

                        <div className="hidden sm:flex w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
<<<<<<< HEAD
                            <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out"
                                style={{ width: skill.level + "%" }}
=======
                            <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out" 
                              style={{width: skill.level + "%"}}
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            />
                        </div>

                        <div className="hidden sm:flex justify-end text-right mt-1">
                            <span className="text-sm text-muted-foregound">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}