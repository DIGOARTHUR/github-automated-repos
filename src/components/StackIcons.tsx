import React from 'react';

import { stackIconsURL } from '../icons/stackIconsURL';

type PropsStackIcons = {
    itemTopics: string;
    className?: string;
    style?: React.CSSProperties;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(icon) ... itemTopics={icon}
 * @param {string} className - Optional: style className - TailwindCSS.
 * @param {React.CSSProperties} style - Optional: style CSS Properties.
 * @returns {ReactNode} - Return tag img(SVG).
 */
export function StackIcons({ itemTopics, className, style }: PropsStackIcons): JSX.Element | null {
    return itemTopics === 'deploy' ? (
        <> </>
    ) : (
        <img style={style} className={className} alt={stackIconsURL[itemTopics]} src={stackIconsURL[itemTopics]} />
    );
}
