
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
 * @param {React.Dispatch<React.SetStateAction<IGithubRepos[]>} setData  - Insert <useState> function to receive data from the GitHub API linked to the keyword. !! Don't forget to enter keywords in GitHub projects. !! 
 * @param {React.Dispatch<React.SetStateAction<boolean>} setLoading  - Insert <useState> function to receive loading states.
 * @param {React.Dispatch<React.SetStateAction<string>} setError - Insert <useState> function to receive request error message
*/ 

export const fetchData = async (usernameGitHub:string,keyWordDeploy:string, setData:React.Dispatch<React.SetStateAction<IGithubRepos[]>>, setLoading:React.Dispatch<React.SetStateAction<boolean>>,setError:React.Dispatch<React.SetStateAction<string>>) => {
    setLoading(true);
    try {
        const response = await fetch(`https://api.github.com/users/${usernameGitHub}/repos?sort=created&per_page=999`);
        if (!response.ok) {
            throw new Error(`Unsuccessful request: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData.filter((item: IGithubRepos) => item.topics.includes(keyWordDeploy)));
    } catch (err) {
        setError((err as Error).message);
    } finally {
        setLoading(false);
    }
};