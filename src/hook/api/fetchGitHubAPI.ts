export async function fetchGitHubAPI(usernameGitHub: string) {
    const response = await fetch(`https://api.github.com/users/${usernameGitHub}/repos?sort=created&per_page=999`);
    if (!response.ok) {
        throw new Error(`Unsuccessful request: ${response.statusText}`);
    }
    const jsonData = await response.json();
    return jsonData;
}
