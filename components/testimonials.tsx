import Image from 'next/image'
import {StaticImageData} from 'next/image';

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

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


export default function LogoCloud() {
    const shuffledLogos = shuffleArray(logos).slice(0, 12);
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Don't take our word for it</h2>
                        <p className="text-xl text-gray-400">Experience speaks volumes. As trusted partners to industry
                            giants, our commitment to quality resonates. See for yourself the esteemed brands that trust
                            in UCanPay AMS.</p>
                    </div>

                    {/* Logo Cluster */}
                    <div className="logo-cloud" data-aos="fade-up">
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


                    {/* Testimonials */}
                    {/*<div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">*/}

                    {/*    /!* 1st testimonial *!/*/}
                    {/*    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">*/}
                    {/*        <div>*/}
                    {/*            <div className="relative inline-flex flex-col mb-4">*/}
                    {/*                <Image className="rounded-full" src={TestimonialImage01} width={48} height={48}*/}
                    {/*                       alt="Testimonial 01"/>*/}
                    {/*                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"*/}
                    {/*                     viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the*/}
                    {/*            insights I care about so that I can focus on my productive work. I've had Open PRO for*/}
                    {/*            about 24 hours now and I honestly don't know how I functioned without it before.*/}
                    {/*        </blockquote>*/}
                    {/*        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
                    {/*            <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a*/}
                    {/*            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"*/}
                    {/*            href="#0">UX Board</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    /!* 2nd testimonial *!/*/}
                    {/*    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">*/}
                    {/*        <div>*/}
                    {/*            <div className="relative inline-flex flex-col mb-4">*/}
                    {/*                <Image className="rounded-full" src={TestimonialImage02} width={48} height={48}*/}
                    {/*                       alt="Testimonial 02"/>*/}
                    {/*                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"*/}
                    {/*                     viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the*/}
                    {/*            insights I care about so that I can focus on my productive work. I've had Open PRO for*/}
                    {/*            about 24 hours now and I honestly don't know how I functioned without it before.*/}
                    {/*        </blockquote>*/}
                    {/*        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
                    {/*            <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a*/}
                    {/*            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"*/}
                    {/*            href="#0">UX Board</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    /!* 3rd testimonial *!/*/}
                    {/*    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">*/}
                    {/*        <div>*/}
                    {/*            <div className="relative inline-flex flex-col mb-4">*/}
                    {/*                <Image className="rounded-full" src={TestimonialImage03} width={48} height={48}*/}
                    {/*                       alt="Testimonial 03"/>*/}
                    {/*                <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"*/}
                    {/*                     viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>*/}
                    {/*                </svg>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the*/}
                    {/*            insights I care about so that I can focus on my productive work. I've had Open PRO for*/}
                    {/*            about 24 hours now and I honestly don't know how I functioned without it before.*/}
                    {/*        </blockquote>*/}
                    {/*        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
                    {/*            <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a*/}
                    {/*            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"*/}
                    {/*            href="#0">UX Board</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
            </div>
        </section>
    )
}
