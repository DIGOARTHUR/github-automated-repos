


<!--Commit changes
 docs: update Readme
-->

<!-- VISUALIZAR NO VSCODE  CTRL + K  V -->

<!-- BADGES https://www.youtube.com/watch?v=cRoBt6AZgjc
https://dev.to/envoy_/150-badges-for-github-pnk

BUILD BADGES
https://shields.io
ICONS
https://simpleicons.org/?q=react

EXEMPLO

 <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-JavaScript-/?logo=JavaScript&logoColor=white&color=yellow)<a/>

# JavaScript - Nome que aparece na Bag
# logo=JavaScript - Muda a logo vide <https://simpleicons.org/?q=react>
# color![brazil-flag](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/617d5c28-7bb7-4972-bdba-7432e75cc6e5)
=yellow - Define a cor da bag vide <https://shields.io>
# logoColor=white - Define a cor do icone
-->






<!------------------------------------ LANGUAGE BUTTONS-->
<div align="right">
<a href="https://github.com/DIGOARTHUR/github-automated-repos#readme">
    <img  height="35" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/257623321-95c81f57-b751-4956-b0ab-7a804ae44506.svg" alt="language_USA" border="0">
<a/>
<br/>
<a href="https://github.com/DIGOARTHUR/github-automated-repos/blob/main/README_PT.md">
<img  alt="language_Brazil"  height="35" src="https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/288551794-f50cff19-7ef7-41c4-81b5-b091ebd0f498.svg">
<a/>

</div>
<!------------------------------------ PROJECT BANNER-->
<h1 align="center">Github-automated-repos</h1>

<p align="center">
 <!---------------------PROJECT ICON-->
  <img src="https://user-images.githubusercontent.com/59892368/219479919-5e84de50-6b7d-4d42-bb6d-a466b450db84.svg" alt="angular-logo" width="150px" height="150px"/>
  <br>
  <i>Github-automated-repos is the lib that gives you the power to manage the visualization of your projects on the website,
    <br>in your own GitHub in one place!</i>
  <br>

</p>



<!---
    • Install lib `github-automated-repos` ➥
    <br>
    • Configure the useGitHubAutomatedRepos hook with your GitHubUsername and KeyWord
    <br>
    • Ready! Now all projects can be managed on their own `GitHub`, in the `Topics field`.
-->


 <!------------------------------------LINKS-->

<p align="center">
  <a href="https://github-automated-repos.vercel.app"><strong>https://github-automated-repos.vercel.app</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  <br>
  <br>
</p>
 <!------------------------------------SHIELDS PROJECT-->
 
