import Head from 'next/head';

const aboutContent = {
    title: "Empowering Innovation in Manufacturing",
    description: "Discover the journey and values that drive our commitment to delivering quality and precision in the field of advanced machinery systems.",
    story: "In 2007, Hash Machinery Systems was born out of a vision to revolutionize the manufacturing industry. Spearheaded by Harry Pan, our journey began in a humble workshop dedicated to precision and reliability. Today, we have grown exponentially, establishing ourselves as leaders in diverse sectors such as automotive and aerospace, without ever losing sight of our roots and original mission.",
    whatWeDo: "We are at the forefront of integrating advanced technology and exceptional skill. Our services span from die casting to intricate machining, and from plastic plastic_molding to high-grade stamping. We're not just about completing projects; we're about pioneering quality, efficiency, and excellence at every turn.",
    values: "Our foundation lies in the trio of Integrity, Excellence, and Innovation. We uphold ethical practices, push performance boundaries, and embrace forward-thinking solutions, making sustainability and responsibility our core priorities.",
    team: "Led by Harry Pan, with over 15 years in the trenches, our skilled brigade of professionals is our biggest asset. Engineers, technicians, designers, and administrators collaborate seamlessly to uphold our reputation for excellence.",
    whyChooseUs: "Partnering with us means embracing a legacy of reliability, precision, and transformative innovation. We invest in state-of-the-art facilities and top-tier human resources, handling every project, regardless of scale, with unmatched expertise. We're not just vendors; we're your strategic allies in carving success stories."
};
export const metadata = {
    title: 'About Us',
    description: aboutContent.description,
};

export default function About() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Same padding as in the services page for consistency */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <header className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">About Us</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{aboutContent.description}</p>
                    </header>

                    {/* Main content section with semantic HTML structure */}
                    <div className="max-w-3xl mx-auto space-y-8 text-left" data-aos="fade-up" data-aos-delay="400">
                        <Section title="Our Story" content={aboutContent.story}/>
                        <Section title="What We Do" content={aboutContent.whatWeDo}/>
                        <Section title="Our Values" content={aboutContent.values}/>
                        <Section title="Our Team" content={aboutContent.team}/>
                        <Section title="Why Choose Us" content={aboutContent.whyChooseUs}/>
                    </div>
                </div>
            </div>
        </section>
    );
}


interface SectionProps {
    title: string;
    content: string;
}

// Section component for rendering each section. This promotes reusability and cleaner code.
const Section: React.FC<SectionProps> = ({title, content}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-3 text-lg text-gray-400">{content}</p>
        </div>
    );
};
