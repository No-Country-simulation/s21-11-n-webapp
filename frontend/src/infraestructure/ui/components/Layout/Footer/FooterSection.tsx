import { ReactNode } from 'react';

interface FooterSectionProps {
  title?: string;
  children: ReactNode;
}

export const FooterSection = (
  { title, children }: FooterSectionProps
) => {
  return (
    <>
      <div>
        {
          title
          ? 
          <div className='text-md pb-2 text-prime-500'>
            {title}
          </div>
          : ''
        }
        <div className='text-sm'>
          {children}
        </div>
      </div>

    </>
  )
}
