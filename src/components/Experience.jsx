import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const achievements = [
    {
        role: "Senior Software Engineer",
        company: "PNC Financial",
        location: "USA",
        period: "Feb 2026 - Present",
        responsibilities: [
            "Developed scalable Java, Spring Boot, and React.js applications and REST APIs supporting customer onboarding, account management, payments, transaction processing, and secure self-service workflows across enterprise banking platforms.",
            "Engineered distributed microservices for payment processing, account validation, transaction orchestration, reconciliation, fraud screening, and audit reporting, applying scalable system design and reliability patterns to support high-volume business operations.",
            "Built event-driven and streaming architectures using Apache Kafka and RabbitMQ for real-time transaction processing, payment notifications, fraud alerts, and asynchronous communication across distributed services.",
            "Applied secure API and application architecture using Spring Security, OAuth 2.0, JWT, RBAC, SSL/TLS, and API gateways to protect customer data and financial transactions across distributed enterprise systems.",
            "Tuned application performance through Redis, SQL optimization, connection pooling, and database tuning across Oracle and PostgreSQL, improving API response times and transaction throughput during peak workloads.",
            "Automated software delivery through Git, Jenkins, Docker, Kubernetes, Maven, and SonarQube, integrating automated testing, code-quality validation, build processes, and deployment workflows across development, QA, and production environments.",
            "Deployed cloud-native distributed applications on AWS EC2, RDS, Lambda, S3, IAM, API Gateway, and CloudWatch, supporting scalable services, high availability, operational monitoring, and production reliability.",
            "Established centralized logging, monitoring, and observability using ELK Stack, Prometheus, Grafana, Splunk, and AppDynamics, enabling production troubleshooting, service-level monitoring, transaction traceability, and faster incident resolution."
        ],
        technologies: [
            "Java", "Python", "Spring Boot", "Spring Security", "React.js", "REST APIs", "Microservices", "Kafka", "RabbitMQ", "Redis",
            "OAuth 2.0", "JWT", "RBAC", "PostgreSQL", "Oracle", "AWS", "Docker", "Kubernetes", "Jenkins", "Maven", "SonarQube"
        ]
    },
    {
        role: "Software Developer Intern",
        company: "Coforge",
        location: "USA",
        period: "May 2025 - Nov 2025",
        responsibilities: [
            "Assisted in developing an enterprise HRMS and Payroll Management System using Java, Spring Boot, Hibernate, and REST APIs, supporting employee onboarding, attendance, payroll processing, leave management, timesheets, and performance workflows.",
            "Developed React.js and JavaScript frontend modules with MySQL-backed services, implementing employee self-service capabilities and integrating REST APIs with backend business logic and enterprise application workflows.",
            "Partnered with senior developers in Agile/Scrum SDLC to resolve application defects, optimize SQL queries, support Git/Jenkins CI/CD workflows, perform unit testing, participate in code reviews, and maintain technical documentation for reliable feature delivery."
        ],
        technologies: [
            "Java", "Spring Boot", "Hibernate", "REST APIs", "React.js", "JavaScript", "MySQL", "Git", "Jenkins", "JUnit", "Agile/Scrum"
        ]
    },
    {
        role: "Software Engineer",
        company: "Ojas Innovative Technologies",
        location: "India",
        period: "Jan 2021 - Dec 2023",
        responsibilities: [
            "Developed enterprise financial management applications using Java, Spring Boot, Hibernate, React.js, and REST APIs, supporting billing, payment processing, account management, invoicing, reconciliation, and financial reporting across high-volume business operations.",
            "Architected scalable RESTful APIs and Spring Boot microservices for payment workflows, invoice generation, customer account services, transaction processing, and financial settlement, applying distributed system and service-oriented design principles.",
            "Implemented event-driven processing with Apache Kafka and RabbitMQ for real-time payment notifications, transaction validation, reconciliation events, and asynchronous financial workflows, improving service scalability and processing reliability.",
            "Delivered responsive React.js dashboards using JavaScript, TypeScript, HTML5, and CSS3, providing real-time visibility into payment status, account balances, transaction history, and operational KPIs for business users.",
            "Improved PostgreSQL and MySQL performance through query tuning, indexing, transaction optimization, and data-access improvements, strengthening reporting performance and high-volume transaction processing.",
            "Integrated Redis for caching and session management to accelerate frequently accessed data retrieval, reduce database load, and improve application responsiveness during high-traffic processing periods.",
            "Utilized AWS EC2, S3, Lambda, IAM, SQS, SNS, and API Gateway to implement scalable cloud-native services supporting payment integrations, document processing, asynchronous workflows, and distributed application communication.",
            "Streamlined build, testing, and deployment processes using Git, Jenkins, Docker, and Kubernetes, establishing repeatable CI/CD workflows and consistent application delivery across development, QA, and production environments.",
            "Worked with business analysts, product owners, QA engineers, DevOps teams, and finance stakeholders in an Agile/Scrum environment to troubleshoot production issues, conduct code reviews, improve system reliability, and deliver enhancements to distributed financial applications."
        ],
        technologies: [
            "Java", "Spring Boot", "Hibernate", "React.js", "TypeScript", "REST APIs", "Kafka", "RabbitMQ", "Redis", "PostgreSQL", "MySQL",
            "AWS", "SQS", "SNS", "API Gateway", "Docker", "Kubernetes", "Jenkins", "Git", "Agile/Scrum"
        ]
    },
    {
        role: "Software Developer",
        company: "Lumen Technologies",
        location: "India",
        period: "Mar 2019 - Dec 2020",
        responsibilities: [
            "Developed Java-based web applications and RESTful APIs supporting a large-scale shipping and logistics platform, enabling shipment tracking, order processing, warehouse operations, and customer-facing logistics services.",
            "Built responsive React.js interfaces using JavaScript, TypeScript, HTML5, and CSS3, delivering operational dashboards, shipment status capabilities, and user-facing workflow enhancements.",
            "Implemented backend services and business logic using Java, Spring MVC, Servlets, and Hibernate, supporting shipment processing, inventory management, order fulfillment, and integrations with enterprise logistics systems.",
            "Optimized PostgreSQL and MySQL queries, stored procedures, and database operations to improve application performance, logistics reporting, shipment analytics, and backend data processing.",
            "Troubleshot production application issues, performed root-cause analysis, and implemented corrective fixes to maintain availability and reliable processing across the logistics platform.",
            "Supported AWS-based application deployment using EC2 and S3, assisting with environment configuration, application hosting, deployment activities, and production maintenance.",
            "Coordinated with business analysts, QA engineers, UI/UX designers, and Agile development teams using Git and Scrum practices to deliver logistics platform enhancements and backend services through scheduled releases.",
            "Maintained technical documentation covering application architecture, REST API interfaces, deployment procedures, business workflows, and production support processes to improve knowledge sharing and operational continuity."
        ],
        technologies: [
            "Java", "Spring MVC", "Servlets", "Hibernate", "REST APIs", "React.js", "JavaScript", "TypeScript", "PostgreSQL", "MySQL", "AWS EC2", "AWS S3", "Git", "Scrum"
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
                                    <span className="text-muted-foreground font-medium">{job.period}</span>
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