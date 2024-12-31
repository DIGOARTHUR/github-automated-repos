import { useEffect, useState } from 'react';

import { _handleBanner } from './utils/_handleBanner';

import { useQuery } from '@tanstack/react-query';
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

interface IGitHubAutomatedRepos {
    repositoriesData: IGithubRepos[];
    loading: boolean;
    error: string;
}

/**
 * @param {string} usernameGitHub - Insert your username GitHub Ex.: https://github.com/USERNAME
 * @param {string} keyWordDeploy - Insert a keyword chosen by you. - This key is responsible for managing your projects on GitHub in topics field Ex.: https://github.com/DIGOARTHUR/github-automated-repos#--about-library-.
 * @returns {(IGitHubAutomatedRepos)} - repositoriesData[] with the properties: name, topics[], html_url, description, id, homepage, banner[]. Loading to await for data. Error for a bad request.
 */
export function useGitHubAutomatedRepos(usernameGitHub: string, keyWordDeploy: string)  {
    return useQuery<IGithubRepos[]>({
        queryKey: ["githubRepos", usernameGitHub, keyWordDeploy],
        queryFn: () => fetchRepositories(usernameGitHub, keyWordDeploy),
        
      });
}
