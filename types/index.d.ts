export interface headerLink {
  href: string
  title: string
}
export type headerLinks = headerLink[]

export interface Post {
  title: string
  description: string
  imgSrc: string
  href: string
}
export type Posts = Post[]

export interface MetaData {
  title: string
  author: string
  headerTitle: string
  description: string
  language: string
  theme: string
  siteUrl: string
  siteRepo: string
  siteLogo: string
  image: string
  socialBanner: string
  email: string
  github: string
  linkedin: string
  locale: string
  analytics: {
    plausibleDataDomain: string
    simpleAnalytics: boolean
    umamiWebsiteId: string
    googleAnalyticsId: string
  }
  newsletter: {
    provider: string
  }
}