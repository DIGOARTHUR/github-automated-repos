

import { useEffect, useState } from 'react';
import { checkImage } from './utils/checkImage';
import { fetchData } from './utils/fetchGitHubAPI';

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

    const [data, setData] = useState<IGithubRepos[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchData(usernameGitHub,keyWordDeploy,setData,setLoading,setError);
    }, [usernameGitHub, keyWordDeploy]);

    const repository = data.map((item: IGithubRepos) => ({
        id: item.id,
        name: item.name,
        html_url: item.html_url,
        description: item.description,
        topics: item.topics,
        homepage: item.homepage,
        banner: checkImage(usernameGitHub, item.name),
    }));
    return { repository, loading, error };

}


 


