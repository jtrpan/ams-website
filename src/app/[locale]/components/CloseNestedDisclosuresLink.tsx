import { useClose } from '@headlessui/react'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'a'> & {
  LinkComponent: React.ElementType
  href: string
  onClick?: () => void
  children: React.ReactNode
}

export function CloseNestedDisclosuresLink({ LinkComponent, href, children, onClick, ...props }: Props) {
  const closeInner = useClose()
  return (
    <InnerCloseWrapper
      LinkComponent={LinkComponent}
      href={href}
      onClick={onClick}
      closeInner={closeInner}
      {...props}
    >
      {children}
    </InnerCloseWrapper>
  )
}

function InnerCloseWrapper({ LinkComponent, href, children, onClick, closeInner, ...props }: any) {
  const closeOuter = useClose()

  return (
    <LinkComponent
      href={href}
      onClick={(e: React.MouseEvent) => {
        onClick?.(e)
        closeInner()
        closeOuter()
      }}
      {...props}
    >
      {children}
    </LinkComponent>
  )
}
