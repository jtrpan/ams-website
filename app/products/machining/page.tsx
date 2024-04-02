import Image from "next/image";

export const metadata = {
    title: 'Machining Products',
    description: 'Machining Products page.',
}

import Link from 'next/link'
import FeatImage01 from "@/public/images/products/machining_01.jpg";
import FeatImage02 from "@/public/images/products/machining_02.jpg";
import FeatImage03 from "@/public/images/products/machining_03.jpg";

export default function Machining() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div data-aos="fade-up"
                             className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-orange-600 bg-orange-200 rounded-full mb-4">Products
                        </div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="200">Machining</h1>
                            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="400">Hash Machinery
                                Systems (HMS) sets the standard in precision machined products, meeting and exceeding
                                our customers' quality expectations. Our capability extends beyond machining; we offer
                                comprehensive finishing services, including plating and E-Coating, to enhance product
                                durability and aesthetics. Serving industries from automotive to aerospace, HMS machined
                                products stand out for their precision, durability, and finish.</p>
                        </div>
                    </div>
                    <div>
                        {/* Items */}
                        <div className="grid gap-20">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                    data-aos="fade-up" data-aos-delay="600">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01}
                                           width={540}
                                           height={405} alt="Advanced Integration"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-right" data-aos-delay="600">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Precision
                                        </div>
                                        <h3 className="h3 mb-3">Manufacturing Accuracy</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our machined products are the epitome
                                            of precision, crafted to achieve tolerances within micrometers, ensuring
                                            unparalleled accuracy and consistency.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Ultra-Precise Tolerances</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Advanced Metrology</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Uniform Quality</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                    data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02}
                                           width={540}
                                           height={405} alt="Features 02"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Finish
                                        </div>
                                        <h3 className="h3 mb-3">Superior Surface Treatment</h3>
                                        <p className="text-xl text-gray-400 mb-4">Our finishing services, including
                                            plating and E-Coating, provide not only aesthetic appeal but also resistance
                                            to corrosion and wear.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Enhanced Durability</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Corrosion Resistance</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Aesthetic Appeal</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                    data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03}
                                           width={540}
                                           height={405} alt="Advanced Integration"/>
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div
                                            className="font-architects-daughter text-xl text-red-600 mb-2">Efficiency
                                        </div>
                                        <h3 className="h3 mb-3">Tailored Engineering Solutions</h3>
                                        <p className="text-xl text-gray-400 mb-4">We specialize in custom machined
                                            products, offering bespoke solutions that cater to the unique needs and
                                            specifications of our clients.
                                        </p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Bespoke Solutions</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Design Support</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0"
                                                     viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                                </svg>
                                                <span>Flexible Production</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
