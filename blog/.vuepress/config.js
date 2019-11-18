module.exports = {
  title: '博客乐园',
  description: '开发者的博客乐园',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  base: "/myBlogs/",
    themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
     tags: "/tags",
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '博客',
        link: '/',
      },
      {
        text: '分类',
        link: '/tag/',
      },
      {
        text: '个人中心',
        link: '/myInfos/',
      },
    ],
    sidebarDepth: 2,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/shilili0',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2019-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
