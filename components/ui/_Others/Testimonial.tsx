import Image from "next/image";
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const testimonials = [
    {
        name: "Aisha Kamau",
        role: "Undergraduate Researcher",
        text: "The research guidance I received was exceptional! My paper was successfully published in an international journal, thanks to the expert mentorship and editing support.",
        image: "/assets/analysis.webp",
    },
    {
        name: "Samuel Otieno",
        role: "High School Science Fair Finalist",
        text: "Their publication support helped me submit my research to a top conference. The impact factor analysis was invaluable!",
        image: "/assets/messytable.webp",
    },
    {
        name: "Dr. Jane Mwangi",
        role: "University Lecturer & Mentor",
        text: "The workshops are well-structured and provide real-world academic skills. My students have greatly benefited from the mentorship programs.",
        image: "/assets/library.webp",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-16 px-6 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollAnimation direction="up" delay={0.2}>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        What Our Students & Experts Say
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.4}>
                    <p className="mt-4 text-lg text-gray-700">
                        Hear from students, researchers, and mentors who have benefited from our academic support services.
                    </p>
                </ScrollAnimation>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <ScrollAnimation
                        key={index}
                        delay={index * 0.2}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                    >
                        <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-transparent hover:border-blue-200 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                width={100} 
                                height={100} 
                                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-blue-600 mb-2">{testimonial.role}</p>
                            <p className="mt-2 text-gray-700 italic text-opacity-80 group-hover:text-opacity-100 transition-all">{testimonial.text}</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
