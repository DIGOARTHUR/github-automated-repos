import React from 'react';

import { IconsData } from '../hooks/useGithubAutomatedRepos';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(topics)...
 * @param {string} className - Optional: style className.
 * @returns {<img/>} - Return tag img, project svg icon.
 */

export function ProjectIcons({ itemTopics, className }: Props) {
    const { projectIcons } = IconsData();
    return (
        <div>
            {projectIcons[itemTopics as never] ? (
                <img className={className} alt={projectIcons[itemTopics as never]} src={projectIcons[itemTopics as never]} />
            ) : (
                <> </>
            )}
        </div>
    );
}
