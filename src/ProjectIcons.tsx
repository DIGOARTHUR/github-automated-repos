import React from 'react';

import { IconsData } from './hooks/useGithubAutomatedRepos';

type Props = {
    iconItem: string;
    className?: string;
};

export function ProjectIcons({ iconItem, className }: Props) {
    const { projectIcons } = IconsData();
    return (
        <div>
            {projectIcons[iconItem as never] ? (
                <img className={className} alt={projectIcons[iconItem as never]} src={projectIcons[iconItem as never]} />
            ) : (
                <> </>
            )}
        </div>
    );
}
