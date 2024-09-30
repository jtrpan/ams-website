import './css/style.css'

// import {Inter, Architects_Daughter} from 'next/font/google'
import localFont from 'next/font/local'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'


const inter = localFont({
    src: [
        {
            path: '../public/fonts/Inter/static/Inter-Thin.ttf',
            weight: '100',
            style: 'Thin',
        },
        {
            path: '../public/fonts/Inter/static/Inter-ExtraLight.ttf',
            weight: '200',
            style: 'ExtraLight',
        },
        {
            path: '../public/fonts/Inter/static/Inter-Light.ttf',
            weight: '300',
            style: 'Light',
        },
        {
            path: '../public/fonts/Inter/static/Inter-Regular.ttf',
            weight: '400',
            style: 'Regular',
        },
        {
            path: '../public/fonts/Inter/static/Inter-Medium.ttf',
            weight: '500',
            style: 'Medium',
        },
        {
            path: '../public/fonts/Inter/static/Inter-SemiBold.ttf',
            weight: '600',
            style: 'SemiBold',
        },
        {
            path: '../public/fonts/Inter/static/Inter-Bold.ttf',
            weight: '700',
            style: 'Bold',
        },
        {
            path: '../public/fonts/Inter/static/Inter-ExtraBold.ttf',
            weight: '800',
            style: 'ExtraBold',
        },
        {
            path: '../public/fonts/Inter/static/Inter-Black.ttf',
            weight: '900',
            style: 'Black',
        },
    ],
    // subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    adjustFontFallback: false,
})

const architects_daughter = localFont({
    src: [
        {
            path: '../public/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf',
            weight: '400',
            style: 'Regular',
        },
    ],
    // subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap',
    adjustFontFallback: false,
})


// const inter_old = Inter({
//     subsets: ['latin'],
//     variable: '--font-inter',
//     display: 'swap',
//     adjustFontFallback: false,
// })

// const architects_daughter_old = Architects_Daughter({
//     subsets: ['latin'],
//     variable: '--font-architects-daughter',
//     weight: '400',
//     display: 'swap',
//     adjustFontFallback: false,
// })

export const metadata = {
    title: 'UCanPay AMS',
    description: 'Welcome to UCanPay AMS.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header/>
            {children}
            <Banner/>
        </div>
        </body>
        </html>
    )
}
