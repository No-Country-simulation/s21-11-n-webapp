import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router';

type FooterItemValidProps =
  | {
    content: string; icon?: string; internalNavigationTo: string; externalNavigationTo?: never
  }
  | {
    content: string; icon?: string; internalNavigationTo?: never; externalNavigationTo: string
  }
  | {
    content: string; icon?: string; internalNavigationTo?: never; externalNavigationTo?: never
  };


export const FooterItem = (
  { content, icon, externalNavigationTo, internalNavigationTo }: FooterItemValidProps
) => {
  const navigate = useNavigate();

  const onClickFooterItem = () => {
    if (internalNavigationTo) navigate(internalNavigationTo);
    if (externalNavigationTo) window.open(externalNavigationTo, '_blank');
  }

  return (
    <>
      <div className='flex items-center pb-0.5' onClick={onClickFooterItem}>
        {
          icon ? <div className='pr-2 flex items-center'><Icon icon={icon} /></div> : ''
        }
        <div>
          {content}
        </div>
      </div>
    </>
  )
}
