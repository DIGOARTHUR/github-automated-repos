import React from 'react';

import { stackIconsURL } from '../../icons/stackIconsURL';
import { css } from './styles.js';

type PropsStackLabels = {
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
export function StackLabels({ itemTopics, className = 'styleStackLabels', style }: PropsStackLabels): JSX.Element | null {
    return itemTopics === 'deploy' || stackIconsURL[itemTopics] === undefined ? (
        <> </>
    ) : (
        <>
            <style>{css}</style>
            <p style={style} className={className}>
                {itemTopics}
            </p>
        </>
    );
}
