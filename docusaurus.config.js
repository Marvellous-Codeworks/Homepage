// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Marvellous Codeworks',
  tagline: 'Documentation, FAQs, and changelogs for Marvellous Codeworks projects.',
  favicon: 'img/MarvellousCodeworks_Logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kb.marvellouscode.works',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Marvellous-Codeworks',
  // projectName: 'MarvellousSuspender',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Blog - Marvellous Codeworks',
          blogDescription: 'Updates about The Marvellous Suspender project',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/MarvellousCodeworks_Logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Marvellous Codeworks',
        logo: {
          alt: 'Marvellous Codeworks Logo',
          src: 'img/MarvellousCodeworks_Logo.png',
          href: '/docs/intro',
        },
        items: [
          {
            type: 'html',
            value: '<span class="navbar-separator" aria-hidden="true"></span>',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'About',
          },
          {
            href: '/docs/download',
            label: 'Download',
          },
          {
            type: 'html',
            value: '<span class="navbar-separator" aria-hidden="true"></span>',
            position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Marvellous-Codeworks',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // {
          //   href: '/docs/download',
          //   position: 'right',
          //   className: 'header-chrome-link',
          //   'aria-label': 'Chrome Web Store',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Marvellous Codeworks',
            items: [
              {
                label: 'Who We Are',
                to: '/docs/intro',
              },
              {
                label: 'Contributing',
                to: '/docs/intro#contributing-',
              },
              {
                label: 'License',
                to: '/docs/intro#license-',
              },
              {
                label: 'Something Missing?',
                to: '/docs/intro#something-missing-%EF%B8%8F%EF%B8%8F',
              },
              {
                label: 'Support',
                to: '/docs/intro#support-',
              },
            ],
          },
          {
            title: 'The Great-er Tab Discarder (TGD)',
            items: [
              {
                label: 'Download TGD',
                to: '/docs/download#the-great-er-tab-discarder',
              },
              {
                label: 'Changelog',
                to: '/docs/TGD/changelog',
              },
              {
                label: 'FAQ',
                href: '/docs/TGD/faq',
              },
              {
                label: 'Open an issue',
                href: 'https://github.com/rkodey/the-great-er-discarder-er/issues/new',
              },
            ],
          },
          {
            title: 'The Marvellous Suspender (TMS)',
            items: [
              {
                label: 'Download TMS',
                to: '/docs/download#the-marvellous-suspender',
              },
              {
                label: 'FAQ',
                href: '/docs/TMS/faq',
              },
              {
                label: 'Open an issue',
                href: 'https://github.com/gioxx/MarvellousSuspender/issues/new',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} The Marvellous Suspender.`,
        copyright: `<div style="padding-top: 18px;padding-bottom: 9px; text-align: right; font-size: 0.8em;">
        <p>Copyright © ${new Date().getFullYear()} Marvellous Codeworks.<br />
        All trademarks mentioned belong to their respective owners; third- party trademarks, product names, trade names, corporate names and companies mentioned may be trademarks of their respective owners or registered trademarks of other companies and have been used for explanatory purposes only and for the benefit of the owner, without any intention of infringing on existing copyright laws.</p>
        <p>Lovingly developed by the usually-on-vacation brain cell of <a href="https://gfsolone.com/#seguimi" target="_blank" rel="noopener noreferrer">Gioxx</a> ❤️ — Flawed by design, just like my code 🚮</p>
        </div>`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
