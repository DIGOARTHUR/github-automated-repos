import React from 'react';

import { IconsData } from './hooks/useGithubAutomatedRepos';

type Props = {
    iconItem: string;
    className?: string;
};
export function StackIcons({ iconItem, className }: Props) {
    const { stackIcons, projectIcons } = IconsData();
    return iconItem === 'deploy' || projectIcons[iconItem as never] ? (
        <> </>
    ) : (
        <img className={className} alt={stackIcons[iconItem as never]} src={stackIcons[iconItem as never]} />
    );
}
