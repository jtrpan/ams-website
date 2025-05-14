'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState, useEffect } from 'react'
import LogoIcon1 from '../../icons/logo1'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

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

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5">
      <Link lang={locale} href="/">
        <div className="flex flex-row items-center">
          <div className="flex items-center h-14 w-14"> {/* Ensure logo is centered */}
            <LogoIcon1 />
          </div>
          <strong className="mx-2 select-none">UCanPay AMS</strong>
        </div>
      </Link>

      <div className="flex flex-row items-center gap-3">
        <nav className="mr-10 inline-flex gap-5">

          {/* About Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown('about')}
              className="hover:text-primary focus:outline-none"
            >
              {t('About')}
            </button>
            {dropdownOpen === 'about' && (
              <div className="absolute z-20 mt-2 w-48 rounded-md bg-background-secondary shadow-lg">
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
              className="hover:text-primary focus:outline-none"
            >
              {t('Solutions')}
            </button>
            {dropdownOpen === 'solutions' && (
              <div className="absolute z-20 mt-2 w-48 rounded-md bg-background-secondary shadow-lg">
                <ul className="py-1">

                  {/* Core Solutions */}
                  <li className="relative group">
                    <span className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
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
                    <span className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
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
                    <span className="block px-4 py-2 hover:bg-background cursor-default flex justify-between items-center">
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
              className="hover:text-primary focus:outline-none"
            >
              {t('Resources')}
            </button>
            {dropdownOpen === 'resources' && (
              <div className="absolute z-20 mt-2 w-48 rounded-md bg-background-secondary shadow-lg">
                <ul className="py-1">
                  <li>
                    <Link lang={locale} href={`/resources/case-studies`} className="block px-4 py-2 hover:bg-background"
                          onClick={() => setDropdownOpen(null)}>
                      {t('Case_Studies')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/resources/news-media`} className="block px-4 py-2 hover:bg-background"
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
              className="hover:text-primary focus:outline-none"
            >
              {t('Support')}
            </button>
            {dropdownOpen === 'support' && (
              <div className="absolute z-20 mt-2 w-48 rounded-md bg-background-secondary shadow-lg">
                <ul className="py-1">
                  <li>
                    <Link lang={locale} href={`/support/help-center`} className="block px-4 py-2 hover:bg-background"
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
          <Link lang={locale} href={`/resources/pricing`} onClick={() => setDropdownOpen(null)}>
            {t('Pricing')}
          </Link>
          <Link lang={locale} href={`/contact`} onClick={() => setDropdownOpen(null)}>
            {t('Contact')}
          </Link>
          <a href="https://dashboard.ams.ucanpay.ca" target="_blank" rel="noopener noreferrer" onClick={() => setDropdownOpen(null)}>
            {t('Signin')}
          </a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
