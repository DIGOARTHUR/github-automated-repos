
/**
 * @param {string} usernameGitHub - Insert your username GitHub Ex.: https://github.com/USERNAME
 * @param {string} repositoryName - Insert a keyword chosen by you. - This key is responsible for managing your projects on GitHub in topics field Ex.: https://github.com/DIGOARTHUR/github-automated-repos#--about-library-.
 * @returns {string} - Return imageURL, address to acess image
*/ 
    
    const typeImg = ['svg', 'png'];
    export const checkImage = (usernameGitHub: string, repositoryName: string): string => {
        let imageURL = '';
        typeImg.map((type) => {
            const checkURL = `https://raw.githubusercontent.com/${usernameGitHub}/${repositoryName}/main/src/assets/imgs/banner.${type}`;
            const http = new XMLHttpRequest();
            http.open('HEAD', checkURL, false);
            http.send();

            if (http.status === 200) {
                imageURL = checkURL;
            }
        });
        return imageURL;
    }