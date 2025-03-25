import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/C-programning/blog',
    component: ComponentCreator('/C-programning/blog', '317'),
    exact: true
  },
  {
    path: '/C-programning/blog/archive',
    component: ComponentCreator('/C-programning/blog/archive', 'e7a'),
    exact: true
  },
  {
    path: '/C-programning/blog/authors',
    component: ComponentCreator('/C-programning/blog/authors', '935'),
    exact: true
  },
  {
    path: '/C-programning/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/C-programning/blog/authors/all-sebastien-lorber-articles', '30a'),
    exact: true
  },
  {
    path: '/C-programning/blog/authors/yangshun',
    component: ComponentCreator('/C-programning/blog/authors/yangshun', '6c3'),
    exact: true
  },
  {
    path: '/C-programning/blog/first-blog-post',
    component: ComponentCreator('/C-programning/blog/first-blog-post', 'ef9'),
    exact: true
  },
  {
    path: '/C-programning/blog/long-blog-post',
    component: ComponentCreator('/C-programning/blog/long-blog-post', 'c4d'),
    exact: true
  },
  {
    path: '/C-programning/blog/mdx-blog-post',
    component: ComponentCreator('/C-programning/blog/mdx-blog-post', 'ebc'),
    exact: true
  },
  {
    path: '/C-programning/blog/tags',
    component: ComponentCreator('/C-programning/blog/tags', 'f75'),
    exact: true
  },
  {
    path: '/C-programning/blog/tags/docusaurus',
    component: ComponentCreator('/C-programning/blog/tags/docusaurus', '5aa'),
    exact: true
  },
  {
    path: '/C-programning/blog/tags/facebook',
    component: ComponentCreator('/C-programning/blog/tags/facebook', 'c0d'),
    exact: true
  },
  {
    path: '/C-programning/blog/tags/hello',
    component: ComponentCreator('/C-programning/blog/tags/hello', 'b50'),
    exact: true
  },
  {
    path: '/C-programning/blog/tags/hola',
    component: ComponentCreator('/C-programning/blog/tags/hola', 'eae'),
    exact: true
  },
  {
    path: '/C-programning/blog/welcome',
    component: ComponentCreator('/C-programning/blog/welcome', '0bc'),
    exact: true
  },
  {
    path: '/C-programning/markdown-page',
    component: ComponentCreator('/C-programning/markdown-page', '5b5'),
    exact: true
  },
  {
    path: '/C-programning/docs',
    component: ComponentCreator('/C-programning/docs', 'f92'),
    routes: [
      {
        path: '/C-programning/docs',
        component: ComponentCreator('/C-programning/docs', 'd01'),
        routes: [
          {
            path: '/C-programning/docs',
            component: ComponentCreator('/C-programning/docs', '9f6'),
            routes: [
              {
                path: '/C-programning/docs/category/get-started-with-c-',
                component: ComponentCreator('/C-programning/docs/category/get-started-with-c-', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0002 Introduction C Programming',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0002 Introduction C Programming', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0003 Levels of Programming Languages',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0003 Levels of Programming Languages', '342'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0004 Language processors',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0004 Language processors', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0005 Flowchart, Pseudocode and Algorithm',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0005 Flowchart, Pseudocode and Algorithm', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0006 Frameworks and Libraries',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0006 Frameworks and Libraries', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0007 Compilation Process in C',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0007 Compilation Process in C', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0008 Setup Environment',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0008 Setup Environment', '1c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0009 Get Start with C Programming',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0009 Get Start with C Programming', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/0010 Coding Styles and Formatting',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/0010 Coding Styles and Formatting', 'c30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/EP-0001-Getting-Started-Programming/What-is-programming',
                component: ComponentCreator('/C-programning/docs/EP-0001-Getting-Started-Programming/What-is-programming', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/C-programning/docs/intro',
                component: ComponentCreator('/C-programning/docs/intro', 'fd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/C-programning/',
    component: ComponentCreator('/C-programning/', '280'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
