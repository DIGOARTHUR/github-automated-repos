// Project Icon Font:
// https://www.svgrepo.com/svg/384245/controller-joystick-games-video-console?edit=true
// https://www.svgrepo.com/svg/383702/landing-page-web-design?edit=true
// https://www.svgrepo.com/svg/459107/robot?edit=true
// https://www.svgrepo.com/svg/471159/check-square-broken?edit=true
// https://www.svgrepo.com/svg/383754/security-protection-lock-padlock-square-locked?edit=true
// https://www.svgrepo.com/svg/339111/dashboard?edit=true
// https://www.svgrepo.com/svg/257454/profile?edit=true
// https://www.svgrepo.com/svg/298828/store?edit=true
// https://www.svgrepo.com/svg/429278/cart-essential-shopping?edit=true
// https://www.svgrepo.com/svg/144539/artist-color-palette?edit=true
// https://www.svgrepo.com/svg/424981/online?edit=true
// https://www.svgrepo.com/svg/384295/weather-forecast-sunny-snow-cloud-day?edit=true
// https://www.svgrepo.com/svg/456864/diagram
// https://www.svgrepo.com/svg/455166/map-navigation?edit=true
// https://www.svgrepo.com/svg/343466/news-feed?edit=true
// https://www.svgrepo.com/svg/458454/database-1?edit=true

import { useEffect, useState } from 'react';

export interface IGithubRepos {
    name: string;
    topics: string[];
    html_url: string;
    description: string;
    id: number;
    homepage: string;
    banner: () => string;

}

/**
 * @param {string} usernameGitHub - Insert your username GitHub Ex.: https://github.com/USERNAME
 * @param {string} keyWordDeploy - Insert a keyword chosen by you. - This key is responsible for managing your projects on GitHub in topics field Ex.: https://github.com/DIGOARTHUR/github-automated-repos#--about-library-.
 * @returns {(IGithubRepos[])} - Returns an array with the properties: name, topics, html_url, description, id, homepage.
 */
