import { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

export const FooterSection = (
  { title, children }: FooterSectionProps
) => {
  return (
    <>
      <div>
        <div className='text-md pb-2'>
          {title}
        </div>
        <div className='text-sm'>
          {children}
        </div>
      </div>

    </>
  )
}
