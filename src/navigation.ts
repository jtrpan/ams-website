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
  '/about/careers': '/about/careers', // Hardcoded path for Careers
  '/solutions': '/solutions',
  '/solutions/core-solutions/merchant-solutions': '/solutions/core-solutions/merchant-solutions', // Hardcoded path for Merchant Solutions
  '/solutions/core-solutions/omnichannel-solutions': '/solutions/core-solutions/omnichannel-solutions', // Hardcoded path for Omnichannel Solutions
  '/solutions/core-solutions/industries-served': '/solutions/core-solutions/industries-served', // Hardcoded path for Industries Served
  '/solutions/core-solutions/how-it-works': '/solutions/core-solutions/how-it-works', // Hardcoded path for How It Works
  '/solutions/payment-methods/card-payment': '/solutions/payment-methods/card-payment', // Hardcoded path for Card Payment
  '/solutions/payment-methods/wechat-alipay': '/solutions/payment-methods/wechat-alipay', // Hardcoded path for WeChat Alipay
  '/solutions/payment-methods/ecommerce': '/solutions/payment-methods/ecommerce', // Hardcoded path for E-Commerce
  '/solutions/payment-methods/app-payment': '/solutions/payment-methods/app-payment', // Hardcoded path for App Payment
  '/solutions/enterprise/enterprise-custom': '/solutions/enterprise/enterprise-custom', // Hardcoded path for Enterprise & Custom
  '/resources': '/resources',
  '/resources/pricing': '/resources/pricing', // Hardcoded path for Pricing
  '/resources/case-studies': '/resources/case-studies', // Hardcoded path for Case Studies
  '/resources/news-media': '/resources/news-media', // Hardcoded path for News & Media
  '/resources/news': '/resources/news', // Hardcoded path for News
  '/support': '/support',
  '/support/help-center': '/support/help-center', // Hardcoded path for Help Center
  '/support/user-agreement': '/support/user-agreement', // Hardcoded path for User Agreement
  '/support/privacy-policy': '/support/privacy-policy', // Hardcoded path for Privacy Policy
  '/support/contact-support': '/support/contact-support', // Hardcoded path for Contact Support
  '/support/faqs': '/support/faqs', // Hardcoded path for FAQs
  '/contact': '/contact'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
