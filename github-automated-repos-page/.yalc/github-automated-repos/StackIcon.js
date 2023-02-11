import React from 'react';
import { IconsData } from './hooks/useGithubAutomatedRepos';
export function StackIcon({ iconItem, className }) {
    const { iconStacks, iconsProjects } = IconsData();
    return iconItem === 'deploy' || iconsProjects[iconItem] ? (React.createElement(React.Fragment, null, " ")) : (React.createElement("img", { className: className, alt: iconStacks[iconItem], src: iconStacks[iconItem] }));
}
