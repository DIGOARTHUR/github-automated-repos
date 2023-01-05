

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
        css3:"https://user-images.githubusercontent.com/59892368/210762519-fc191098-1198-4668-9eb5-d0c1481da8c7.svg",
        expo:'https://user-images.githubusercontent.com/59892368/210762516-b48ee0ef-9d7b-4d86-951b-b80515c39783.svg',
        html5:"https://user-images.githubusercontent.com/59892368/210755124-715c0580-95cc-46a7-bf17-5854e0450f4d.svg",
        javascript:'https://user-images.githubusercontent.com/59892368/210762520-8226f647-a814-4723-8e6d-ed0334550838.svg',
        nextjs:"https://user-images.githubusercontent.com/59892368/210762514-59814e6d-5cc8-4981-aa11-904b83a51d40.svg",
        nodejs:'https://user-images.githubusercontent.com/59892368/210762525-21dfac80-b121-4517-b3dd-3f62fe413d5a.svg',
        react:'https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg',
        reacticons:"https://user-images.githubusercontent.com/59892368/210762509-d3078bc5-8c0c-4765-84f7-cf52532215d4.svg",
        sass:"https://user-images.githubusercontent.com/59892368/210762521-7383ac1d-c896-4829-b531-61c9a4f0d7ea.svg",
        styledcomponents:"https://user-images.githubusercontent.com/59892368/210762512-f8123c30-3992-4789-abe0-314fdcf45fe3.svg",
        typescript:'https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg',
    };
    
    const iconsProjects = {
        dashboard:'https://user-images.githubusercontent.com/59892368/209398825-020920ee-fc40-4723-a599-fbf8a8d47b6d.png',
        education:'https://user-images.githubusercontent.com/59892368/209398823-1ef81c8b-7125-4caa-8c2e-de13190e9304.png',
        personalwebsite:'https://user-images.githubusercontent.com/59892368/209398820-cba5a978-fed2-4145-a2fa-0478b824f812.png',
        productivity: 'https://user-images.githubusercontent.com/59892368/209398896-681b8c67-41c5-4498-8f3f-8bbf9a341a4a.svg',
        
    };
   


    return {
        'dataReposGithub': dataReposGithub,
        "iconSkills" : nameSkills,
        "iconsProjects":iconsProjects

    }
}