export function useGitHubAutomatedRepos(usernameGitHub: string, keyWordDeploy: string) {

    const [repository, setRepository] = useState<IGithubRepos[]>([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${usernameGitHub}/repos?sort=created&per_page=999`)
            .then((response) => response.json())
            .then((data) => setRepository(data));
    }, []);

    let dataFilter = [];


    const [data,setData] = useState <IGithubRepos[]>([])
    const [loading, setLoading] =useState <boolean>(true)
    const [error, setError] = useState<string>("")
    useEffect(() => {
        const fetchData = async () => {
     setLoading(true)
        try {
              const response = await fetch(`https://api.github.com/users/${usernameGitHub}/repos?sort=created&per_page=999`);
              if (!response.ok) {
                throw new Error(`Unsuccessful request: ${response.statusText}`);
              }
              const jsonData = await response.json();
              setData(jsonData.filter((item: IGithubRepos) => item.topics.includes(keyWordDeploy as never))); 
            } catch (err) {
             setError((err as Error).message)
            }finally{
                setLoading(false)
            }
          };
      
          fetchData();  
    }, [usernameGitHub,keyWordDeploy]);


     let repository = data.map((item: IGithubRepos) => ({

    const typeImg = ['svg', 'png'];
    function checkImage(usernameGitHub: string, repositoryName: string): string {
        let checkURL = '';
        typeImg.map((type)=> {
            const url = `https://raw.githubusercontent.com/${usernameGitHub}/${repositoryName}/main/src/assets/imgs/banner.${type}`;
            const http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();

            if (http.status === 200) {
                checkURL = url;
            }
        });
        return checkURL;
    }

    return dataFilter.map((item: IGithubRepos) => ({

        id: item.id,
        name: item.name,
        html_url: item.html_url,
        description: item.description,
        topics: item.topics,
        homepage: item.homepage,
        banner: checkImage(usernameGitHub, item.name),
    }));
    return {repository, loading, error};


}

export function IconsData() {
    // 25px
    const stackIcons = {
        androidstudio: 'https://user-images.githubusercontent.com/59892368/216783644-f664d47c-f686-496d-8073-2e83b2b469ab.svg',
        angular: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287532135-7c81a717-da75-4aeb-ab22-95fc2a3254be.svg',
        arduino: 'https://user-images.githubusercontent.com/59892368/216785825-af6a605c-6ca3-4bb5-9889-31ad818fb20b.svg',
        aws: 'https://user-images.githubusercontent.com/59892368/215260536-748d14f8-5242-4d5a-9faf-6d62ed38a87a.svg',
        babel: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285172839-1483ec96-ea00-4fa4-8daa-5b6c48294d4c.svg',
        bash: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/279798875-371442d4-bd43-4597-8075-ff506529c123.svg',
        bitbucket: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285174758-c7b4d643-1b6c-4281-9e1e-a59ff4a8b36a.svg',
        blender: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285182560-49ae39de-ad6b-4b96-be9f-cddb58b2406c.svg',
        bootstrap: 'https://user-images.githubusercontent.com/59892368/218274368-89a94705-c5b1-42a6-813d-4aaa2a1334e3.svg',
        c: 'https://user-images.githubusercontent.com/59892368/215260535-be3713a8-d075-4c85-88ca-4b3703f9e7b3.svg',
        canva: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287774022-8ae44b49-fbef-4868-b441-24a37490be36.svg',
        clion: 'https://user-images.githubusercontent.com/59892368/216813068-bc05f852-f006-4ff6-85e2-d8988f6afbf9.svg',
        cpp: 'https://user-images.githubusercontent.com/59892368/215260533-1ede6b38-7c51-4c89-ac2c-a1195c2b912b.svg',
        csharp: 'https://user-images.githubusercontent.com/59892368/215260532-33106206-6ca4-4d11-bdc3-9171491979a5.svg',
        css3: 'https://user-images.githubusercontent.com/59892368/210762519-fc191098-1198-4668-9eb5-d0c1481da8c7.svg',
        dart: 'https://user-images.githubusercontent.com/59892368/215260531-179da616-9fc3-41de-99ed-15dddf2d021b.svg',
        denojs: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287532091-b11ecf66-5fb2-4158-b48a-99afc85c6a2b.svg',
        django: 'https://user-images.githubusercontent.com/59892368/215260529-5fb18a51-b2bc-4092-8a87-f051f89dd30e.svg',
        docker: 'https://user-images.githubusercontent.com/59892368/215260528-b50b803d-a037-4572-812b-95801f48c2bd.svg',
        dotnetcore: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287774015-b4e62d28-bb35-4eb0-b10a-580db7ea0fed.svg',
        eclipse: 'https://user-images.githubusercontent.com/59892368/216813192-3088dc66-c68e-4e06-b7d0-c7443e3230ed.svg',
        elixir: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285177064-e7a06c1c-26a2-4d1c-8bde-59ec2c954d5f.svg',
        eslint: 'https://user-images.githubusercontent.com/59892368/215260527-373e10c7-04d3-45c5-98b4-74bf586de7f6.svg',
        expo: 'https://user-images.githubusercontent.com/59892368/210762516-b48ee0ef-9d7b-4d86-951b-b80515c39783.svg',
        express: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285176547-ffc3317a-e03a-46ee-8bf0-a2566d2513fe.svg',
        figma: 'https://user-images.githubusercontent.com/59892368/215260525-924e0be5-1f36-4d70-a21b-40382b01dab4.svg',
        firebase: 'https://user-images.githubusercontent.com/59892368/215260523-f958d8c1-8634-4b2c-a880-437f98b1538d.svg',
        flask: 'https://user-images.githubusercontent.com/59892368/215260521-e80bde19-b70d-4866-8ef7-a836dd819e17.svg',
        flutter: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285177284-da3ab306-20d2-4048-a847-98c71b0468de.svg',
        gatsby: 'https://user-images.githubusercontent.com/59892368/215260520-8e935c1a-46b2-451b-a87c-e9f4e7c081c4.svg',
        gimp: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285177524-25e4a00e-e4f9-442b-a2b2-3f22c07be75e.svg',
        git: 'https://user-images.githubusercontent.com/59892368/218274559-3cb134c3-4086-4c49-9f82-fe98f2469bbb.svg',
        go: 'https://user-images.githubusercontent.com/59892368/215260519-e619fbd8-c518-477b-9327-a3afa23f988e.svg',
        googlecloud: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285177670-cebc6b57-79e3-48df-b896-6d20f19073f0.svg',
        graphql: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/279800785-18c9f9d5-f09d-49ab-ab4d-5ca358a967d4.svg',
        grunt: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285177779-acc162d2-85f3-412f-9399-f9573eb83942.svg',
        gulpjs: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287774029-c2eb189c-a8a1-4d02-8824-b185e176242a.svg',
        haskell: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285179295-4b4ca6ff-f290-4bfb-bb93-a6b8f35baee9.svg',
        heroku: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285179420-bd38fb43-1f35-408b-94d1-25de832db6e4.svg',
        html5: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287469126-74b9f4a1-6862-40a4-bd56-311ce688db46.svg',
        husky: 'https://user-images.githubusercontent.com/59892368/218274511-2650c740-a811-4b66-8d81-bf3d855d41f7.svg',
        inkscape: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285179695-f0de754a-958f-49e4-8bd9-1b099ea18c23.svg',
        java: 'https://user-images.githubusercontent.com/59892368/215260518-171e0fb1-1cd7-4097-bcba-05089c6adf46.svg',
        javascript: 'https://user-images.githubusercontent.com/59892368/210762520-8226f647-a814-4723-8e6d-ed0334550838.svg',
        jenkins: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285179842-dc8fff7f-707a-4a2e-92e9-9e26d22031d7.svg',
        jest: 'https://user-images.githubusercontent.com/59892368/218274370-1e098c22-99fd-4514-b91f-0c4b38f5f888.svg',
        jira: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285179925-970136fc-83db-45bc-ba55-748383c44fd2.svg',
        jquery: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285180200-2545ece8-ef19-4b0f-a2e5-b548eb20abd7.svg',
        jupyter: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285180478-c04f5231-ffcc-498b-9f21-8f95ce165263.svg',
        kotlin: 'https://user-images.githubusercontent.com/59892368/215260517-8904a569-d2ec-48c4-8adc-660e929db93e.svg',
        kubernetes: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287774027-6a7ef271-a387-464b-a622-c92ae83985e3.svg',
        laravel: 'https://user-images.githubusercontent.com/59892368/215260515-4f3075d5-ce25-4824-87ff-736ccaf42311.svg',
        linux: 'https://user-images.githubusercontent.com/59892368/215260512-04a0d227-c913-4946-9ff4-b3fb691df5ff.svg',
        lua: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285180569-c8f60987-7e27-4c96-aef5-51059342747b.svg',
        markdown: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285180652-eb00dd78-63da-4a4a-96e0-c01c480c2d49.svg',
        materialui: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285181152-550217a1-f188-4127-9a24-fc85f18b518d.svg',
        mongodb: 'https://user-images.githubusercontent.com/59892368/215260514-a4f02cca-c530-4de2-88ee-5250b24a1456.svg',
        mysql: 'https://user-images.githubusercontent.com/59892368/218274731-13fe41e3-ebf9-4bbb-a7d7-c8d43bf46c53.svg',
        nestjs: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285181240-83984ea0-7fc3-4b55-b423-90ce2a1c911a.svg',
        netcore: 'https://user-images.githubusercontent.com/59892368/215260510-b72be359-f22b-4751-a8ab-41cd4f51c9c9.svg',
        nextjs: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287532311-d8f52862-314c-4be7-aac4-7966823ac3cd.svg',
        nodejs: 'https://user-images.githubusercontent.com/59892368/210762525-21dfac80-b121-4517-b3dd-3f62fe413d5a.svg',
        npm: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287469113-6498d9f5-9884-43fd-b203-e9ae7de0984e.svg',
        objectc: 'https://user-images.githubusercontent.com/59892368/215260537-d56e6052-6182-4edb-a770-842de3b8c24f.svg',
        pearl: 'https://user-images.githubusercontent.com/59892368/218274369-fd7185b0-d50c-46fd-8ee1-c6bf36f1ccc6.svg',
        php: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287532082-10413e00-ab9c-4731-a4f6-578394d91e90.svg',
        postgresql: 'https://user-images.githubusercontent.com/59892368/215260507-a1ab30ad-16c5-48b6-8442-4258d3fc828f.svg',
        prettier: 'https://user-images.githubusercontent.com/59892368/215260503-ce103bd2-0249-4be4-9a52-cd3044b30728.svg',
        prisma: 'https://user-images.githubusercontent.com/59892368/215260501-ff824fa1-ef05-4de7-af76-1586fc2ac91b.svg',
        pycharm: 'https://user-images.githubusercontent.com/59892368/232259760-ec701be5-d9b6-408f-8581-f49e9713d301.svg',
        python: 'https://user-images.githubusercontent.com/59892368/215260500-73b6c85e-d843-4820-a771-b8bdb23ed2d2.svg',
        r: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285181945-6a0d5457-5efa-44be-9af9-1064cd535910.svg',
        rails: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285182048-4a59a52f-b518-4893-b488-0732fd591e17.svg',
        raspberrypi: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285181866-3260e7c9-ef30-469f-82d7-7f301622c7cf.svg',
        react: 'https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg',
        reacticons: 'https://user-images.githubusercontent.com/59892368/210762509-d3078bc5-8c0c-4765-84f7-cf52532215d4.svg',
        redux: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285182129-c6253fa0-0b1a-4281-9e6e-f55c3278beb6.svg',
        ruby: 'https://user-images.githubusercontent.com/59892368/215260498-fefc4d46-7ff1-470c-a011-f73fe070c798.svg',
        rust: 'https://user-images.githubusercontent.com/59892368/215260552-e120de00-00a0-4058-9e6f-83e10f552844.svg',
        salesforce: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285182197-ff6e769b-a788-41e1-aea5-30af093f0d0b.svg',
        sass: 'https://user-images.githubusercontent.com/59892368/210762521-7383ac1d-c896-4829-b531-61c9a4f0d7ea.svg',
        scala: 'https://user-images.githubusercontent.com/59892368/215260549-52bfb07f-bbf8-47fe-bc69-222c6211520a.svg',
        sequelize: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/285182291-2166a7ff-8217-4dc9-91e2-136a3ff7cd4e.svg',
        spring: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287532120-3da3c4d2-8b53-42b7-a0f6-a14487a6f291.svg',
        sqlite: 'https://user-images.githubusercontent.com/59892368/215260548-83c41e10-09c6-4ddf-8e12-f56746d6b0f6.svg',
        storybook: 'https://user-images.githubusercontent.com/59892368/215260547-8d55e026-9652-45af-81b7-54f8e4c04d87.svg',
        styledcomponents: 'https://user-images.githubusercontent.com/59892368/210762512-f8123c30-3992-4789-abe0-314fdcf45fe3.svg',
        swagger: 'https://user-images.githubusercontent.com/59892368/215260545-7ecf92e0-a09f-459b-83aa-e7f7ace9c3dc.svg',
        switch: 'https://user-images.githubusercontent.com/59892368/215260544-65e39534-eff5-405d-8739-49271ce21d18.svg',
        tailwind: 'https://user-images.githubusercontent.com/59892368/215260543-69c977bb-072a-4ed8-bdbc-6d2319098fcf.svg',
        typescript: 'https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg',
        visualstudio: 'https://user-images.githubusercontent.com/59892368/216786259-d508335d-169c-4d37-8bfc-152f1665dca3.svg',
        visualstudiocode: 'https://user-images.githubusercontent.com/59892368/216786258-69130dda-076f-4811-8ce9-e9d9bb37e603.svg',
        vitejs: 'https://user-images.githubusercontent.com/59892368/218274365-3eae86f7-7953-4209-b5e7-466c8335caa2.svg',
        vuejs: 'https://user-images.githubusercontent.com/59892368/215260542-defd6142-e8a8-44f5-8c8a-c6dfaf3d114a.svg',
        yarn: 'https://github-production-user-asset-6210df.s3.amazonaws.com/59892368/287774024-f3af28e4-40c9-4b02-b5e4-c33702c2fca0.svg',
    };

    // 64px
    const projectIcons = {
        art: 'https://user-images.githubusercontent.com/59892368/212994060-8d1644c7-96d7-4f3b-8e94-65ff76db0c92.svg',
        artificialintelligence: 'https://user-images.githubusercontent.com/59892368/212984565-a424b06e-db5e-464a-a5df-ddf7c9bab6ad.svg',
        dashboard: 'https://user-images.githubusercontent.com/59892368/212991791-588a6c13-795e-47aa-b496-8bdbaa3cac30.svg',
        education: 'https://user-images.githubusercontent.com/59892368/212284904-0b4f29fa-4141-4212-b516-d4e4fcdb8519.svg',
        game: 'https://user-images.githubusercontent.com/59892368/212984732-79dd44aa-23a5-4b83-ae28-7a2ddd443032.svg',
        landingpage: 'https://user-images.githubusercontent.com/59892368/212984364-88a0808b-a8d1-440c-b74e-f82bc3e28748.svg',
        personalwebsite: 'https://user-images.githubusercontent.com/59892368/213131421-fa77f07c-9120-4b40-859d-2bd799de6681.svg',
        productivity: 'https://user-images.githubusercontent.com/59892368/212994727-f05595d9-53b7-43a5-b974-b27fa2557653.svg',
        security: 'https://user-images.githubusercontent.com/59892368/212985266-a658da1c-64ba-46b7-a069-a148ca217be9.svg',
        store: 'https://user-images.githubusercontent.com/59892368/213137554-83aa6798-9487-4d1b-a260-fd2035adaaad.svg',
    };

    return {
        stackIcons,
        projectIcons,
        IconsData,
    };
}
