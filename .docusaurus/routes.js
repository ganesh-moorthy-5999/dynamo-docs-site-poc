import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dynamo-docs-site-poc/markdown-page',
    component: ComponentCreator('/dynamo-docs-site-poc/markdown-page', '68b'),
    exact: true
  },
  {
    path: '/dynamo-docs-site-poc/search',
    component: ComponentCreator('/dynamo-docs-site-poc/search', 'b8b'),
    exact: true
  },
  {
    path: '/dynamo-docs-site-poc/docs',
    component: ComponentCreator('/dynamo-docs-site-poc/docs', '150'),
    routes: [
      {
        path: '/dynamo-docs-site-poc/docs',
        component: ComponentCreator('/dynamo-docs-site-poc/docs', 'b7b'),
        routes: [
          {
            path: '/dynamo-docs-site-poc/docs',
            component: ComponentCreator('/dynamo-docs-site-poc/docs', '71c'),
            routes: [
              {
                path: '/dynamo-docs-site-poc/docs/category/dynamo-framework',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/category/dynamo-framework', 'd70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/category/dynamo-templates',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/category/dynamo-templates', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo AI Module Documentation',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo AI Module Documentation', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Auth Module',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Auth Module', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Docs with Spring Boot using CommonMark',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Docs with Spring Boot using CommonMark', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Form Builder Documentation',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Form Builder Documentation', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Generics CRUD Module Documentation (1)',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Generics CRUD Module Documentation (1)', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Image_ Image Size Conversion Using Imgscalr',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Image_ Image Size Conversion Using Imgscalr', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Utils Module Documentation',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo Utils Module Documentation', '52e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo WorkFlow Documentation',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/Dynamo WorkFlow Documentation', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-framework/User Management with AWS Cognito - Spring Boot Documentation',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-framework/User Management with AWS Cognito - Spring Boot Documentation', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-templates/Dynamo Forms Template Setup Guide',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-templates/Dynamo Forms Template Setup Guide', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/dynamo-templates/Dynamo Pages Template Setup Guide',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/dynamo-templates/Dynamo Pages Template Setup Guide', '5c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dynamo-docs-site-poc/docs/intro',
                component: ComponentCreator('/dynamo-docs-site-poc/docs/intro', '6e2'),
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
    path: '/dynamo-docs-site-poc/',
    component: ComponentCreator('/dynamo-docs-site-poc/', 'd4a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
