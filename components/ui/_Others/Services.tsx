import { ScrollAnimation } from '@/components/ui/scroll-animation';

const services = [
    {
        title: "Academic Editing & Research Development",
        icon: "📖",
        description:
            "Expert guidance in research question formulation, literature review, citation management, and ethical writing practices.",
    },
    {
        title: "Strategic Publication Support",
        icon: "📰",
        description:
            "We help students identify credible journals, analyze impact factors, and prepare research for conferences and publications.",
        ScrollAnimation: true
    },
    {
        title: "Capacity-Building Workshops",
        icon: "📊",
        description:
            "Hands-on training in research design, data literacy, and academic writing to bridge skill gaps in young researchers.",
    },
    {
        title: "Language Optimization Services",
        icon: "🌍",
        description:
            "Editing support for ESL students, ensuring clarity, cultural context, and alignment with international journal standards.",
    },
    {
        title: "Scholarship Program",
        icon: "🎓",
        description:
            "Supporting academically gifted students facing financial barriers with tuition coverage, textbooks, and mentoring.",
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-50 py-16 px-6 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollAnimation direction="up" delay={0.2}>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Our Services
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.4}>
                    <p className="mt-4 text-lg text-gray-700">
                        We offer structured academic support tailored for students and young researchers, ensuring excellence from concept to publication.
                    </p>
                </ScrollAnimation>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <ScrollAnimation 
                        key={index} 
                        delay={index * 0.2} 
                        direction={index % 2 === 0 ? 'left' : 'right'}
                    >
                        <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-transparent hover:border-blue-200 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="text-5xl mb-4 text-blue-500 group-hover:text-blue-600 transition-colors">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-700 text-opacity-80 group-hover:text-opacity-100 transition-all">{service.description}</p>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
    );
};

export default Services;
