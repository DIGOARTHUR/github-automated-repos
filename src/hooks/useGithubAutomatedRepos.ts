

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
        art: 'https://user-images.githubusercontent.com/59892368/212304957-5a71cb85-f8c3-4f48-a770-50575ea9dd41.svg',
        artificialIntelligence: 'https://user-images.githubusercontent.com/59892368/212568355-6f5fb598-5ecf-4829-b9cc-c0a689798388.svg',
        dashboard: 'https://user-images.githubusercontent.com/59892368/212285962-5b7182df-1604-4ad3-8e07-ecbb1231e338.svg',
        education: 'https://user-images.githubusercontent.com/59892368/212432767-ac2a2be0-980f-4e18-9c03-e22eeaa5dae2.svg',
        game: 'https://user-images.githubusercontent.com/59892368/212290788-7064ed03-d71f-4357-9fa0-612fc63063ca.svg',
        landingpage: 'https://user-images.githubusercontent.com/59892368/212291329-865904f9-f3d7-41b6-ae07-cdadda2e1503.svg',
        personalwebsite: 'https://user-images.githubusercontent.com/59892368/212290489-e3f86157-0bab-42b0-aa53-9160f6aad7b5.svg',
        productivity: 'https://user-images.githubusercontent.com/59892368/212288262-3189494c-bf07-4562-af34-53ac98cdee36.svg',
        security: 'https://user-images.githubusercontent.com/59892368/212432767-ac2a2be0-980f-4e18-9c03-e22eeaa5dae2.svg',
        store: "https://user-images.githubusercontent.com/59892368/212431125-a8b06579-50e8-4988-b640-a64af898c73a.svg"
    };



    return {
        'dataReposGithub': dataReposGithub,
        "iconSkills": nameSkills,
        "iconsProjects": iconsProjects

    }
}