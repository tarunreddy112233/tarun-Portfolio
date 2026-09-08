import { ArrowRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "AI Powered Cold Email Automation Platform",
    description:
      "Built an end-to-end Generative AI application that analyzes job-posting content, extracts relevant requirements, retrieves contextual portfolio information through vector search and embeddings, and generates personalized outreach emails. Implemented LangChain orchestration, prompt engineering, retrieval-based generation, and an interactive Streamlit interface.",
    image: "/Projects/Softude.png",
    tags: ["Python", "LangChain", "Vector DB", "Embeddings", "RAG", "Streamlit"],
    git: "https://github.com/tarunreddy112233/AI-Cold-Email-Generator",
  },
  {
    id: 2,
    title: "Secure Mental Health Support Platform with AI Moderation",
    description:
      "Developed a cross-platform application incorporating LLM-based content moderation and NLP-oriented processing for peer-to-peer support forums. Designed workflows for medication tracking, appointment scheduling, and moderated user interactions with emphasis on secure data handling and reliable AI-assisted content classification and moderation.",
    image: "/Projects/Mech2Door.png",
    tags: ["Node.js", "React Native", "TypeScript", "Express.js", "MongoDB", "LLM", "NLP"],
    git: "https://github.com/tarunreddy112233/MentalHealth-App-Backend",
  },
  {
    id: 3,
    title: "Serverless Attendance Application",
    description:
      "Developed a serverless, event-driven application using AWS Lambda, Rekognition, Textract, S3, API Gateway, and DynamoDB to automate attendance processing through image-based recognition and document/text extraction. Designed asynchronous cloud-native workflows with infrastructure-as-code and CI/CD automation using AWS CDK, CloudFormation, GitHub Actions, and Jenkins.",
    image: "/Projects/Jarvis.png",
    tags: ["AWS Lambda", "Rekognition", "Textract", "S3", "DynamoDB", "API Gateway", "AWS CDK", "GitHub Actions"],
    git: "https://github.com/tarunreddy112233",
  },
  {
    id: 4,
    title: "Remainder Webapp",
    description:
      "Designed a task and reminder application using Java and Spring Boot, implementing scheduled and event-driven notification workflows for recurring tasks and time-based email notifications. Integrated cloud functions and job scheduling to support asynchronous processing and reliable delivery of user notifications.",
    image: "/Projects/VirtualR.png",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Spring Boot Scheduler"],
    git: "https://github.com/tarunreddy112233",
  },
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects demonstrating my experience across Generative AI, full-stack engineering, cloud-native systems, distributed processing, and intelligent application development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="p-6">
                <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-left text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
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
            rel="noopener noreferrer"
            href="https://github.com/tarunreddy112233"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};