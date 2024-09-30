export const metadata = {
    title: 'Clients',
    description: 'Clients page.',
}

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import {StaticImageData} from 'next/image';

import logo01 from '@/public/images/logos/logo01.png'
import logo02 from '@/public/images/logos/logo02.png'
import logo03 from '@/public/images/logos/logo03.png'
import logo04 from '@/public/images/logos/logo04.png'
import logo05 from '@/public/images/logos/logo05.png'
import logo06 from '@/public/images/logos/logo06.png'
import logo07 from '@/public/images/logos/logo07.png'
import logo08 from '@/public/images/logos/logo08.png'
import logo09 from '@/public/images/logos/logo09.png'
import logo10 from '@/public/images/logos/logo10.png'
import logo11 from '@/public/images/logos/logo11.png'
import logo12 from '@/public/images/logos/logo12.png'
import logo13 from '@/public/images/logos/logo13.png'
import logo14 from '@/public/images/logos/logo14.png'
import logo15 from '@/public/images/logos/logo15.png'
import logo16 from '@/public/images/logos/logo16.png'
import logo17 from '@/public/images/logos/logo17.png'
import logo18 from '@/public/images/logos/logo18.png'
import logo19 from '@/public/images/logos/logo19.png'
import logo20 from '@/public/images/logos/logo20.png'

type LogoType = {
    src: StaticImageData;
    alt: string;
};


const logos = [
    {src: logo01, alt: "Company Logo 1"},
    {src: logo02, alt: "Company Logo 2"},
    {src: logo03, alt: "Company Logo 3"},
    {src: logo04, alt: "Company Logo 4"},
    {src: logo05, alt: "Company Logo 5"},
    {src: logo06, alt: "Company Logo 6"},
    {src: logo07, alt: "Company Logo 7"},
    {src: logo08, alt: "Company Logo 8"},
    {src: logo09, alt: "Company Logo 9"},
    {src: logo10, alt: "Company Logo 10"},
    {src: logo11, alt: "Company Logo 11"},
    {src: logo12, alt: "Company Logo 12"},
    {src: logo13, alt: "Company Logo 13"},
    {src: logo14, alt: "Company Logo 14"},
    {src: logo15, alt: "Company Logo 15"},
    {src: logo16, alt: "Company Logo 16"},
    {src: logo17, alt: "Company Logo 17"},
    {src: logo18, alt: "Company Logo 18"},
];


function shuffleArray(array: LogoType[]) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


export default function Clients() {
    const shuffledLogos = shuffleArray(logos).slice(0, 16);
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="fade-up">Clients</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                            [description]
                        </p>
                    </div>
                    {/* Logo Cluster */}
                    <div className="logo-cloud" data-aos="fade-up" data-aos-delay="400">
                        {shuffledLogos.map((logo, index) => {
                            const randomHorizontalMargin = `${Math.round(Math.random()) + 2}rem`;
                            const randomVerticalDisplacement = `${(Math.random() - 0.2)}rem`; // random value between -0.5 and 0.5

                            let size;
                            if (index % 5 === 0) {
                                size = "large";
                            } else if (index % 3 === 0) {
                                size = "medium";
                            } else {
                                size = "small";
                            }

                            return (
                                <div
                                    key={index}
                                    className={`logo ${size}`}
                                    style={{
                                        margin: `${randomVerticalDisplacement} ${randomHorizontalMargin}`,
                                    }}
                                >
                                    <Image src={logo.src} alt={logo.alt}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
