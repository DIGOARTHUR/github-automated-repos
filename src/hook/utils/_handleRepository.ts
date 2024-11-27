import { fetchGitHubAPI } from '../api/fetchGitHubAPI';
import { _handleBanner } from './_handleBanner';

export interface IGithubRepos {
    name: string;
    topics: string[];
    html_url: string;
    description: string;
    id: number;
    homepage: string;
    banner: string[];
}

/**
 * @param {string} usernameGitHub - Insert your username GitHub Ex.: https://github.com/USERNAME
 * @param {string} keyWordDeploy - Insert a keyword chosen by you. - This key is responsible for managing your projects on GitHub in topics field Ex.: https://github.com/DIGOARTHUR/github-automated-repos#--about-library-.
 * @param {React.Dispatch<React.SetStateAction<IGithubRepos[]>} setRepositoriesData  - Insert <useState> function to receive data from the GitHub API linked to the keyword. !! Don't forget to enter keywords in GitHub projects. !!
 * @param {React.Dispatch<React.SetStateAction<boolean>} setLoading  - Insert <useState> function to receive loading states.
 * @param {React.Dispatch<React.SetStateAction<string>} setError - Insert <useState> function to receive request error message
 */

export async function _handleRepository(
    usernameGitHub: string,
    keyWordDeploy: string,
    setRepositoriesData: React.Dispatch<React.SetStateAction<IGithubRepos[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>
) {
    setLoading(true);
    try {
        const jsonData = await fetchGitHubAPI(usernameGitHub);

        const datafilter = jsonData.filter((item: IGithubRepos) => item.topics.includes(keyWordDeploy));

        const repositories = await Promise.all(
            datafilter.map(async (item: IGithubRepos) => {
                const banner = await _handleBanner(usernameGitHub, item.name);
                return {
                    id: item.id,
                    name: item.name,
                    html_url: item.html_url,
                    description: item.description,
                    topics: item.topics,
                    homepage: item.homepage,
                    banner,
                };
            })
        );

        setRepositoriesData(repositories);
    } catch (err) {
        setError((err as Error).message);
    } finally {
        setLoading(false);
    }
}
