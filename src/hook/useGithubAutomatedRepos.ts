import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { _handleBanner } from './utils/_handleBanner';
import { fetchRepositories } from './utils/_handleRepository';

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
 * @param {string} usernameGitHub - Insert your GitHub username. See in your GitHub Ex.: https://github.com/USERNAME
 * @param {string} keyWordDeploy - Insert a keyword chosen by you. - This key is responsible for managing your data projects on GitHub in topics field. See in : https://github.com/DIGOARTHUR/github-automated-repos.
 * @returns {UseQueryResult<IGithubRepos[], Error>} - React Query result containing repositories data with the properties: name, topics[], html_url, description, id, homepage, banner[]. isLoading to await for data TRUE or FALSE. isLoadingError for a bad request TRUE ou FALSE.
 */
export function useGitHubAutomatedRepos(usernameGitHub: string, keyWordDeploy: string): UseQueryResult<IGithubRepos[], Error> {
    return useQuery<IGithubRepos[]>({
        queryKey: ['githubRepos', usernameGitHub, keyWordDeploy],
        queryFn: () => fetchRepositories(usernameGitHub, keyWordDeploy),
    });
}
