// 'use client'
// import { capitalize } from '@/lib/utils'
// import Link from 'next/link'
// import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
// import React, { useState } from 'react'
// import { FiGlobe } from 'react-icons/fi'
// import Button from './Button'
//
// const LangSwitcher: React.FC = () => {
//   interface Option {
//     country: string
//     code: string
//   }
//
//   const pathname = usePathname()
//   const urlSegments = useSelectedLayoutSegments()
//
//   const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
//   const options: Option[] = [
//     { country: 'English', code: 'en' }, // Native name is the same
//     { country: 'Français', code: 'fr' },
//     { country: '中文', code: 'cn' }
//     // { country: 'Español', code: 'es' },
//     // { country: 'Русский', code: 'ru' },
//     // { country: 'Deutsch', code: 'de' },
//     // { country: '日本語', code: 'ja' },
//     // { country: 'العربية', code: 'ar' },
//     // { country: 'فارسی', code: 'fa' }
//   ]
//
//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative">
//         <Button
//           className="text-destructive inline-flex w-full items-center justify-between gap-3"
//           size="small"
//           onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
//           onBlur={() => setIsOptionsExpanded(false)}
//         >
//           Language
//           <FiGlobe />
//         </Button>
//         {isOptionsExpanded && (
//           <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg">
//             <div
//               className="py-1"
//               role="menu"
//               aria-orientation="vertical"
//               aria-labelledby="options-menu"
//             >
//               {options.map(lang => {
//                 return (
//                   <Link
//                     key={lang.code}
//                     href={`/${lang.code}/${urlSegments.join('/')}`}
//                   >
//                     <button
//                       lang={lang.code}
//                       onMouseDown={e => {
//                         e.preventDefault()
//                       }}
//                       className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
//                         pathname === `/${lang.code}`
//                           ? 'bg-selected text-primary hover:bg-selected'
//                           : 'text-secondary'
//                       }`}
//                     >
//                       {capitalize(lang.country)}
//                     </button>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
//
// export default LangSwitcher


'use client'

import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const LangSwitcher = () => {
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'cn', label: '中' }
  ]

  return (
    <div className="inline-flex rounded-lg bg-gray-200 dark:bg-gray-700 p-1">
      {languages.map(lang => {
        const isActive = pathname.startsWith(`/${lang.code}`)
        return (
          <Link
            key={lang.code}
            href={`/${lang.code}/${urlSegments.join('/')}`}
            className={clsx(
              'px-3 py-1 text-sm font-medium rounded-md transition',
              isActive
                ? 'bg-primary text-white dark:bg-primary-dark'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            )}
          >
            {lang.label}
          </Link>
        )
      })}
    </div>
  )
}
export default LangSwitcher

// import { useRouter } from 'next/navigation'
// import { FiGlobe } from 'react-icons/fi'
// import { Tooltip } from 'react-tooltip'
//
// export default function LangSwitcherCompact() {
//   const router = useRouter()
//
//   const switchLang = (code: string) => {
//     // Implement redirection logic if needed
//     router.push(`/${code}`)
//   }
//
//   return (
//     <div className="relative group">
//       <button
//         className="p-2 text-gray-500 hover:text-primary"
//         onClick={() => switchLang('en')} // Default fallback
//         aria-label="Change language"
//       >
//         <FiGlobe className="w-5 h-5" />
//       </button>
//       <div className="absolute hidden group-hover:flex flex-col top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden">
//         {['en', 'fr', 'cn'].map(code => (
//           <button
//             key={code}
//             onClick={() => switchLang(code)}
//             className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             {code.toUpperCase()}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }
