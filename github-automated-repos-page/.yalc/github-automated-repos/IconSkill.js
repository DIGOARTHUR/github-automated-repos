import { useGithubAutomatedRepos } from "./hooks/useGithubAutomatedRepos";
import React from 'react';
export function IconSkill({ iconItem, className }) {
    const { iconSkills, iconsProjects } = useGithubAutomatedRepos();
    return (iconItem == "deploy" || iconsProjects[iconItem] ? (React.createElement(React.Fragment, null)) : (React.createElement("img", { className: className, src: iconSkills[iconItem] })));
}
