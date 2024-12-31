import React from 'react';
import { stackIconsURL } from '../icons/stackIconsURL';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(itemTopics) ...
 * @param {string} className - Optional: style className.
 * @returns {ReactNode} - Return tag img, stack svg icon.
 */
export function StackIcons({ itemTopics, className }: Props) {
    return itemTopics === 'deploy' ? (
        <> </>
    ) : (
        <img className={className} alt={stackIconsURL[itemTopics]} src={stackIconsURL[itemTopics]} />
    );
}
