import { fetchGitHubBanner } from '../api/fetchGitHubBanner';

export interface IBanner {
    download_url: string;
}

/**
 * @param {string} usernameGitHub - Insert your username GitHub Ex.: https://github.com/USERNAME
 * @param {string} repositoryName - Insert the repository name
 * @returns {(Promise<string[])} - banners_url[] return an array with banner urls
 */

export async function _handleBanner(usernameGitHub: string, repositoryName: string): Promise<string[]> {
    const banners_url: string[] = [];

    await fetchGitHubBanner(usernameGitHub, repositoryName).then((repositorie_Banners: IBanner[]) => {
        repositorie_Banners.forEach((item: IBanner) => {
            if (item.download_url.includes('banner')) {
                banners_url.push(item.download_url);
            }
        });
    });

    return banners_url;
}
