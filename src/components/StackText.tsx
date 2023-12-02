import React from 'react';

import './styles/StackText.css';
import { IconsData } from '../hooks/useGithubAutomatedRepos';

type Props = {
    itemText: string;
    className?: string;
};
export function StackText({ itemText, className = 'styleStackText' }: Props) {
    const { projectIcons, stackIcons } = IconsData();

    if (projectIcons[itemText as never]) {
        return <> </>;
    }
    if (stackIcons[itemText as never]) {
        return <p className={className}>{itemText}</p>;
    }
}
