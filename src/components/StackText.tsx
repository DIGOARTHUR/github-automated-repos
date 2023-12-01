import React from 'react';

import './styles/StackText.css';
import { IconsData } from '../hooks/useGithubAutomatedRepos';

type Props = {
    itemText: string;
    className?: string;
};
export function StackText({ itemText, className = 'styleStackText' }: Props) {
    const { projectIcons } = IconsData();
    return itemText === 'deploy' || projectIcons[itemText as never] ? <> </> : <p className={className}>{itemText}</p>;
}
