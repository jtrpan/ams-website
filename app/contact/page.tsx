import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
export const metadata = {
    title: 'Contact',
    description: 'Get in touch with UCanPay AMS for inquiries about our products and services or for customer support.',
}

import Link from 'next/link';
import Head from 'next/head';

// Dynamically import the component that includes client-side interactivity
const ContactForm = dynamic(() => import('./form'), {
    ssr: false, // This will disable server-side rendering for this component
});

export default function Contact() {
    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // Send the form data to your API route
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData,
        });

        // Handle the response
        const result = await response.json();
        console.log(result.message);

        // Additional client-side logic after form submission
        // ...
    };


    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="fade-up">Contact</h1>
                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                            Whether you have questions about our products, need support, or want to discuss your
                            equipment needs, we're here to help. Connect with our team of experts to find tailored
                            solutions that drive your business forward.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto pb-12 md:pb-16">
                        <div className="max-w-4xl mx-auto">
                            {/* Contact Form */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>


                    {/* Additional Contact */}
                    <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
                        <h4 className="h4 mb-4" data-aos="fade-up" data-aos-delay="600">Other Ways to Reach Us</h4>
                        <ul className="contact-details" data-aos="fade-up" data-aos-delay="800">
                            <li><strong>Address:</strong> Suite 500, 7030 Woodbine Ave, Markham, ON, L3R 6G2, Canada
                            </li>
                            <li><strong>Email:</strong> info@hashmachinery.com</li>
                            <li><strong>Phone:</strong> +1 (613) 884-3388</li>
                            <li><strong>Fax:</strong> +1 (613) 491-0426</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
