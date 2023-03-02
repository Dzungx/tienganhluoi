import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '8b7cfdd26f224c1da8b7c5fbb80114f0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Tiếng Anh Lười',
  domain: 'tienganhluoi.com',
  author: 'Dung Nguyen Anh',

  // open graph metadata (optional)
  description: 'Giúp bạn học thành thạo tiếng Anh với mức chi phí từ 0đ tới dưới 1,000đ / ngày. Lười cũng sẽ học được',

  // social usernames (optional)
  // twitter: 'anhvillas',//
  // github: 'transitive-bullshit',//
  // linkedin: 'fisch2',//
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@tienganhluoi', 

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'//
  navigationStyle: 'custom',
  navigationLinks: [
     {
       title: 'Blog',
       pageId: '335f8f3f53d441bba2fa13f0e2e0563a'
     },
     {
       title: 'Giới thiệu',
       pageId: '576d253a332a44c5a72d122c997c64aa'
     },
     {
       title: 'Liên hệ',
       pageId: '5602a693fedd4a9f9c08110a50f1d33a'
     }
   ]
})
