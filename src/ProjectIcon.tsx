import React from 'react';
import { IconsData } from './hooks/useGithubAutomatedRepos';

type Props = {
  iconItem: string;
  className?: string;
};

export function ProjectIcon({ iconItem, className }: Props) {
  const { iconsProjects } = IconsData();
  return (
    <div>
      {iconsProjects[iconItem as never] ? (
        <img
          className={className}
          alt={iconsProjects[iconItem as never]}
          src={iconsProjects[iconItem as never]}
        />
      ) : (
        <> </>
      )}
    </div>
  );
}
