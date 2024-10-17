'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/about/about-us': '/about/about-us', // Hardcoded path for About Us
  '/about/partners-certifications': '/about/partners-certifications', // Hardcoded path for Partners & Certifications
  '/solutions': '/solutions',
  '/solutions/merchant-solutions': '/solutions/merchant-solutions', // Hardcoded path for Merchant Solutions
  '/solutions/omnichannel-solutions': '/solutions/omnichannel-solutions', // Hardcoded path for Omnichannel Solutions
  '/solutions/industries-served': '/solutions/industries-served', // Hardcoded path for Industries Served
  '/solutions/how-it-works': '/solutions/how-it-works', // Hardcoded path for How It Works
  '/resources': '/resources',
  '/resources/case-studies': '/resources/case-studies', // Hardcoded path for Case Studies
  '/resources/news': '/resources/news', // Hardcoded path for News
  '/resources/faqs': '/resources/faqs', // Hardcoded path for FAQs
  '/support': '/support',
  '/support/help-center': '/support/help-center', // Hardcoded path for Help Center
  '/support/contact-support': '/support/contact-support', // Hardcoded path for Contact Support
  '/support/pricing': '/support/pricing', // Hardcoded path for Pricing
  '/contact': '/contact'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
