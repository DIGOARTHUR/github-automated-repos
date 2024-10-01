import React from 'react';

import { projectIconsURL } from '../icons/projectIconsURL';

type Props = {
    itemTopics: string;
    className?: string;
};

/**
 * @param {string} itemTopics - Mandatory: ex.: item.topics.map(topics)...
 * @param {string} className - Optional: style className.
 * @returns {ReactNode} - Return tag img, project svg icon.
 */

export function ProjectIcons({ itemTopics, className }: Props) {
   
    return (
        <div>
            {projectIconsURL[itemTopics] ? (
                <img className={className} alt={projectIconsURL[itemTopics]} src={projectIconsURL[itemTopics]} />
            ) : (
                <> </>
            )}
        </div>
    );
}
