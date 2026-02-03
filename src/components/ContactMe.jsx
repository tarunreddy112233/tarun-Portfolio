import { Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";
import emailjs, { sendForm } from 'emailjs-com';
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

<<<<<<< HEAD
export const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const SERVICE_ID = "service_blgqkde";
    const TEMPLATE_ID = "template_55er18k";
    const PUBLIC_KEY = "skwFN3RZbI9tjpvUQ";
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(
                (result) => alert("Message sent successfully!"),
                setFormData({ name: "", email: "", message: "" })
            )
            .catch(() => alert("Something went wrong "))
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // animation happens only once
        });
    }, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos="fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
=======
export const ContactMe = () =>{

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const SERVICE_ID = "service_onk2n7c";
    const TEMPLATE_ID = "template_5tzx358";
    const PUBLIC_KEY = "Si2NzaIVbvb8uZ1l4";
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
  .then(
    (result) => alert("Message sent successfully!"),
    setFormData({name:"", email:"", message:""})
  )
  .catch(() => alert("Something went wrong "))
};

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Get In <span className="text-primary">Touch</span>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project or idea? Let’s connect and bring it to life together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
<<<<<<< HEAD
                                <Mail className="h-6 w-6 text-primary" />
=======
                                <Mail className="h-6 w-6 text-primary"/>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Email :</h4>
<<<<<<< HEAD
                                <a href="mailto:tarun.lakkireddy@gmail.com"
                                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    tarun.lakkireddy@gmail.com
=======
                                <a href=""
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    abhijeetsinghparihar756@gmail.com
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
<<<<<<< HEAD
                                <Linkedin className="h-6 w-6 text-primary" />
=======
                                <Linkedin className="h-6 w-6 text-primary"/>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            </div>

                            <div>
                                <h4 className="font-medium text-left">LinkedIn :</h4>
<<<<<<< HEAD
                                <a href="https://www.linkedin.com/in/tarun-reddy-lakkireddy-b3169b18b/"
                                    target="_blank"
                                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    Tarun-Reddy-Lakkireddy
=======
                                <a href="https://www.linkedin.com/in/abhijeet-singh-parihar-405a29248/"
                                 target="_blank"
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    abhijeet-singh-parihar
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
<<<<<<< HEAD
                                <MapPin className="h-6 w-6 text-primary" />
=======
                                <MapPin className="h-6 w-6 text-primary"/>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Location :</h4>
                                <a
<<<<<<< HEAD
                                    className="text-muted-foreground text-left"
                                >
                                    Edmond, OK, USA
=======
                                  className="text-muted-foreground text-left"
                                >
                                    Dewas, Madhya Pradesh, India
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
<<<<<<< HEAD

                            <a className="hover:text-primary" target="_blank" href="https://www.linkedin.com/in/tarun-reddy-lakkireddy-b3169b18b/">
                                <Linkedin />
                            </a>

                            <a className="hover:text-primary" target="_blank" href="https://github.com/tarunreddy112233">
                                <Github />
                            </a>

=======
                          <a className="hover:text-primary" target="_blank" href="https://github.com/abhicodes01">
                            <Github/>
                          </a>

                          <a className="hover:text-primary" target="_blank" href="">
                            <Twitter/>
                          </a>

                          <a className="hover:text-primary" target="_blank" href="">
                            <Instagram/>
                          </a>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">Your Name</label>
<<<<<<< HEAD
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Tarun..."
=======
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="Abhi Singh..."
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">Your Email</label>
<<<<<<< HEAD
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="xyz@gmail.com"
=======
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="xyz@gmail.com"
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">Your Message</label>
<<<<<<< HEAD
                            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required
                                className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello! I'd like to talk about Project Details / Regarding Job / Internships ... "
=======
                            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                              placeholder="Hello! I'd like to talk about Project Details / Regarding Job/Internships ... "
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
<<<<<<< HEAD
                            Send Message <Send size={16} />
=======
                            Send Message <Send size={16}/>
>>>>>>> 2b416619f63e6abf3a92ab9a1dab03a5f19a6850
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
}