import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '403d1c27410c4594b9e08c18fec8f2d6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "73fff1ec-3185-4e4f-9433-65ce77bea0c3",

  // basic site info (required)
  name: 'D_super 的博客',
  domain: 'https://dsuper.eu.org',
  author: 'D_super',

  // open graph metadata (optional)
  description: '生活是一场旅行',

  // social usernames (optional)
  twitter: 'D_superheros',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy

  // Utteranc.es comments via GitHub issue comments (optional)
  //utterancesGitHubRepo: "SkysCrystal/SWIN-Comment-System",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides:   {
    '/history': '2dfcb7eb92a54b3cb997d17a3aadb42e',
    '/about': '76d207ffc05f4ef2bfff4747d1c55063'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '76d207ffc05f4ef2bfff4747d1c55063'
    }
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})
