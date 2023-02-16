import React from 'react';

import { IconsData } from './hooks/useGithubAutomatedRepos';

type Props = {
    iconItem: string;
    className?: string;
};
export function StackIcon({ iconItem, className }: Props) {

    const { iconStacks, iconsProjects } = IconsData();
    return iconItem === 'deploy' || iconsProjects[iconItem as never] ? (
        <> </>
    ) : (
        <img className={className} alt={iconStacks[iconItem as never]} src={iconStacks[iconItem as never]} />
    );

}
