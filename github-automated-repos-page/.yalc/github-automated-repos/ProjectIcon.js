import React from 'react';
import { IconsData } from './hooks/useGithubAutomatedRepos';
export function ProjectIcon({ iconItem, className }) {
    const { iconsProjects } = IconsData();
    return (React.createElement("div", null, iconsProjects[iconItem] ? (React.createElement("img", { className: className, alt: iconsProjects[iconItem], src: iconsProjects[iconItem] })) : (React.createElement(React.Fragment, null, " "))));
}
