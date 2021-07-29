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
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark"
    },
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
              href: "/docs/about-me/aboutMe"
            },
            {
              label: "Skill Set",
              href: "/docs/about-me/skillSet"
            },
            {
              label: "Education & Certifications",
              href: "/docs/education-certifications/education"
            }
            // {
            //   label: "Project Experience",
            //   href: "/docs/project-experience/n0-projects"
            // }
          ]
        },
        {
          label: "Project Experience",
          position: "left",
          items: [
            {
              label: "Projects Summary List",
              href: "/docs/project-experience/projects"
            },
            {
              label: "Bank of China",
              href: "/docs/project-experience/boc"
              // doc: "boc"
            },
            {
              label: "Integrated Enterprise Solutions Ltd.",
              href: "/docs/project-experience/ies"
            },
            {
              label: "Automated Systems (H.K.) Limited",
              href: "/docs/project-experience/asl"
              // doc: "boc"
            }
          ]
        },
        {
          label: "Learning Path",
          position: "left",
          items: [
            {
              label: "API Testing",
              href: "/docs/learning-path/testing-tools/api-testing"
            },
            {
              label: "JavaScript Testing",
              href: "/docs/learning-path/testing-tools/js-testing"
            }
          ]
        },
        {
          type: "doc",
          docId: "contacts",
          position: "left",
          label: "Contacts"
        },
        // { to: "/docs/contacts", label: "Contacts", position: "left" },
        {
          href: "https://github.com/chanandrew96",
          label: "GitHub",
          position: "right"
        },
        {
          type: "search",
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
              to: "/docs/about-me/aboutMe"
            },
            {
              label: "Skill Set",
              to: "/docs/about-me/skillSet"
            },
            {
              label: "Project",
              to: "/docs/project-experience/projects"
            },
            {
              label: "Education & Certifications",
              to: "/docs/education-certifications/education"
            }
          ]
        },
        {
          title: "Learning Path",
          items: [
            {
              label: "API Testing",
              to: "/docs/learning-path/testing-tools/api-testing"
            },
            {
              label: "JavaScript Testing",
              href: "/docs/learning-path/testing-tools/js-testing"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            {
              label: "Contact",
              to: "/docs/contacts"
            }
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus"
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus"
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus"
            // },
            // {
            //   label: "GitHub",
            //   href: "https://github.com/chanandrew96"
            // }
          ]
        }
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog"
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/chanandrew96"
        //     }
        //   ]
        // }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrew Chan, Built with Docusaurus.`
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
