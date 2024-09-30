import Head from 'next/head';

// Quality-specific content
// Structured Quality Commitment Content
const qualityContent = {
    title: "[title]",
    description: "[description]",
    commitmentSections: [
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
        {
            title: "[title]",
            content: '[content]',
        },
    ],
};


export const metadata = {
    title: '[title]',
    description: qualityContent.description,
};

export default function Quality() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
            </Head>

            {/* Main Quality Section */}
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        {/* Header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">Quality
                                Assurance</h1>
                            <p className="text-xl text-gray-400" data-aos="fade-up"
                               data-aos-delay="200">{qualityContent.description}</p>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-3xl mx-auto space-y-8 text-left" data-aos="fade-up" data-aos-delay="400">
                            <Section
                                title={qualityContent.commitmentSections[0].title}
                                content={qualityContent.commitmentSections[0].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[1].title}
                                content={qualityContent.commitmentSections[1].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[2].title}
                                content={qualityContent.commitmentSections[2].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[3].title}
                                content={qualityContent.commitmentSections[3].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[4].title}
                                content={qualityContent.commitmentSections[4].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[5].title}
                                content={qualityContent.commitmentSections[5].content}
                            />
                            <Section
                                title={qualityContent.commitmentSections[6].title}
                                content={qualityContent.commitmentSections[6].content}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Components

interface SectionProps {
    title: string;
    content: string;
}

const Section: React.FC<SectionProps> = ({title, content}) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 text-lg text-gray-400">{content}</p>
    </div>
);
