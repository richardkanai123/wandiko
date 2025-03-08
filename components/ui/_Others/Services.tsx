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
        <section id="services" className="bg-gray-50 py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Our Services
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    We offer structured academic support tailored for students and young researchers, ensuring excellence from concept to publication.
                </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <div className="text-4xl">{service.icon}</div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
