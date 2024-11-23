import React, { ReactNode } from 'react';

import { projectIconsURL } from '../../icons/projectIconsURL';
import { stackIconsURL } from '../../icons/stackIconsURL';
import { css } from './styles.js';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(itemTopics)...
 * @param {string} className - Optional: style className.
 * @returns {ReactNode} - Return tag p, stack text.
 */
export function StackLabels({ itemTopics, className = 'styleStackLabels' }: Props): ReactNode {
    return itemTopics === 'deploy' || projectIconsURL[itemTopics] || stackIconsURL[itemTopics] === undefined ? (
        <> </>
    ) : (
        <>
            <style>{css}</style>
            <p className={className}>{itemTopics}</p>
        </>
    );
}
