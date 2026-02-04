import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const education = [
    {
        degree: "Master of Science in Computer Science",
        university: "University of Central Oklahoma",
        location: "Edmond, OK",
        period: "2024 - 2025",
        highlights: [
            "Completed advanced coursework in Data Structures & Algorithms, Artificial Intelligence, Cloud Computing",
            "Projects: AI Powered Cold Email Automation Platform, Reminder webapp with automated email notifications, Secure Mental Health Support Platform with AI Moderation, Automated Classroom Attendance system using AWS Rekognition"
        ]
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        university: "GuruNanak University",
        location: "Hyderabad, India",
        period: "2016 - 2020",
        highlights: [
            "Developed a full-stack e-commerce application for cosmetic products with a strong focus on transparency by clearly displaying detailed ingredient information for each product. The platform enables users to browse products, review ingredients, add items to a cart, and complete purchases using multiple payment options including COD and card payments."
        ]
    }
];

export const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section id="education" className="py-20 px-4 relative">
            <div data-aos="fade-up" className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Academic <span className="text-primary">Background</span>
                </h2>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between mb-6 text-left">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-foreground/90 mt-1 font-semibold">
                                        {edu.university} <span className="text-muted-foreground font-normal text-sm ml-2">| {edu.location}</span>
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="text-muted-foreground font-medium">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <ul className="space-y-3">
                                    {edu.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground text-[1rem] leading-relaxed text-left">
                                            <span className="mr-3 text-primary text-2xl leading-none mt-[-2px]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
