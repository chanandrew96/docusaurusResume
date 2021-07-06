/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  // tutorialSidebar: {
  //   "About Me": ["about-me", "skill-set"],
  //   Project: ["projects", "boc", "ies", "asl"]
  // }

  // mySidebar: [
  //   {
  //     type: "ref",
  //     id: "project-experience/boc" // Document id (string).
  //   },
  //   {
  //     type: "ref",
  //     id: "project-experience/ies" // Document id (string).
  //   }
  // ]
};
