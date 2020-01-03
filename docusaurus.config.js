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
          "img/logo.png"
      },
      links: [

        { to: "docs/intro", label: "Kurs", position: "left" },
        {
          href: "https://github.com/elegal-ev",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://elegal-göttingen.de/",
          label: "Verein",
          position: "left"
        },
        {
          href: "https://elegal-göttingen.de/team/",
          label: "Mitglied werden",
          position: "left"
        },
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Code Camp",
          items: [
            {
              label: "Intro",
              to: "docs/intro"
            },
            {
              label: "Grundlagen",
              to: "docs/chapter-one"
            },
            {
              label: "Funktionen und Scope",
              to: "docs/chapter-two"
            }, {
              label: "Wahrheitswerte, Kontrollstrukturen und Schleifen",
              to: "docs/chapter-tree"
            },
            {
              label: "Listen",
              to: "docs/chapter-four"
            },
            {
              label: "Files, Strings und Dictionaries",
              to: "docs/chapter-five"
            },
            {
              label: "Klassen und Module",
              to: "docs/chapter-six"
            },
            {
              label: "Das Projekt",
              to: "docs/project"
            },
            {
              label: "Entwicklungsumgebung einrichten",
              to: "docs/python-env"
            },
          ]
        },
        {
          title: "Verein",
          items: [
            {
              label: "Homepage",
              href: "https://elegal-göttingen.de/"
            },
            {
              label: "Workshop",
              href: "https://elegal-göttingen.de/workshop"
            },
            {
              label: "Events",
              href: "https://elegal-göttingen.de/events"
            },
            {
              label: "Team",
              href: "https://elegal-göttingen.de/team"
            },
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "LinkedIn",
              to: "https://de.linkedin.com/company/elegalgoettingen"
            },
            {
              label: "Instagram",
              to: "/"
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/eLegalGoettingen/"
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
  plugins: ['@docusaurus/plugin-ideal-image'],
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
