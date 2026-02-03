<<<<<<< HEAD
import { ArrowRight, Github } from "lucide-react";
=======
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
<<<<<<< HEAD
    title: "AI Powered Cold Email Automation Platform",
    description:
      "Developed an end-to-end Generative AI application that automatically generates personalized cold outreach emails from job postings using Llama 3.1 and modern LLM orchestration frameworks. The system extracts job requirements, retrieves relevant portfolio context using vector search, and produces tailored email content through a user-friendly web interface.",
    image: "/Projects/Softude.png",
    tags: ["Python", "Lang Chain", "Vector DB", "Streamlit"],
    git: "https://github.com/tarunreddy112233",
=======
    title: "Softude - Website Landing Page",
    description:
      "Softude is a global IT & digital-services company that offers enterprise-level solutions such as web and mobile app development, digital transformation, AI & cloud services, ",
    image: "/Projects/Softude.png",
    tags: ["React.js", "Framer Motion", "TailwindCSS", "Vite"],
    url: "https://softude.netlify.app/",
    git: "https://github.com/abhicodes01/Softude_Redesign_LandingPage",
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
  },

  {
    id: 2,
<<<<<<< HEAD
    title: "Secure Mental Health Support Platform with AI Moderation",
    description:
      "Developed a secure, cross-platform Mental Health Support Application designed to assist individuals with personal health management, including medication tracking, appointment scheduling, and moderated peer-to-peer support. The application integrates a Large Language Model (LLM) for automated forum content moderation to ensure user safety while maintaining compliance with sensitive data-handling best practices.",
    image: "/Projects/Mech2Door.png",
    tags: [
      "Node.js",
      "React Native",
      "Axios API",
      "MongoDB",
    ],
    git: "https://github.com/tarunreddy112233",
=======
    title: "Mech2Door",
    description:
      "A full-stack MERN web app connecting users with verified local mechanics, featuring real-time booking, admin verification, and secure authentication for trusted on-demand service.",
    image: "/Projects/Mech2Door.png",
    tags: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "PostMan",
      "TailwindCSS",
      "React.js",
    ],
    url: "#",
    git: "#",
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
  },

  {
    id: 3,
<<<<<<< HEAD
    title: "Remainder Webapp",
    description:
      "Designed to help users manage their tasks, set reminders, and receive email notification about their upcoming events and view recurring tasks efficiently. The notifications can be customized according to the timings the user wants the notification and frequency of notification.",
    image: "/Projects/VirtualR.png",
    tags: ["Java", "Spring Boot", "MySQL", "Spring Boot Scheduler", "JPA", "Hibernate", "Thymeleaf"],
    git: "https://github.com/tarunreddy112233",
=======
    title: "VirtualR - Developer Tools Website",
    description:
      "A dynamic and responsive virtual reality showcase built with React, featuring sleek UI and interactive components.",
    image: "/Projects/VirtualR.png",
    tags: ["Javascript", "TailwindCSS", "React.js", "Vite"],
    url: "https://virtualr-react.netlify.app/",
    git: "#",
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
  },

  {
    id: 4,
<<<<<<< HEAD
    title: "Serverless Attendance Application ",
    description:
      "Developed a serverless web app using AWS Lambda, S3, Rekognition, and Textract to automate classroom attendance by matching student-uploaded photos with live classroom images. Integrated API Gateway to connect the frontend (hosted on AWS Amplify) with backend services. Results were stored in DynamoDB for real-time tracking. Deployed infrastructure as code using AWS CDK, CloudFormation. Implemented CI/CD pipeline with GitHub Actions for automated deployment.",
    image: "/Projects/Jarvis.png",
    tags: [
      "Python",
      "Java",
      "AWS DynamoDB",
      "AWS Lambda",
      "AWS Amplify",
      "AWS Rekognition",
      "AWS Textract",
    ],
    git: "https://github.com/tarunreddy112233",
  },

=======
    title: "Jarvis - AI Personal Assistant",
    description:
      "Jarvis listens to voice commands, responds in real-time with speech output, and features a dynamic 3D animated interface for an immersive experience.",
    image: "/Projects/Jarvis.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "Three.js",
      "Gemini API",
      "SpeechRecognition",
    ],
    url: "#",
    git: "https://github.com/abhicodes01/voice-assistant-jarvis",
  },

  {
    id: 5,
    title: "SynergyTop - Website Landing Page",
    description:
      "SynergyTop is presented as a full-service IT agency offering services such as custom software development, web development, eCommerce & mobile-app development",
    image: "/Projects/SynergyTop.png",
    tags: ["React.js", "TailwindCSS", "Framer Motion", "Vite"],
    url: "https://synergytop.netlify.app/",
    git: "https://github.com/abhicodes01/StrategyTop_Redesign_LandingPage",
  },
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to writing clean, maintainable code
          and building user-friendly interfaces. I’ve focused on practical
          solutions that balance performance, usability, and reliability.
        </p>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
<<<<<<< HEAD
              <div className="p-6">
                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
=======
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

<<<<<<< HEAD
                <div className="flex justify-between items-center">

=======
                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-xs mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Live Link <ArrowUpRight size={16} />
                  </a>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850

                  <a
                    href={project.git}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
<<<<<<< HEAD
            href="https://github.com/tarunreddy112233"
=======
            href="https://github.com/abhicodes01"
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
