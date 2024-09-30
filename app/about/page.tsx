import Head from 'next/head';

const aboutContent = {
    title: "[TITLE]",
    description: "[DESC]",
    story: "[STORY]",
    whatWeDo: "[OPERATION]",
    values: "[VALUE]",
    team: "[TEAM]",
    whyChooseUs: "[WHY]"
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
                        <p className="text-xl text-gray-400" data-aos="fade-up"
                           data-aos-delay="200">{aboutContent.description}</p>
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
