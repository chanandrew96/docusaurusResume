const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Andrew Chan's Site",
  tagline: "This site is built using Dinosaurs! Dinosaurs are cool!",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Andrew Chan", // Usually your GitHub org/user name.
  projectName: "docusaurusResume", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Andrew Chan's Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          label: "About Me",
          position: "left", // or 'right'
          items: [
            {
              label: "About Me",
              href: "/docs/about-me/about-me"
            },
            {
              label: "Skill Set",
              href: "/docs/about-me/skill-set"
            },
            {
              label: "Project Experience",
              href: "/docs/project-experience/n0-projects"
            }
          ]
        },
        {
          label: "Project Experience",
          position: "left",
          items: [
            {
              label: "BoC",
              href: "/docs/project-experience/boc"
              // doc: "boc"
            }
          ]
        },
        { to: "/contacts", label: "Contacts", position: "left" },
        {
          href: "https://github.com/chanandrew96",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Me",
          items: [
            {
              label: "About Me",
              to: "/docs/about-me/about-me"
            },
            {
              label: "Project",
              to: "/docs/project-experience/n0-projects"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/chanandrew96"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
