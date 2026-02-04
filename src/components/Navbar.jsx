import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Education', url: '#education' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [])


    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur shadow-xs" : "py-5"
    )}>
        <div className="container flex items-center justify-between md:justify-around">
            <a className="font-bold text-xl text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    Portfolio
                </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-2">
                {navItems.map((item, key) => (
                    <a
                        href={item.url}
                        key={key}
                        className={cn(
                            "px-4 py-2 rounded-md transition-all duration-300",
                            activeSection === item.url.substring(1)
                                ? "bg-primary/40 text-primary font-medium"
                                : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                        )}
                    >
                        {item.name}
                    </a>
                ))}
            </div>


            {/* Mobile Nav */}

            <button onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 mr-8 text-foreground z-50 cursor-pointer"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className=" flex flex-col space-y-8 text-xl text-center">
                    {navItems.map((item, key) => (
                        <a
                            href={item.url}
                            key={key}
                            className={cn(
                                "px-6 py-2 rounded-md transition-all duration-300",
                                activeSection === item.url.substring(1)
                                    ? "bg-primary/40 text-primary font-medium"
                                    : "text-foreground/80 hover:text-primary"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
}