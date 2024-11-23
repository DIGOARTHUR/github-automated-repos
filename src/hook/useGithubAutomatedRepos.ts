import { useEffect, useState } from 'react';

import { _handleRepository } from './utils/_handleRepository';

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
export function useGitHubAutomatedRepos(usernameGitHub: string, keyWordDeploy: string): IGitHubAutomatedRepos {
    const [repositoriesData, setRepositoriesData] = useState<IGithubRepos[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        _handleRepository(usernameGitHub, keyWordDeploy, setRepositoriesData, setLoading, setError);
    }, []);

    return { repositoriesData, loading, error };
}
