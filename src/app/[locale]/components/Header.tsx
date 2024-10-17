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
                    <Link lang={locale} href={`/about/about-us`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('About_Us')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/about/partners-certifications`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Partners_Certifications')}
                    </Link>
                  </li>
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
                  <li>
                    <Link lang={locale} href={`/solutions/merchant-solutions`}
                          className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Merchant_Solutions')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/solutions/omnichannel-solutions`}
                          className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Omnichannel_Solutions')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/solutions/industries-served`}
                          className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Industries_Served')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/solutions/how-it-works`}
                          className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('How_It_Works')}
                    </Link>
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
                    <Link lang={locale} href={`/resources/case-studies`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Case_Studies')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/resources/news`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('News')}
                    </Link>
                  </li>
                  <li>
                    <Link lang={locale} href={`/resources/faqs`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('FAQs')}
                    </Link>
                  </li>
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
                    <Link lang={locale} href={`/support/help-center`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Help_Center')}
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link lang={locale} href={`/support/contact-support`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>*/}
                  {/*    {t('Contact_Support')}*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link lang={locale} href={`/support/pricing`} className="block px-4 py-2 hover:bg-background" onClick={() => setDropdownOpen(null)}>
                      {t('Pricing')}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link lang={locale} href={`/contact`} onClick={() => setDropdownOpen(null)}>
            {t('Contact')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
