export async function fetchGitHubBanner(usernameGitHub: string, repositoryName: string) {
    try {
        const response = await fetch(`https://api.github.com/repos/${usernameGitHub}/${repositoryName}/contents/src/assets/imgs`);
        if (!response.ok) {
            throw new Error(`Unsuccessful request: ${response.statusText}`);
        }
        const jsonData = await response.json();

        return jsonData;
    } catch (err) {
        return err as Error;
    }
}
