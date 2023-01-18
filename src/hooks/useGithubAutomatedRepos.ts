

export function useGithubAutomatedRepos() {


    interface IGithubRepos {
        name: string;
        topics: [];
        html_url: string;
        description: string;
        id: number;

    }


    function dataReposGithub(data: [], keyWordDeploy: string) {
        let dataFilter = []
        dataFilter = data.filter((item: IGithubRepos) => {
            return item.topics.includes(keyWordDeploy as never)
        })

        return dataFilter.map((item: IGithubRepos) => {
            return {
                id: item.id,
                name: item.name,
                html_url: item.html_url,
                description: item.description,
                topics: item.topics
            }
        })


    }

    const nameSkills = {
        css3: "https://user-images.githubusercontent.com/59892368/210762519-fc191098-1198-4668-9eb5-d0c1481da8c7.svg",
        expo: 'https://user-images.githubusercontent.com/59892368/210762516-b48ee0ef-9d7b-4d86-951b-b80515c39783.svg',
        html5: "https://user-images.githubusercontent.com/59892368/210755124-715c0580-95cc-46a7-bf17-5854e0450f4d.svg",
        javascript: 'https://user-images.githubusercontent.com/59892368/210762520-8226f647-a814-4723-8e6d-ed0334550838.svg',
        nextjs: "https://user-images.githubusercontent.com/59892368/210762514-59814e6d-5cc8-4981-aa11-904b83a51d40.svg",
        nodejs: 'https://user-images.githubusercontent.com/59892368/210762525-21dfac80-b121-4517-b3dd-3f62fe413d5a.svg',
        react: 'https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg',
        reacticons: "https://user-images.githubusercontent.com/59892368/210762509-d3078bc5-8c0c-4765-84f7-cf52532215d4.svg",
        sass: "https://user-images.githubusercontent.com/59892368/210762521-7383ac1d-c896-4829-b531-61c9a4f0d7ea.svg",
        styledcomponents: "https://user-images.githubusercontent.com/59892368/210762512-f8123c30-3992-4789-abe0-314fdcf45fe3.svg",
        typescript: 'https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg',
    };

    //50px 
    const iconsProjects = {
        art: 'https://user-images.githubusercontent.com/59892368/212994060-8d1644c7-96d7-4f3b-8e94-65ff76db0c92.svg',
        artificialintelligence: 'https://user-images.githubusercontent.com/59892368/212984565-a424b06e-db5e-464a-a5df-ddf7c9bab6ad.svg',
        dashboard: 'https://user-images.githubusercontent.com/59892368/212991791-588a6c13-795e-47aa-b496-8bdbaa3cac30.svg',
        education: 'https://user-images.githubusercontent.com/59892368/212284904-0b4f29fa-4141-4212-b516-d4e4fcdb8519.svg',
        game: 'https://user-images.githubusercontent.com/59892368/212984732-79dd44aa-23a5-4b83-ae28-7a2ddd443032.svg',
        landingpage: 'https://user-images.githubusercontent.com/59892368/212984364-88a0808b-a8d1-440c-b74e-f82bc3e28748.svg',
        personalwebsite: 'https://user-images.githubusercontent.com/59892368/213131421-fa77f07c-9120-4b40-859d-2bd799de6681.svg',
        productivity: 'https://user-images.githubusercontent.com/59892368/212994727-f05595d9-53b7-43a5-b974-b27fa2557653.svg',
        security: 'https://user-images.githubusercontent.com/59892368/212985266-a658da1c-64ba-46b7-a069-a148ca217be9.svg',
        store: "https://user-images.githubusercontent.com/59892368/213137554-83aa6798-9487-4d1b-a260-fd2035adaaad.svg"
    };



    return {
        'dataReposGithub': dataReposGithub,
        "iconSkills": nameSkills,
        "iconsProjects": iconsProjects

    }
}