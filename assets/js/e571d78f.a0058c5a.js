"use strict";(self.webpackChunkdynamo=self.webpackChunkdynamo||[]).push([[196],{9011:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var d=i(4848),s=i(8453);const o={},r="Dynamo AI Module Documentation",t={id:"dynamo-framework/Dynamo AI Module Documentation",title:"Dynamo AI Module Documentation",description:"---",source:"@site/docs/dynamo-framework/Dynamo AI Module Documentation.md",sourceDirName:"dynamo-framework",slug:"/dynamo-framework/Dynamo AI Module Documentation",permalink:"/docs/dynamo-framework/Dynamo AI Module Documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dynamo-framework/Dynamo AI Module Documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamo Framework",permalink:"/docs/category/dynamo-framework"},next:{title:"Dynamo Auth Module",permalink:"/docs/dynamo-framework/Dynamo Auth Module"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Relevant Dependencies, Plugins, and Properties",id:"relevant-dependencies-plugins-and-properties",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Dependency Management",id:"dependency-management",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Properties",id:"properties",level:3},{value:"Module: dynamo-ai-bff",id:"module-dynamo-ai-bff",level:2},{value:"Module Introduction",id:"module-introduction",level:3},{value:"Vocabulary/Terminology",id:"vocabularyterminology",level:3},{value:"Technologies/3rd Party Libraries",id:"technologies3rd-party-libraries",level:3},{value:"Sample Use Cases",id:"sample-use-cases",level:3},{value:"Module: dynamo-ai-service",id:"module-dynamo-ai-service",level:2},{value:"Module Introduction",id:"module-introduction-1",level:3},{value:"Module: <code>KnowledgeArtifactService</code>",id:"module-knowledgeartifactservice",level:3},{value:"Module Introduction",id:"module-introduction-2",level:4},{value:"Methods",id:"methods",level:4},{value:"Module: <code>ModelService</code>",id:"module-modelservice",level:3},{value:"Module Introduction",id:"module-introduction-3",level:4},{value:"Methods",id:"methods-1",level:4},{value:"Module: <code>VectorStoreService</code>",id:"module-vectorstoreservice",level:3},{value:"Module Introduction",id:"module-introduction-4",level:4},{value:"Methods",id:"methods-2",level:4},{value:"Configuration Properties",id:"configuration-properties",level:4},{value:"Summary",id:"summary",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"dynamo-ai-module-documentation",children:"Dynamo AI Module Documentation"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"Dynamo AI Module"})," is designed to manage AI models, knowledge artifacts, and document embeddings. It integrates with OpenAI services to provide functionalities such as embedding documents, creating chat responses, and managing knowledge artifacts associated with AI models. The module is divided into several components, each serving a specific purpose."]}),"\n",(0,d.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Java 17.x"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Maven 3.8.x"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"PostgreSQL 12.x"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"relevant-dependencies-plugins-and-properties",children:"Relevant Dependencies, Plugins, and Properties"}),"\n",(0,d.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"dynamo-generics-crud"})}),": Generic CRUD operations."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"springdoc-openapi-starter-webmvc-ui"})}),": OpenAPI documentation and Swagger UI."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring-ai-openai"})}),": OpenAI services integration."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring-ai-pgvector-store"})}),": Vector storage in PostgreSQL."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring-ai-tika-document-reader"})}),": Document processing with Apache Tika."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"dynamo-utils"})}),": Utility functions for Dynamo."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"hibernate-vector"})}),": Vector-based data support in Hibernate."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"Flyway"})}),": For DB Migration."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"dependency-management",children:"Dependency Management"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring-ai-bom"})}),": BOM for managing Spring AI dependencies."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"repositories",children:"Repositories"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"Spring Milestones"})}),": Access to Spring milestones and snapshots."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"apt-maven-plugin"})}),": Annotation processing."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring-ai.version"})}),": Version for Spring AI BOM."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"module-dynamo-ai-bff",children:"Module: dynamo-ai-bff"}),"\n",(0,d.jsx)(n.h3,{id:"module-introduction",children:"Module Introduction"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"dynamo-ai-bff"})," module is the backend-for-frontend service that manages AI models and their associated knowledge artifacts. It provides a range of RESTful APIs for creating, retrieving, updating, and managing AI models, as well as handling knowledge artifacts and conducting model conversations."]}),"\n",(0,d.jsx)(n.h3,{id:"vocabularyterminology",children:"Vocabulary/Terminology"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"BFF (Backend for Frontend)"}),": A specialized backend service tailored to meet the needs of a specific frontend."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"DTO (Data Transfer Object)"}),": Objects used to transfer data between different parts of the application."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"technologies3rd-party-libraries",children:"Technologies/3rd Party Libraries"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Spring Web"}),": For building web applications."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"OpenAPI (springdoc-openapi)"}),": For API documentation."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Spring AI"}),": For integrating AI capabilities into the application."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"sample-use-cases",children:"Sample Use Cases"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Model Management"}),": Create, retrieve, update, and manage AI models."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Knowledge Artifacts"}),": Upload, retrieve, delete, and embed knowledge artifacts associated with AI models."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Model Conversations"}),": Test and conduct conversations with AI models."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Model Training"}),": Complete the training process for AI models."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Document Management"}),": Check the availability and embedding status of documents related to AI models."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"module-dynamo-ai-service",children:"Module: dynamo-ai-service"}),"\n",(0,d.jsx)(n.h3,{id:"module-introduction-1",children:"Module Introduction"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"dynamo-ai-service"})," module encompasses services related to AI models and knowledge artifacts. It provides functionality for managing knowledge artifacts, handling AI model operations, and interacting with vector stores for document embedding and chat responses."]}),"\n",(0,d.jsxs)(n.h3,{id:"module-knowledgeartifactservice",children:["Module: ",(0,d.jsx)(n.code,{children:"KnowledgeArtifactService"})]}),"\n",(0,d.jsx)(n.h4,{id:"module-introduction-2",children:"Module Introduction"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"KnowledgeArtifactService"})," module handles operations related to knowledge artifacts, including their retrieval and deletion based on unique IDs and model IDs."]}),"\n",(0,d.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"retrieveKnowledgeArtifactByUniqueId(UUID uniqueId)"})}),": Retrieves a knowledge artifact by its unique ID."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"deleteKnowledgeArtifactByUniqueIdAndModelUniqueId(UUID uniqueId, UUID modelUniqueId)"})}),": Deletes a knowledge artifact by its unique ID and model unique ID."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"retrieveKnowledgeArtifactByUniqueIdAndModelUniqueId(UUID uniqueId, UUID modelUniqueId)"})}),": Retrieves a knowledge artifact by its unique ID and the model's unique ID."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"findByModelUniqueIdAndStatus(UUID modelUniqueId, String status)"})}),": Finds knowledge artifacts by the model's unique ID and status."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"findByModelUniqueId(UUID modelUniqueId)"})}),": Retrieves all knowledge artifacts associated with a specific AI model."]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"module-modelservice",children:["Module: ",(0,d.jsx)(n.code,{children:"ModelService"})]}),"\n",(0,d.jsx)(n.h4,{id:"module-introduction-3",children:"Module Introduction"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"ModelService"})," module handles operations related to AI models, including retrieval by unique ID."]}),"\n",(0,d.jsx)(n.h4,{id:"methods-1",children:"Methods"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"retrieveModelByUniqueId(UUID uniqueId)"})}),": Retrieves an AI model by its unique ID."]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"module-vectorstoreservice",children:["Module: ",(0,d.jsx)(n.code,{children:"VectorStoreService"})]}),"\n",(0,d.jsx)(n.h4,{id:"module-introduction-4",children:"Module Introduction"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"VectorStoreService"})," module manages document embedding and chat responses using AI models. It integrates with OpenAI services for embedding and chat functionalities."]}),"\n",(0,d.jsx)(n.h4,{id:"methods-2",children:"Methods"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"addResource(String resourceUrl, KnowledgeArtifact knowledgeArtifact, Model model)"})}),": Adds a general resource to the knowledge artifact and AI model."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"embedDocuments(List<Document> documents, KnowledgeArtifact knowledgeArtifact, Model model)"})}),": Embeds documents using the specified AI model and stores them in the vector store."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"toJson(Map<String, Object> map)"})}),": Converts a map to a JSON string."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"toFloatArray(List<Double> embeddingDouble)"})}),": Converts a list of Double values to a float array."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"deleteDocumentsByModelAndArtifact(UUID modelUniqueId, UUID knowledgeArtifactUniqueId)"})}),": Deletes documents by AI model and knowledge artifact unique IDs."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"createChatResponse(UUID modelId, String message, String systemPrompt, float temperature, float topP)"})}),": Creates a chat response based on the input."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"findRelevantDocumentsByQueryEmbedding(String message, UUID modelId)"})}),": Retrieves relevant documents based on the query embedding."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring.ai.openai.api-key"})}),": The API key for OpenAI services."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring.ai.openai.chat.options.model"})}),": The AI model to use for chat responses."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"spring.ai.openai.embedding.options.model"})}),": The AI model to use for embedding."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"token-text-splitter.default-chunk-size"})}),": Default chunk size for text splitting."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"token-text-splitter.min-chunk-size-chars"})}),": Minimum chunk size in characters for text splitting."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"token-text-splitter.min-chunk-length-to-embed"})}),": Minimum chunk length to embed."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"token-text-splitter.max-num-chunks"})}),": Maximum number of chunks for text splitting."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"Dynamo AI Module"})," provides a comprehensive framework for managing AI models and knowledge artifacts. By leveraging OpenAI services, it enables sophisticated document embeddings, chat responses, and knowledge management. The module is organized into several key components: ",(0,d.jsx)(n.code,{children:"dynamo-ai-bff"}),", which handles the frontend interactions and API exposure, and ",(0,d.jsx)(n.code,{children:"dynamo-ai-service"}),", which manages backend operations related to AI models, knowledge artifacts, and document embeddings. Key services include ",(0,d.jsx)(n.code,{children:"KnowledgeArtifactService"}),", ",(0,d.jsx)(n.code,{children:"ModelService"}),", and ",(0,d.jsx)(n.code,{children:"VectorStoreService"}),", each offering specific functionalities to facilitate efficient management and utilization of AI resources."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var d=i(6540);const s={},o=d.createContext(s);function r(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);