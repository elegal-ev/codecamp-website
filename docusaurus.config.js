/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Legal Code Camp",
  tagline: "Eine Veranstaltung des elegal Göttingen e.V.",
  url: "https://elegal-ev.github.io/codecamp-website/",
  baseUrl: "/codecamp-website/",
  favicon: "img/favicon.ico",
  organizationName: "elegal-ev", // Usually your GitHub org/user name.
  projectName: "codecamp-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "elegal Göttingen e.V.",
      logo: {
        alt: "elegal Göttingen e.V. Logo",
        src:
          "https://elegal-göttingen.de/wp-content/uploads/2019/08/output-onlinepngtools-e1566832737451-300x90.png"
      },
      links: [
        { to: "docs/doc1", label: "Kurs", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/doc1"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      logo: {
        alt: "Logo",
        src:
          "https://elegal-göttingen.de/wp-content/uploads/2019/08/output-onlinepngtools-e1566832737451-300x90.png",
        href: "https://xn--elegal-gttingen-gtb.de/"
      },
      copyright: `Copyright © ${new Date().getFullYear()} - Lars Quentin, Anton Wietzke, Julia Held und Valerius Mattfeld.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
