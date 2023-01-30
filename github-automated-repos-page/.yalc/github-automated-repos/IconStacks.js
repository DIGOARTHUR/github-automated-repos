import { IconsData } from "./hooks/useGithubAutomatedRepos";
import React from 'react';
export function IconStacks({ iconItem, className }) {
    const { iconStacks, iconsProjects } = IconsData();
    return (iconItem == "deploy" || iconsProjects[iconItem] ? (React.createElement(React.Fragment, null)) : (React.createElement("img", { className: className, src: iconStacks[iconItem] })));
}
