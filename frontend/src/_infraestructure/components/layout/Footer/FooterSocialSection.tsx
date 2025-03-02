import { FooterItem } from './FooterItem'

export const FooterSocialSection = () => {
  return (
    <>
      <FooterItem
        icon='mdi:facebook'
        content='Facebook'
        externalNavigationTo='https://www.facebook.com'
      />
      <FooterItem
        icon='mdi:instagram'
        content='Instagram'
        externalNavigationTo='https://www.instagram.com'
      />
      <FooterItem
        icon='line-md:twitter-x'
        content='X'
        externalNavigationTo='https://www.x.com'
      />
    </>
  )
}
