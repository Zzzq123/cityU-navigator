// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CityU 手册',
  tagline: 'Your Compass to CityU Success',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://penjc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cityU-navigator',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'penjc', // Usually your GitHub org/user name.
  projectName: 'cityU-navigator', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "fr" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      // 'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './courseSidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/penjc/cityU-navigator/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/penjc/cityU-navigator/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
          path: 'src/pages',
          // editUrl:'',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      // TODO: social-card
      // image: 'img/social-card.jpg',
      metadata: [
        {name: 'google-site-verification', content: 'AUpZDRdVtmdoR8Q35bcYZ3dn_qAduJvQUQD4pSS5aMQ'},
        {name: 'msvalidate.01', content: '645627EF454E2562A60001314F5C1819'},
        {name: 'keywords', content: 'CityU 手册, Course, Information, University, Education'},
        {name: 'description', content: 'CityU 手册: Your ultimate guide to navigate courses at CityU.'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'CityU 手册'},
        {name: 'twitter:description', content: 'Your ultimate guide to navigate courses at CityU.'},
        // { name: 'twitter:image', content: '/img/cityu-social-card.png' }, // 确保图片路径正确
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light', // 默认亮色模式
        disableSwitch: false, // 是否允许切换深色模式
        respectPrefersColorScheme: true, // 是否尊重用户的操作系统设置
      },
      // 导航栏
      navbar: {
        title: 'CityU 手册',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          className: 'navbar-icon',
        },
        items: [
          {
            to: '/start',
            label: '开始探索',
            position: 'left',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'course',
            label: '课程指南',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'welcome',
            label: '初见城大',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'career',
            label: '职业启航',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'faq',
            label: '常见问题',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/penjc/cityU-navigator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: '探索',
            items: [
              { label: '首页', to: '/' },
              { label: '快速开始', to: '/start' },
              // { label: '关于我们', to: '/about' },
            ],
          },
          {
            title: '资源',
            items: [
              { label: '城大官网', href: 'https://www.cityu.edu.hk/' },
              { label: '图书馆', href: 'https://www.cityu.edu.hk/lib/' },
              { label: 'AIMS', href: 'https://banweb.cityu.edu.hk/' },
              { label: 'Canvas', href: 'https://canvas.cityu.edu.hk/' },
            ],
          },
          {
            title: '参与',
            items: [
              {
                label: '贡献指南',
                href: '/contributing',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/penjc/cityU-navigator',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} CityU 手册.`,
      },
      // 搜索
      algolia: {
        appId: 'UPYPM5BQ76',
        apiKey: '6cf5858fef7de9367d8ef73f722b371e',
        indexName: 'penjcio',
        contextualSearch: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 通知栏
      announcementBar: {
        id: 'star_support', // 一个唯一的 ID，用于控制显示状态
        content: `
      <span class="gradient-text">
        ⭐️ 如果本站能帮助到你，欢迎点一个 Star 支持作者
      </span>
      <a href="https://github.com/penjc/cityU-navigator" target="_blank" class="specific-github-link">GitHub</a>
  `,
        backgroundColor: '#fdf8f4', // 背景色
        textColor: '#000', // 文字颜色可以忽略，因为会被渐变覆盖
        isCloseable: false, // 是否允许关闭通知栏
      },
    },
  headTags: [
    // 添加 <link> 标签用于预连接优化
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com', // 示例，预加载 Google Fonts
      },
    },
    // 添加 JSON-LD 结构化数据
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'EducationalOrganization',
        name: 'CityU Navigator',
        url: 'https://penjc.github.io/cityU-navigator',
        logo: 'https://penjc.github.io/cityU-navigator/img/logo.png', // 替换为实际 LOGO 路径
        description: 'Your ultimate guide to navigate computer science courses at CityU.',
      }),
    },
  ],
};
export default config;
