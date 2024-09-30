export const metadata = {
    title: 'title',
    description: 'description',
}

import Link from 'next/link';
import Head from 'next/head';
import '../css/style.css'

export default function Services() {


    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="fade-up">Services</h1>
                        <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">[description]</p>
                    </div>
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up"
                         data-aos-delay="400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                            <div className="image-button">
                                <img src="/images/image_buttons/die_casting.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="services/diecasting">[placeholder]</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/machining.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="services/machining">[placeholder]</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/plastic_mold.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="services/plastic_molding">[placeholder]</Link>
                                </div>
                            </div>
                            <div className="image-button">
                                <img src="/images/image_buttons/stamping.jpg" alt="Die Casting"/>
                                <div className="overlay-text">
                                    <Link href="services/stamping">[placeholder]</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
