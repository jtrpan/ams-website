'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LogoIcon1 from '../../icons/logo1'
import LogoIcon2 from '../../icons/logo2'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('headers')
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5">
      <Link lang={locale} href="/">
        <div className="flex flex-row items-center">
          <div className="mb-2 h-14 w-14">
            <LogoIcon />
          </div>
          <strong className="mx-2 select-none">UCanPay AMS</strong>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <nav className="mr-10 inline-flex gap-5">
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/solutions`}>
            {t('Solutions')}
          </Link>
          <Link lang={locale} href={`/resources`}>
            {t('Resources')}
          </Link>
          <Link lang={locale} href={`/support`}>
            {t('Support')}
          </Link>
          <Link lang={locale} href={`/contact`}>
            {t('Contact')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href="https://www.ucanpay.ca"
          target="_blank"
        >
          <div className="size-8">
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
