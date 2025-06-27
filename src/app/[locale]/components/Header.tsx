'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LogoIcon1 from '../../icons/logo1'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { CloseButton, Disclosure, useClose } from '@headlessui/react'
import { CloseNestedDisclosuresLink } from './CloseNestedDisclosuresLink'
import { useRouter } from 'next/router'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('headers')

  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      setDropdownOpen(null)
    }
  }

  useEffect(() => {
    // Add event listener for clicking outside the dropdown
    document.addEventListener('click', handleClickOutside)

    return () => {
      // Cleanup event listener
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setIsSolutionsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md shadow-sm">
        <div
          className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3 md:px-6 md:py-5 transition-all duration-300">
          <Link lang={locale} href="/">
            <div className="flex flex-row items-center">
              <div className="flex items-center h-10 w-10 sm:h-14 sm:w-14">
                <LogoIcon1 />
              </div>
              <strong className="mx-2 select-none">
                <span className="hidden sm:inline">Antario Merchant Services (AMS)</span>
                <span className="inline sm:hidden">Antario Merchant Services (AMS)</span>
              </strong>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-secondary hover:text-primary focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-4">
                {/* About Dropdown */}
                <div className="relative dropdown">
                  <button
                    onClick={() => toggleDropdown('about')}
                    className="hover:text-secondary focus:outline-none"
                  >
                    {t('About')}
                  </button>
                  {dropdownOpen === 'about' && (
                    <div
                      className="absolute z-50 mt-2 min-w-[12rem] rounded-md bg-background-secondary shadow-xl overflow-visible">
                      <ul className="py-1">
                        <li>
                          <Link lang={locale} href={`/about/about-us`} className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('About_Us')}
                          </Link>
                        </li>
                        <li>
                          <Link lang={locale} href={`/about/partners-certifications`}
                                className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                            {t('Partners_Certifications')}
                          </Link>
                        </li>
                        <li>
                          <Link lang={locale} href={`/about/careers`} className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('Careers')}
                          </Link>
                        </li>
                        {/*<li>*/}
                        {/*  <Link lang={locale} href={`/resources/news-media`} className="block px-4 py-2 hover:bg-background"*/}
                        {/*        onClick={() => setDropdownOpen(null)}>*/}
                        {/*    {t('News_Media')}*/}
                        {/*  </Link>*/}
                        {/*</li>*/}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div className="relative dropdown">
                  <button
                    onClick={() => toggleDropdown('solutions')}
                    className="hover:text-secondary focus:outline-none"
                  >
                    {t('Solutions')}
                  </button>
                  {dropdownOpen === 'solutions' && (
                    <div
                      className="absolute z-50 mt-2 min-w-[12rem] rounded-md bg-background-secondary shadow-xl overflow-visible">
                      <ul className="py-1">

                        {/* Core Solutions */}
                        <li className="relative group">
                    <span
                      className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
                      {t('Core_Solutions')}
                      <span className="text-sm text-text-secondary ml-2">›</span>
                    </span>
                          <ul
                            className="absolute top-0 left-full ml-1 hidden group-hover:block w-48 rounded-md bg-background-secondary shadow-lg py-1">
                            <li>
                              <Link lang={locale} href={`/solutions/core-solutions/merchant-solutions`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('Merchant_Solutions')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/core-solutions/omnichannel-solutions`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('Omnichannel_Solutions')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/core-solutions/industries-served`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('Industries_Served')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/core-solutions/how-it-works`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('How_It_Works')}
                              </Link>
                            </li>
                          </ul>
                        </li>

                        {/* Payment Methods */}
                        <li className="relative group">
                          <span
                            className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
                            {t('Payment_Methods')}
                            <span className="text-sm text-text-secondary ml-2">›</span>
                          </span>
                          <ul
                            className="absolute top-0 left-full ml-1 hidden group-hover:block w-48 rounded-md bg-background-secondary shadow-lg py-1">
                            <li>
                              <Link lang={locale} href={`/solutions/payment-methods/card-payment`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('Card_Payment')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/payment-methods/wechat-alipay`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('WeChat_Alipay')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/payment-methods/ecommerce`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('E_Commerce_Payments')}
                              </Link>
                            </li>
                            <li>
                              <Link lang={locale} href={`/solutions/payment-methods/app-payment`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('App_Payment_Acquiring')}
                              </Link>
                            </li>
                          </ul>
                        </li>

                        {/* Enterprise & Custom */}
                        <li className="relative group">
                          <span
                            className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
                            {t('Enterprise')}
                            <span className="text-sm text-text-secondary ml-2">›</span>
                          </span>
                          <ul
                            className="absolute top-0 left-full ml-1 hidden group-hover:block w-48 rounded-md bg-background-secondary shadow-lg py-1">
                            <li>
                              <Link lang={locale} href={`/solutions/enterprise/enterprise-custom`}
                                    className="block px-4 py-2 hover:bg-background"
                                    onClick={() => setDropdownOpen(null)}>
                                {t('Enterprise_Custom_Solutions')}
                              </Link>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div className="relative dropdown">
                  <button
                    onClick={() => toggleDropdown('resources')}
                    className="hover:text-secondary focus:outline-none"
                  >
                    {t('Resources')}
                  </button>
                  {dropdownOpen === 'resources' && (
                    <div
                      className="absolute z-50 mt-2 min-w-[12rem] rounded-md bg-background-secondary shadow-xl overflow-visible">
                      <ul className="py-1">
                        <li>
                          <Link lang={locale} href={`/resources/pos-terminal`}
                                className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('POS_Terminal')}
                          </Link>
                        </li>
                        <li>
                          <Link lang={locale} href={`/resources/case-studies`}
                                className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('Case_Studies')}
                          </Link>
                        </li>
                        <li>
                          <Link lang={locale} href={`/resources/news-media`}
                                className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('News_Media')}
                          </Link>
                        </li>
                        {/*<li>*/}
                        {/*  <Link lang={locale} href={`/resources/news`} className="block px-4 py-2 hover:bg-background"*/}
                        {/*        onClick={() => setDropdownOpen(null)}>*/}
                        {/*    {t('News')}*/}
                        {/*  </Link>*/}
                        {/*</li>*/}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Support Dropdown */}
                <div className="relative dropdown">
                  <button
                    onClick={() => toggleDropdown('support')}
                    className="hover:text-secondary focus:outline-none"
                  >
                    {t('Support')}
                  </button>
                  {dropdownOpen === 'support' && (
                    <div
                      className="absolute z-50 mt-2 min-w-[12rem] rounded-md bg-background-secondary shadow-xl overflow-visible">
                      <ul className="py-1">
                        <li>
                          <Link lang={locale} href={`/support/help-center`}
                                className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('Help_Center')}
                          </Link>
                        </li>
                        {/*<li>*/}
                        {/*  <Link lang={locale} href={`/support/user-agreement`} className="block px-4 py-2 hover:bg-background"*/}
                        {/*        onClick={() => setDropdownOpen(null)}>*/}
                        {/*    {t('User_Agreement')}*/}
                        {/*  </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*  <Link lang={locale} href={`/support/privacy-policy`} className="block px-4 py-2 hover:bg-background"*/}
                        {/*        onClick={() => setDropdownOpen(null)}>*/}
                        {/*    {t('Privacy_Policy')}*/}
                        {/*  </Link>*/}
                        {/*</li>*/}
                        <li>
                          <Link lang={locale} href={`/support/faqs`} className="block px-4 py-2 hover:bg-background"
                                onClick={() => setDropdownOpen(null)}>
                            {t('FAQs')}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link lang={locale} href={`/resources/pricing`} onClick={() => setDropdownOpen(null)}
                      className="hover:text-secondary focus:outline-none">
                  {t('Pricing')}
                </Link>
                <Link lang={locale} href={`/contact`} onClick={() => setDropdownOpen(null)}
                      className="hover:text-secondary focus:outline-none">
                  {t('Contact')}
                </Link>
                <a href="https://dashboard.ams.ucanpay.ca" target="_blank" rel="noopener noreferrer"
                   onClick={() => setDropdownOpen(null)} className="hover:text-secondary focus:outline-none">
                  {t('Signin')}
                </a>
              </nav>
              <div className="flex items-center gap-3">
                <ThemeSwitch />
                <LangSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Slide-out panel */}
        <div
          className="absolute right-0 top-0 h-full w-full bg-background text-text p-6 overflow-y-auto transition-transform duration-300 transform">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">{t('Title')}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-secondary hover:text-primary"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-lg">
            {/* About */}
            <Disclosure>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center py-0 font-semibold">
                    {t('About')}
                    <span>{open ? '−' : '+'}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 space-y-2 text-base">
                    <CloseButton as={Link} href="/about/about-us" onClick={() => setMobileMenuOpen(false)}>
                      {t('About_Us')}
                    </CloseButton>
                    <br />
                    <CloseButton as={Link} href="/about/partners-certifications"
                                 onClick={() => setMobileMenuOpen(false)}>
                      {t('Partners_Certifications')}
                    </CloseButton>
                    <br />
                    <CloseButton as={Link} href="/about/careers" onClick={() => setMobileMenuOpen(false)}>
                      {t('Careers')}
                    </CloseButton>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Solutions */}
            <Disclosure key={pathname}>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center py-0 font-semibold">
                    {t('Solutions')}
                    <span>{open ? '−' : '+'}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 space-y-2 text-base">

                    {/*// CORE SOLUTIONS */}
                    <Disclosure>
                      {({ open, close }) => (
                        <>
                          <Disclosure.Button
                            className="flex items-center justify-between gap-2 py-0 font-semibold w-full">
                            {t('Core_Solutions')}
                            <span className="pr-10">{open ? '−' : '+'}</span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4 space-y-2 text-base">
                            <CloseButton as={Link} href="/solutions/core-solutions/merchant-solutions"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('Merchant_Solutions')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/core-solutions/omnichannel-solutions"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('Omnichannel_Solutions')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/core-solutions/industries-served"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('Industries_Served')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/core-solutions/how-it-works"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('How_It_Works')}
                            </CloseButton>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    {/*// PAYMENT METHODS */}
                    <Disclosure>
                      {({ open, close }) => (
                        <>
                          <Disclosure.Button
                            className="flex items-center justify-between gap-2 py-0 font-semibold w-full">
                            {t('Payment_Methods')}
                            <span className="pr-10">{open ? '−' : '+'}</span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4 space-y-2 text-base">
                            <CloseButton as={Link} href="/solutions/payment-methods/card-payment"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('Card_Payment')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/payment-methods/wechat-alipay"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('WeChat_Alipay')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/payment-methods/ecommerce"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('E_Commerce_Payments')}
                            </CloseButton>
                            <br />
                            <CloseButton as={Link} href="/solutions/payment-methods/app-payment"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('App_Payment_Acquiring')}
                            </CloseButton>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    {/*// ENTERPRISE SOLUTIONS */}
                    <Disclosure>
                      {({ open, close }) => (
                        <>
                          <Disclosure.Button
                            className="flex items-center justify-between gap-2 py-0 font-semibold w-full">
                            {t('Enterprise')}
                            <span className="pr-10">{open ? '−' : '+'}</span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4 space-y-2 text-base">
                            <CloseButton as={Link} href="/solutions/enterprise/enterprise-custom"
                                         onClick={() => setMobileMenuOpen(false)}>
                              {t('Enterprise_Custom_Solutions')}
                            </CloseButton>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Resources */}
            <Disclosure>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center py-0 font-semibold">
                    {t('Resources')}
                    <span>{open ? '−' : '+'}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 space-y-2 text-base">
                    <CloseButton as={Link} href="/resources/pos-terminal" onClick={() => setMobileMenuOpen(false)}>
                      {t('POS_Terminal')}
                    </CloseButton>
                    <br />
                    <CloseButton as={Link} href="/resources/case-studies" onClick={() => setMobileMenuOpen(false)}>
                      {t('Case_Studies')}
                    </CloseButton>
                    <br />
                    <CloseButton as={Link} href="/resources/news-media" onClick={() => setMobileMenuOpen(false)}>
                      {t('News_Media')}
                    </CloseButton>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Support */}
            <Disclosure>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center py-0 font-semibold">
                    {t('Support')}
                    <span>{open ? '−' : '+'}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 space-y-2 text-base">
                    <CloseButton as={Link} href="/support/help-center" onClick={() => setMobileMenuOpen(false)}>
                      {t('Help_Center')}
                    </CloseButton>
                    <br />
                    <CloseButton as={Link} href="/support/faqs" onClick={() => setMobileMenuOpen(false)}>
                      {t('FAQs')}
                    </CloseButton>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Flat Links */}
            <Link onClick={() => setMobileMenuOpen(false)} className="font-semibold"
                  href="/resources/pricing">{t('Pricing')}</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="font-semibold"
                  href="/contact">{t('Contact')}</Link>
            <a className="font-semibold" href="https://dashboard.ams.ucanpay.ca" target="_blank"
               rel="noopener noreferrer">{t('Signin')}</a>
          </nav>
          <div className="mt-6 flex justify-between items-center">
            <ThemeSwitch />
            <LangSwitcher />
          </div>
        </div>
      </div>
    </>
  )
}
