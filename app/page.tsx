import Services from '@/components/ui/_Others/Services'
import Testimonials from '@/components/ui/_Others/Testimonial'
import { Button } from '@/components/ui/button'
import TextGenerateEffect from '@/components/ui/text-gen-effect'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollAnimation } from '@/components/ui/scroll-animation'


const Home = () => {
  return (
    <div className="w-full scroll-smooth">
      <section className="w-full relative bg-blue-50 min-h-screen flex flex-col mx-auto items-center justify-center text-center px-4">
        <div className="w-full md:max-w-2xl flex flex-col items-center justify-center gap-4 text-center">
          <TextGenerateEffect className='text-4xl text-gray-900 md:text-5xl' words=' Comprehensive Support from Concept to Citation' />
          <p className="mt-4 text-xl text-gray-700 text-pretty font-medium text-center">
            Providing expert guidance in <span className='font-semibold text-[#176bf2] '>academic writing</span>, <span className='font-semibold text-[#176cf4] '> research development </span>and <span className='font-semibold text-[#176df8] '>ethical publishing</span> for students and young researchers.
          </p>

        </div>

        <div className="mt-6 mx-auto flex justify-center gap-4 w-full ">
          <Link className='text-white cursor-pointer z-10 bg-[#176bf2] hover:bg-[#176bf2]/90 px-4 py-2 rounded-md font-semibold transition-all ease-in slide-in-from-left-2 ' href='/#services'>Our Services</Link>
          <Button variant='ghost' className='text-[#176bf2]'>
            <Link className='text-white cursor-pointer z-10  hover:bg-[#176bf2]/90 px-4 py-2 rounded-md ease-in slide-in-from-right-2' href='/contact'>
              Get in Touch
            </Link>
          </Button>

        </div>



        {/* Background Illustration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900 opacity-40"></div>

      </section >



      <section id="about" className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Empowering Academic Excellence Through Ethical Research
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We provide structured support for students and young researchers, ensuring ethical and credible research development.
            From research design to publication, we guide learners through every stage with expert mentorship and high-quality resources.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Image / Illustration */}
          <div className="w-full object-cover relative md:w-1/2 aspect-square ">

            <Image src='/assets/study.webp' alt='Reading' fill className='object-cover w-full h-full' />
          </div>

          {/* Key Features */}
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollAnimation delay={0.2} direction="right">
                <div className="flex items-start shadow-md p-2 rounded-md hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow">
                        📚
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Comprehensive Research Assistance</h3>
                        <p className="text-gray-700">
                          We help students formulate research questions, analyze literature, and structure their studies for academic success.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4} direction="right">
                <div className="flex items-start shadow-md p-2 rounded-md hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow">
                        ✍️
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Ethical & Transparent Writing Support</h3>
                        <p className="text-gray-700">
                          Our team ensures originality with plagiarism checks, methodology validation, and expert editing for clear communication.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6} direction="right">
                <div className="flex items-start shadow-md p-2 rounded-md hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow">
                        🌍
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Global Publication Guidance</h3>
                        <p className="text-gray-700">
                          We assist in journal selection, impact factor analysis, and mentorship for students aiming for academic recognition.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        </div>
      </section>



      <Services />

      <Testimonials />

      <section id="cta" className="bg-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Take Your Research to the Next Level
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Get expert guidance on academic writing, research development, and publication.
            Join a community of learners committed to academic excellence.
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-100 transition"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home