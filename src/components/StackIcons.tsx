import React from 'react';

import { IconsData } from '../hooks/useGithubAutomatedRepos';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(itemTopics) ... iconStack={itemTopics}
 * @param {string} className - Optional: style className.
 * @returns {<img/>} - Return tag img, stack svg icon.
 */
export function StackIcons({ itemTopics, className }: Props) {
    const { stackIcons, projectIcons } = IconsData();
    return itemTopics === 'deploy' || projectIcons[itemTopics as never] ? (
        <> </>
    ) : (
        <img className={className} alt={stackIcons[itemTopics as never]} src={stackIcons[itemTopics as never]} />
    );
}
