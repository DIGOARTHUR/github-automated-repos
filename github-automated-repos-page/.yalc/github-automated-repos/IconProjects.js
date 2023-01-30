import { IconsData } from "./hooks/useGithubAutomatedRepos";
import React from 'react';
export function IconProjects({ iconItem, className }) {
    const { iconsProjects } = IconsData();
    return (React.createElement("div", null, iconsProjects[iconItem] ? (React.createElement("img", { className: className, src: iconsProjects[iconItem] })) : (React.createElement(React.Fragment, null))));
}
