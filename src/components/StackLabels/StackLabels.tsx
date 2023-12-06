import React from 'react';

import { IconsData } from '../../hooks/useGithubAutomatedRepos';
import { css } from './styles.js';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(itemTopics)...
 * @param {string} className - Optional: style className.
 * @returns {<p/>} - Return tag p, stack text.
 */
export function StackLabels({ itemTopics, className = 'styleStackLabels' }: Props) {
    const { projectIcons, stackIcons } = IconsData();

    if (projectIcons[itemTopics as never]) {
        return <> </>;
    }
    if (stackIcons[itemTopics as never]) {
        return (
            <>
                <style>{css}</style>
                <p className={className}>{itemTopics}</p>
            </>
        );
    }
}
