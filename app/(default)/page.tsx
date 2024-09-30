export const metadata = {
    title: 'UCanPay AMS',
    description: 'We provide high quality manufacturing services.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import LogoCloud from '@/components/testimonials'

export default function Home() {
    return (
        <>
            <Hero/>
            <Features/>
            <Zigzag/>
            <LogoCloud/>
            <Newsletter/>
        </>
    )
}
