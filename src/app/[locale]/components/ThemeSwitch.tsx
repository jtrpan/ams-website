// 'use client'
// import { capitalize } from '@/lib/utils'
// import { useTranslations } from 'next-intl'
// import { useTheme } from 'next-themes'
// import { useEffect, useRef, useState } from 'react'
// import { FiSun } from 'react-icons/fi'
// import { useOnClickOutside } from 'usehooks-ts'
// import Button from './Button'
//
// export default function ThemeSwitch() {
//   const t = useTranslations('')
//   const [mounted, setMounted] = useState(false)
//   const [isOpen, setIsOpen] = useState(false) // New state to control dropdown visibility
//   const { setTheme, resolvedTheme, themes, theme } = useTheme()
//   const ref = useRef(null)
//   useEffect(() => setMounted(true), [])
//   useOnClickOutside(ref, () => setIsOpen(false))
//   if (!mounted)
//     return (
//       <Button
//         size='small'
//         type='button'
//         className='text-destructive inline-flex w-fit min-w-[95px] items-center justify-between gap-3'
//         id='options-menu'
//         aria-expanded={isOpen}
//         onClick={() => {}}
//       >
//         <span className='ml-2'>{t('Theme')}</span>
//         <FiSun />
//       </Button>
//     )
//
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen)
//   }
//
//   return (
//     <div ref={ref} className='relative inline-block text-left'>
//       <Button
//         size='small'
//         type='button'
//         className='text-destructive inline-flex w-full min-w-[95px] items-center justify-between gap-3'
//         id='options-menu'
//         aria-expanded={isOpen}
//         onClick={toggleDropdown}
//       >
//         <span className='ml-2'>{t('Theme')}</span>
//         <FiSun />
//       </Button>
//       {isOpen && (
//         <div className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'>
//           <div
//             className='py-1'
//             role='menu'
//             aria-orientation='vertical'
//             aria-labelledby='options-menu'
//           >
//             {themes.map(themeItem => {
//               return (
//                 <button
//                   key={themeItem}
//                   onClick={() => {
//                     setTheme(themeItem)
//                     setIsOpen(false)
//                   }}
//                   className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
//                     themeItem === theme
//                       ? 'bg-selected text-primary hover:bg-selected'
//                       : 'text-secondary'
//                   }`}
//                 >
//                   {capitalize(themeItem)}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="flex items-center">
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <div className="w-full h-full bg-gray-300 rounded-full dark:bg-gray-600 peer-checked:bg-gray-600 transition-colors duration-300" />
        <div
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center text-[14px] text-yellow-400 dark:text-gray-800
            transition-all duration-300 peer-checked:translate-x-6 peer-checked:text-gray-800"
        >
          {isDark ? <FiMoon /> : <FiSun />}
        </div>
      </label>
    </div>
  )
}
