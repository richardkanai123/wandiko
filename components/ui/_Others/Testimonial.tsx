import Image from "next/image";

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
        <section id="testimonials" className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    What Our Students & Experts Say
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    Hear from students, researchers, and mentors who have benefited from our academic support services.
                </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="w-12 h-12 rounded-full" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                        <p className="mt-3 text-gray-700 italic">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