<div align="center">
    
 ![NPM DOWNLOADS](https://img.shields.io/npm/dt/github-automated-repos?style=plastic)
 ![NPM Paackage](https://img.shields.io/npm/v/github-automated-repos?color=brightgreen&label=NPM%20package&logo=NPM&logoColor=white)
  ![CodeFactor](https://img.shields.io/codefactor/grade/github/digoarthur/github-automated-repos?color=brightgreen&label=Code%20Quality&logo=codefactor)
 ![GitHub](https://img.shields.io/github/license/digoarthur/github-automated-repos)
<a href="https://typicode.github.io/husky/#/"><img  alt="Husky"  width="20" height="20" src="https://user-images.githubusercontent.com/59892368/219088739-6d1af6db-3444-4351-ae71-5037f47b6938.svg"><a/>
  <a href="https://eslint.org"><img  alt="Eslint"  width="20" height="20" src="https://user-images.githubusercontent.com/59892368/216450924-d9e2e612-4371-40ac-9120-1365d0113b07.svg"><a/>
   <a  href="https://prettier.io"><img  alt="Prettier"  width="20" height="20" src="https://user-images.githubusercontent.com/59892368/216450921-ace9b367-5b82-4ad7-8cf5-d9241951582d.svg"><a/>
   <a href="https://typicode.github.io/husky/#/"><img  alt="Husky"  width="20" height="20" src="https://user-images.githubusercontent.com/59892368/216450914-9ce5d6ee-a7d3-4e74-9d3b-3646a07352c2.svg"><a/>

</div>
  

 <div align="center">
     
<img  alt="ReactJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/11fe7e24-b5d7-47bf-814a-c8d5855e7ca8"> ![Check](https://img.shields.io/badge/-Check-green)
<img  alt="ViteJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/f85aeacd-cea4-4280-9096-194da03e758e"> ![Check](https://img.shields.io/badge/-Check-green) 
<img  alt="NextJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/6b213e2e-213a-489d-bbda-1dec9dcda585"> ![Check](https://img.shields.io/badge/-Framework%20settings-yellow)
     
  </div>     

 <br>
  <br>
  
  > [!TIP]
> Use the code example in this documentation. [Code Example](https://github.com/DIGOARTHUR/github-automated-repos/tree/main?tab=readme-ov-file#code-example-1)      

## 1. Installation

```shell
    npm install github-automated-repos
    # or
    yarn add github-automated-repos
```

## 2. hook config.


```typescript     
    import {useGitHubAutomatedRepos} from "github-automated-repos";

    const data = useGitHubAutomatedRepos("GitHubUsername", "KeyWord");

```
## 3. Choose the repositories and fill in the Topics field with the keyword you determined.
> [!IMPORTANT]
> To insert stack names in the topics field, see web documentation > [Stack Icons](https://github-automated-repos.vercel.app)

![image](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/9a0a0aaf-02e8-4a7f-8390-6e7fb4a3ea53)

## 4. ✅Ready! JSON - Data from repositories chosen by you!

<details>
<summary>JSON - DATA</summary>

### Data Example ~ console.log(data) ~

```javascript
Array(4)
0
: 
{id: 517152367, name: 'Dashgo', html_url: 'https://github.com/DIGOARTHUR/Dashgo', description: 'IGNITE - Trilha ReactJS/ - Neste projeto é aplicad…ate, Components, Props. Recursos do JS como: Map.', topics: Array(7), …}
1
: 
{id: 482667387, name: 'DashBoard-Financeiro', html_url: 'https://github.com/DIGOARTHUR/DashBoard-Financeiro', description: 'IGNITE - Trilha ReactJS/ Chapter II - Esta aplicaç…mpanhamento de valores de entrada, saída e total.', topics: Array(6), …}
2
: 
{id: 412849316, name: 'Task.TODO', html_url: 'https://github.com/DIGOARTHUR/Task.TODO', description: 'IGNITE - Trilha ReactJS/ - Este projeto aborda con…Filter e Math, Spread. E para estilização o SASS.', topics: Array(7), …}
3
: 
{id: 355616217, name: 'Move.it', html_url: 'https://github.com/DIGOARTHUR/Move.it', description: 'NLW#04 - Rocketseat - Utilizando a técnica Pomodor… o objetivo é executar a tarefa do seu interesse.', topics: Array(8), …}
length
: 
4
[[Prototype]]
: 
Array(0)
```
</details>
<details>
<summary>IN PAGE WEB</summary>

### 💡Use your creativity and build the card however you want.

![portfolio_page](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/05e5ab60-5851-4aab-911f-19227a75dc72)

</details>



 
 ---
       

   <!------------------------------------SHIELDS STACKS-->
   
  <!--
  <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-Map-/?logo=JavaScript&logoColor=white&color=yellow)<a/>
 <a href="https://devdigoarthur.notion.site/Context-API-610980ad0db948709d364efc919a454e"> ![Alt ou título da imagem](https://img.shields.io/badge/-ContextAPI-/?logo=CreateReactApp&logoColor=white&color=9cf)<a/>
<a href="https://devdigoarthur.notion.site/Estado-e7c7508cb6bd4d81984ba5e8e50eab67">  ![Alt ou título da imagem](https://img.shields.io/badge/-State-/?logo=CreateReactApp&logoColor=white&color=9cf)<a/>
   <a href="https://devdigoarthur.notion.site/Componentes-bc3ca1ebd97d4ccc8d11e6ab668eeb73"> ![Alt ou título da imagem](https://img.shields.io/badge/-Components-/?logo=CreateReactApp&logoColor=white&color=9cf)<a/>
 -->
 
 
 <!------------------------------------TOOLS-->
  <!--
 #### Tools:
 <a href="https://code.visualstudio.com/"><img  alt="Vscode"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/149663512-3f83da57-bdfe-4cef-bcc2-feb304a738ff.png"><a/>
 <a href="https://git-scm.com/"><img  alt="Git"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/149677999-f5947f0b-e535-4ba2-911c-1c5926045c35.png"><a/>        
     
<hr>
   -->
 
  

   
   <!------------------------------------SUMMARY-->

- ## <a href="https://github.com/DIGOARTHUR/github-automated-repos#--sobre-a-aplicação-">About Library</a>
- ## <a href="https://github.com/DIGOARTHUR/github-automated-repos#--library-">Library</a>
   - ### <a href="https://github.com/DIGOARTHUR/github-automated-repos#import-1">Import</a>
   - ### <a href="https://github.com/DIGOARTHUR/github-automated-repos#fill-in-the-fields-in-the-github-repository-1">Fill in the fields in the github repository</a>
   - ### <a href="https://github.com/DIGOARTHUR/github-automated-repos#code-example-1">Code Example</a>
   - ### <a href="https://github.com/DIGOARTHUR/github-automated-repos#framework-settings-1">Framework Settings</a>
   
   

  
  
   <!------------------------------------DESCRIPTION-->

# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/148622497-164365e8-f6b0-4f40-bc75-a0ed4da6059b.png">  About Library <!---write here : talk a little about project: what's does, example.  -->
> This library automates the view your GitHub projects on your website in one place. But how? Make the code configuration only once in your application with github-automated-repos, and manage the view of your projects on GitHub in the Topics field. Choose which project will be seen on your website, and you can even customize your project card, for example, with a representative icon and show which stacks were used. All in one place!

   |                             Control your projects                     |
| :-------------------------------------------------------------------: |
|   ![image](https://user-images.githubusercontent.com/59892368/214140611-910cd26b-280d-48f1-8652-65034f04a4f8.gif) |


|                             Customize and represent through icons.                |
| :--------------------------------------------------------------: |
|   ![image](https://user-images.githubusercontent.com/59892368/214817180-519e403f-0fa4-4bfd-a6cc-5eb63d3360e8.gif)|  

  
|                               In one place                               |
| :-------------------------------------------------------------------: |
|   ![image](https://user-images.githubusercontent.com/59892368/214930109-119c4b38-9862-4a3d-a130-2dfad5c4bcb6.gif)|

  

  
<!------------------------------------LIBRARY -->

  
# <img  alt="skills"  width="80" height="30" src="https://user-images.githubusercontent.com/59892368/216092858-a64d3a99-1b90-4946-b917-76eadefffb54.svg">  Library <!---write here : demonstration of the application layout.  -->
  

   

## Import
```jsx
import { useGitHubAutomatedRepos, ProjectIcons, StackIcons, StackLabels } from 'github-automated-repos';
```
  <br>

### The package imports four elements:

- `useGitHubAutomatedRepos` hook responsible for automating the repositories. It returns a function called dataGithubRepos, which takes two parameters: data (data that comes from the GitHub API) and the keyword (the latter responsible for showing the project on your website from the moment it is declared in the Topics field of the your Github repository). The dataGithubRepos returns, so optimized, an array of objects containing 7 properties: banner, id, html_url, homepage, topics, name and description.

  ```tsx
  const data = useGitHubAutomatedRepos("GitHubUsername", "KeyWord");
  ```
   - #### return data example:

    ``` javascript
    {
        banner:"https://raw.githubusercontent.com/DIGOARTHUR/github-automated-repos/main/src/assets/images/banner.png"
        description: "The library that automates, in one place, the administration of your github projects on your website."
        homepage: "https://github-automated-repos.vercel.app"
        html_url: "https://github.com/DIGOARTHUR/github-automated-repos"
        id: 585693873
        name: "github-automated-repos"
        topics: (8) ['automated', 'deploy', 'github', 'library', '
    }
    ```

  
 <br>
 
- `StackIcons` The component returns, based on the iteration of the topic array that is contained in data, icons of the stacks used in your project. Enter the stacks used in your repository's topic field.. Check the [Stack Icons](https://github-automated-repos.vercel.app/documentation/stackIcons) tab!

  ```jsx
   data.map((item) => {
       return (
      ...
      {item.topics.map((icon, index) => {
           return (
             <StackIcons key={index} itemTopics={ icon } className={ } />
      }
      ...
  ```

    - #### Render component StackIcons example:

<div align="center">
    
![react-icons](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/876a12c4-93fa-4eb3-908c-b7c36ded395c)![NET_Core_Logo](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/6cad1fdc-d3bb-4adb-9b14-bec1977aaee1)
![mysql-logo-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/8690e53e-5787-48b1-8adc-29c90e56fd42)
![mongo-svgrepo-com (1)](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/7cd5a1ec-ea87-4d7e-8429-1e3fcff03f49)
![linux-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/79ac45a3-5958-4efe-a3e6-90c135d2b466)
![vue](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/07dcaa25-215a-45a8-b783-2c97626c1639)
![Vitejs-logo](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/05cf8a94-895c-4249-8636-f1d2a0ea165b)
![typescript](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/ebd5f88a-7915-4cb5-9109-6f3fc5db9fec)
![tailwind-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/6af503c9-efdc-4e83-9ba7-c910476a8642)
![swift](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/355549ea-87e2-4afd-83a9-2f9cb56c7c49)
![swagger-svgrepo-com (1)](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/fce6e2aa-ecc8-4995-bc3f-68b225f0f0d7)
![storybook](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/453d2e70-dc15-4fb3-b75e-4ea35cbe472b)
![sqlite-svgrepo-com (1)](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/ffb1f056-97ee-4bd1-b5be-4b8f87b6ac9d)
![spring-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/3c36d340-e16c-458e-b39c-eef7051aaf74)
![scala-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/a65edf82-e0ea-4a8e-90b2-e284593684ec)
![sass-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/7fd8a1af-290f-499f-8691-360c6511cc7b)
![ruby-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/3d2bd96d-e9cd-4566-b58e-a6bb9d907aa0)
![Ruby_On_Rails_Logo](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/c755be70-ba40-48ae-84f1-65ab791835ec)
![react-query-seeklogo com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/eb3732e9-d3a9-4f9f-b706-8969557681aa)
![python-svgrepo-com](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/1cd247af-dabd-41dc-97c5-311944661278)
![prisma](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/b7355d54-3cd1-4750-8192-e4bdb4b774c8)
![prettier](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/809a2edc-c11a-4645-bc44-c97e546fdadf)
    
</div>
  <br>
  
- `StackLabels` component returns, based on the iteration of the topics array that is contained in data, labels of the stacks used in your project. Insert the stacks used in the topics field of your repository. Check the [Stack Icons](https://github-automated-repos.vercel.app/documentation/stackIcons) tab!

  ```jsx
     data.map((item) => {
       return (
      ...
      {item.topics.map((icon, index) => {
           return (
             <StackLabes key={ index } itemTopics={ icon } className={ } />
      }
      ...
     
  ```
    - #### Render component StackLabels example:

<div align="center">
    
![](https://img.shields.io/badge/angular-%23646cff?style=plastic)
![](https://img.shields.io/badge/javascript-%23646cff?style=plastic)
![](https://img.shields.io/badge/aws-%23646cff?style=plastic)
![](https://img.shields.io/badge/elixir-%23646cff?style=plastic) ![](https://img.shields.io/badge/jest-%23646cff?style=plastic) ![](https://img.shields.io/badge/mongodb-%23646cff?style=plastic)  ![](https://img.shields.io/badge/react-%23646cff?style=plastic) ![](https://img.shields.io/badge/salesforce-%23646cff?style=plastic) ![](https://img.shields.io/badge/vuejs-%23646cff?style=plastic)
 ![](https://img.shields.io/badge/yarn-%23646cff?style=plastic)
 ![](https://img.shields.io/badge/visualstudio-%23646cff?style=plastic)
 ![](https://img.shields.io/badge/storybook-%23646cff?style=plastic) 
 ![](https://img.shields.io/badge/sass-%23646cff?style=plastic)
 ![](https://img.shields.io/badge/mysql-%23646cff?style=plastic) 
</div>
    
 <br>
 
- `ProjectIcons` component returns, based on the iteration of the topics array that is contained in data, icons to represent your project. The project tag must be inserted in the topics field of your repository. Check the [Project Icons](https://github-automated-repos.vercel.app/documentation/projectIcons) tab!

  ```jsx
     data.map((item) => {
       return (
      ...
      {item.topics.map((icon, index) => {
           return (
             <ProjectIcons key={ index } itemTopics={ icon } className={ } />
      }
      ...
     
  ```

    - #### Render component ProjectIcons example:

<div align="center">
    
![212284904-0b4f29fa-4141-4212-b516-d4e4fcdb8519](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/23330d16-2bd9-4425-ae2c-f0df7f05ea9d)
![212984732-79dd44aa-23a5-4b83-ae28-7a2ddd443032](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/4d40d997-0b89-4056-8079-18ca8a57e162)
![212991791-588a6c13-795e-47aa-b496-8bdbaa3cac30](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/81ee9f8b-034d-4557-908d-edd7852b83aa)
![212994060-8d1644c7-96d7-4f3b-8e94-65ff76db0c92 (2)](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/77c65908-6659-4db9-a69d-3d5c586278d3)
![212984565-a424b06e-db5e-464a-a5df-ddf7c9bab6ad](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/fb165880-119a-4511-9d6d-8d03d5d72cb7)
![213131421-fa77f07c-9120-4b40-859d-2bd799de6681](https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/5ab694c4-18f0-4312-bd75-5996c123fe76)


    
</div>


  

 <br>
<br>
  
## Fill in the fields in the github repository

- `banner`: This property returns a .PNG image. For this to be possible, the correct name must be entered in the file called `banner.png` and also the path. Ex.:
```
└── src
    └── assets
            └── imgs
                └── `banner.png`
    ├── ...
```
<div align="center">
<img  alt="dashgo_layout"  height="150" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/68f59bce-0d8f-4cea-81c9-01596d97f47e"> 
<img  alt="dashfincaneiro_layout"  height="150" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/86dac1db-d04a-462b-a2ea-f00db264dbad"> 
<img  alt="proffy_layout"  height="150" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/bfcd0785-ce8a-4327-8b8b-5de495528c3f"> 
</div>



- `id`: repository identification number. used as parameter in the key tag. This field does not need to be filled in.
- `html_url`: repository link. Used as the link of access. This field does not need to be filled in.
- `homepage`: it's the access link to the built page, page deploy.  About / Website of your GitHub.

<div align="center">
<img  alt="homepage_Props"  height="600" src="https://user-images.githubusercontent.com/59892368/219116735-a026d9b9-f5b9-4389-b8f1-619db2488368.png"> 
</div>


<br>

- `topics`: array that brings information about the icons in [Project Icons](https://github-automated-repos.vercel.app/documentation/projectIcons) and [Stack Icons](https://github-automated-repos.vercel.app/documentation/stackIcons). Used in both ProjectIcon and StackIcon components. It is in this field that is passed the key configured in the hook. Refers to the field About / Topics of your GitHub.

<div align="center">
<img  alt="topics_Props"  height="600" src="https://user-images.githubusercontent.com/59892368/219117029-d693ee8f-4289-4ac0-85ed-674091508510.png"> 
</div>

<br>

- `name`: This is the name of the repository. Refers to the field  Settings / General / Repository name of your GitHub.

<div align="center">
<img  alt="name_Props"  height="600" src="https://user-images.githubusercontent.com/59892368/219117097-43db2497-7f62-428e-85c6-ef3656da4cd2.png"> 
</div>



<br>

- `description`: This is the description given to your repository. Refers to the About /Description field of your GitHub.

<div align="center">
<img  alt="description_Props"  height="600" src="https://user-images.githubusercontent.com/59892368/219117260-5bdb1fbb-c58b-4ad9-938a-068b58c72f27.png"> 
</div>



<br>
<br>

## Code Example

> [!CAUTION]
> :exclamation::exclamation: Don't forget to fill in the fields: your GitHubUsername and keyWord (determined by you).



```javascript
 const data = useGitHubAutomatedRepos("GitHubUsername", "KeyWord");
```


#### <a href="https://typicode.github.io/husky/#/"><img  alt="Javascript"  width="35" height="35" src="https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg"><a/>  <a href="https://typicode.github.io/husky/#/"><img  alt="Javascript"  width="35" height="35" src="https://user-images.githubusercontent.com/59892368/219095611-551d532a-30fc-4873-b00e-0a8bbf8bb5ec.svg"><a/>

```jsx    
  import './App.css';
  import { useGitHubAutomatedRepos, ProjectIcons, StackIcons, StackLabels } from 'github-automated-repos';
  function App() {
                              {/*useGitHubAutomatedRepos hook*/ }
  const data = useGitHubAutomatedRepos("GitHubUsername", "KeyWord");

    return (
      <div className="App">
        {
          data.map((item) => {
            return (
              <div key={item.id}>

                {/*Banner / Layout / Logo*/}
                <img src={item.banner}></img>

                {/*Project Icons*/}
                {item.topics.map((icon) => {
                  return (
                    <ProjectIcons key={icon} className="project_Icon" iconItem={icon} />
                  )
                })}

                {/*html Url*/}
                <a href={item.html_url}>
                    {/*Name Project*/}
                    <h1>{item.name}</h1>
                </a>

                {/*Description*/}
                <p>{item.description}</p>
    
                {/*Homepage*/}
                <a href={item.homepage}>
                    <h3>Homepage</h3>
                </a>

                {/*Stacks Icon and Stacks Label*/}
                {item.topics.map((icon, index) => {
                  return (
                     <div key={icon} style={{display:'flex', justifyContent:'center'}}>
                      <StackIcons key={icon} className="stack_Icon" itemTopics={icon} />
                      <StackLabels key={index} itemTopics={icon} />
                      </div>
                  )
                })}

              </div>

            )
          })
        }
      </div>
    );

  }
  export default App;
```

<br>  
<!------------------------------------Framework Settings--> ## Framework Settings.
       
      
<img  alt="NextJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/6b213e2e-213a-489d-bbda-1dec9dcda585">
       
  
       
```
└── My-app
    ├── ...
    ├── next.config.js
    ├── ...
```

``` javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['github-automated-repos'],
}

module.exports = nextConfig
```
       
---


**Love github-automated-repos? Give our repo a star ⭐ ⬆️.**


`based in:` [Api Github](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)

`by`: [@digoarthur](https://www.linkedin.com/in/digoarthur/)
 
   
  

 <!------------------------------------LIST: STACKS , LIBS & TOOLS ... -->
<!---
## <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/197614534-e12fb94a-b5cf-44ff-8d57-debad7299b0b.png"> Stacks for construction <!---write here: learned concepts; -->
<!---
### API
       
  <a href="https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository"> ![Alt ou título da imagem](https://img.shields.io/badge/-APIGithub-/?logo=GitHub&logoColor=white&color=gray)<a/>
  
### Language
  
<a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-Typescript-/?logo=Typescript&logoColor=white&color=informational)<a/>
     
### Framework / Lib

 <a href="https://reactjs.org"> ![Alt ou título da imagem](https://img.shields.io/badge/-ReactJS-/?logo=React&logoColor=white&color=blue)<a/> 

 ### Package Manager/ Libs
 <a href="https://yarnpkg.com"> ![Alt ou título da imagem](https://img.shields.io/badge/-Yarn-/?logo=Yarn&logoColor=white&color=blue)<a/> 
*  [`Eslint`](https://www.npmjs.com/package/eslint) 
*  [`Prettier`](https://www.npmjs.com/package/prettier) 
*  [`Husky`](https://www.npmjs.com/package/husky)  
*  [`Lint-staged`](https://www.npmjs.com/package/lint-staged) 
*  [`Commitizen`](https://www.npmjs.com/package/commitizen)  

 
 


 ### Versioning
 <a href="https://git-scm.com"> ![Alt ou título da imagem](https://img.shields.io/badge/-Git-/?logo=Git&logoColor=white&color=red)<a/> 
 ### IDE
 <a href="https://code.visualstudio.com"> ![Alt ou título da imagem](https://img.shields.io/badge/-VisualStudioCode-/?logo=VisualStudioCode&logoColor=white&color=informational)<a/> 

-->




  
  
  



