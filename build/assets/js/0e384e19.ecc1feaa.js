"use strict";(self.webpackChunkdynamo=self.webpackChunkdynamo||[]).push([[976],{619:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var d=i(4848),r=i(8453);const s={},t="Overview",o={id:"intro",title:"Overview",description:"Getting Started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/dynamo-docs-site-poc/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamo Pages Template Setup Guide",permalink:"/dynamo-docs-site-poc/docs/dynamo-templates/Dynamo Pages Template Setup Guide"}},l={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Libraries Included",id:"libraries-included",level:3},{value:"Using Dynamo",id:"using-dynamo",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Building From Source",id:"building-from-source",level:2},{value:"Versions",id:"versions",level:2},{value:"Notes",id:"notes",level:2},{value:"License",id:"license",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,d.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"Dynamo Framework"})," is a comprehensive, modular framework that simplifies the development of large-scale enterprise applications. Built using Java and Spring Boot, Dynamo integrates a range of essential libraries for different functionalities such as AI integration, authentication, AWS services, batch processing, CSV handling, and more. Each library is designed to serve a distinct purpose, offering flexibility and scalability to the application development process."]}),"\n",(0,d.jsx)(n.h3,{id:"libraries-included",children:"Libraries Included"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-ai"}),": Leverages OpenAI and Spring AI for intelligent capabilities."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-auth"}),": Supports FusionAuth and Active Directory for secure authentication management."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-aws"}),": Simplifies AWS services integration like SNS, S3, DynamoDB."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-batch"}),": Manages batch operations with ease."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-csv"}),": Facilitates CSV parsing and generation using OpenCSV."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-form-builder"}),": Uses Jackson to easily manage form data."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-generics-crud"}),": Provides a CRUD operation layer with JPA and QueryDSL."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-iac"}),": Infrastructure as Code (IaC) integration with AWS CDK."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-image"}),": Image processing via ImgScalr."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-logging"}),": Centralized logging with Log4j2."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-push-notification"}),": Manages to push notifications via AWS SNS."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-pages"}),": Uses CommonMark for dynamic page generation and markdown handling."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-sdk-lib-bom"}),": Ensures consistent version management for all functional libraries."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-user-management"}),": Provides user management capabilities using AWS Cognito."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-utils"}),": Utility library including Commons Text, Hibernate Validator, and custom exceptions."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"dynamo-workflow"}),": Integrates Camunda BPM for workflow management with Spring Boot."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"using-dynamo",children:"Using Dynamo"}),"\n",(0,d.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Java"}),": 17+"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Maven"}),": 3.x+"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Spring Boot"}),": 3.2.x"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"AWS"}),": For AWS-related modules"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"PostgreSQL"}),": (Optional) For persistence modules"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsxs)(n.p,{children:["To use any of the Dynamo libraries, include them in your ",(0,d.jsx)(n.code,{children:"pom.xml"})," as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>net.breezeware.dynamo</groupId>\n    <artifactId>dynamo-{module}</artifactId>\n    <version>{version}</version>\n</dependency>\nReplace {module} with the desired module name, such as dynamo-ai, dynamo-aws, etc and version.\n\nExample:\n\n<dependency>\n    <groupId>net.breezeware.dynamo</groupId>\n    <artifactId>dynamo-auth</artifactId>\n    <version>1.44.0</version>\n</dependency>\n"})}),"\n",(0,d.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,d.jsx)(n.p,{children:"Each module may require specific configurations. Please refer to the individual module documentation for detailed setup instructions."}),"\n",(0,d.jsx)(n.h2,{id:"building-from-source",children:"Building From Source"}),"\n",(0,d.jsx)(n.p,{children:"To build Dynamo from the source, follow these steps:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Clone the Repository:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"git clone https://github.com/your-repo/dynamo-framework.gi\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Build the Project Using Maven:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"mvn clean install\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Include Specific Modules in Your Project:"})}),"\n",(0,d.jsxs)(n.p,{children:["Add the required library modules to your project's ",(0,d.jsx)(n.code,{children:"pom.xml"})," as shown in the ",(0,d.jsx)(n.a,{href:"#maven-dependencies",children:"Dependencies"})," section."]}),"\n",(0,d.jsx)(n.p,{children:"\\"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,d.jsx)(n.p,{children:"Below is the version history of the Dynamo Framework Library:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Version"}),(0,d.jsx)(n.th,{children:"Changes"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.44.0"}),(0,d.jsx)(n.td,{children:"- Added Push Notification Support."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.43.0"}),(0,d.jsx)(n.td,{children:"- Updated Spring AI version (1.0.0-SNAPSHOT)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.42.0"}),(0,d.jsx)(n.td,{children:"- Added AI Module using Spring AI."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.40.0"}),(0,d.jsx)(n.td,{children:"- Added Generative AI Module."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.39.0"}),(0,d.jsx)(n.td,{children:"- Updated javax packages to Jakarta.                                                                                                                 - Replaced springdoc-openapi-ui with springdoc-openapi-starter-webmvc-ui."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.38.0-SNAPSHOT"}),(0,d.jsx)(n.td,{children:"- Updated Parent version (dynamo-parent-lib).                                                                                                 - Removed deprecated WebSecurityConfigurerAdapter."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.36.0"}),(0,d.jsx)(n.td,{children:"- Added Dynamo Docs Module for creating, updating, retrieving, deleting, uploading, and downloading Markdown (MD) docs using the CommonMark library."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.35.0"}),(0,d.jsx)(n.td,{children:"- Enabled dynamic creation and management of tables for form submissions.                                     - Integrated seamlessly with Form Builder service.                                                                                         - Updated the Response List view layout."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.34.0"}),(0,d.jsx)(n.td,{children:"- Updated Form Builder service for generating secure publishable links.                                                 - Added Form Invitation entity and service to manage form invitations.                                                  - Updated Response list."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.33.0"}),(0,d.jsx)(n.td,{children:"- Updated Form Builder service for generating publishable links.                                                              - Added Form Response entity and service to manage form responses."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.32.2"}),(0,d.jsx)(n.td,{children:"- Updated Parent version (dynamo-parent-lib)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.32.1"}),(0,d.jsx)(n.td,{children:"- Refactored Image Compress Module using ImgScalr."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.32.0"}),(0,d.jsx)(n.td,{children:"- Added Image Compress Module using ImgScalr."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.31.0"}),(0,d.jsx)(n.td,{children:"- Added Bean Utils for representing a bean with only the specified fields.                                             - Added Valid UUIDValidator annotation for UUID validation."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.30.0"}),(0,d.jsx)(n.td,{children:"- Added CSV Read Service method using OpenCSV in Dynamo CSV module."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.29.0"}),(0,d.jsx)(n.td,{children:"- Added Generic Service methods to handle bulk deletion."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.28.0"}),(0,d.jsx)(n.td,{children:"- Migrated from Camunda 8 to Camunda 7 in the Dynamo Workflow module.                                      - Updated naming convention for Form module service."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.27.0"}),(0,d.jsx)(n.td,{children:"- Added Workflow Support using Camunda."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.26.1"}),(0,d.jsx)(n.td,{children:"- Added EnableGlobalMethodSecurity in Web Security Config."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.26.0"}),(0,d.jsx)(n.td,{children:"- Added retrieval of users by roles and groups in the User Management Module."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.25.0"}),(0,d.jsx)(n.td,{children:"- Added Form Builder Support."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.24.0"}),(0,d.jsx)(n.td,{children:"- Added User Management Module for managing user database and AWS Cognito.                          - Added retrieval of a list of entities with/without sorting in Generic Services."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.23.0"}),(0,d.jsx)(n.td,{children:"- Added common HTTP security configuration in Dynamo Auth.                                                                - Updated Dynamo Auth module package name.                                                                                              - Updated dynamo-sdk-bom to dynamo-sdk-lib-bom."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.20.1"}),(0,d.jsx)(n.td,{children:"- Refactored AWS SES mail service."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.20.0"}),(0,d.jsx)(n.td,{children:"- Added get email template in Dynamo AWS SES.                                                                                            - Added MapStruct dependency."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.19.0"}),(0,d.jsx)(n.td,{children:"- Added NoSuchElementException and IllegalArgumentException in DynamoExceptionHandler.  - Added ValidationExceptionUtils for field violations.                                                                                    - Added dynamo-generics-crud."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.18.0"}),(0,d.jsx)(n.td,{children:"- Refactored Dynamo exception and exception handler.                                                                                - Added Maven Compiler Plugin with MapStruct."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.17.2"}),(0,d.jsx)(n.td,{children:"- Refactored Dynamo Auth."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.17.1"}),(0,d.jsx)(n.td,{children:"- Added email template with BCC address."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.17.0"}),(0,d.jsx)(n.td,{children:"- Refactored Dynamo Auth."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.16.2"}),(0,d.jsx)(n.td,{children:"- Refactored reset password workflow in Dynamo Auth.                                                                              - Added profile for Azure Active Directory.                                                                                                        - Added profile for SMTP email flow."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.16.1"}),(0,d.jsx)(n.td,{children:"- Refactored AWS SES send mail to support HTML formatted email."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.16.0"}),(0,d.jsx)(n.td,{children:"- Added support for Azure Active Directory."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.15.2"}),(0,d.jsx)(n.td,{children:"- Refactored DynamoDB test method."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.15.1"}),(0,d.jsx)(n.td,{children:"- Refactored reset password workflow in Dynamo Auth to send templated email instead of SMTP email."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"v1.15.0"}),(0,d.jsx)(n.td,{children:"- Added support for DynamoDB using AWS SDK v2.0."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\\n"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Supported Version:"})," We currently support ",(0,d.jsx)(n.strong,{children:"v1.44.0"})," only."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,d.jsx)(n.p,{children:"Dynamo is an open-source project distributed under the Apache License 2.0. The same licensing is applied to most of the framework\u2019s libraries."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var d=i(6540);const r={},s=d.createContext(r);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);