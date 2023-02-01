
import { IconsData} from "./hooks/useGithubAutomatedRepos"
import React from 'react'
type Props = {
    iconItem: string,
    className?: string
}

export function ProjectIcon({ iconItem, className }: Props) {
    const { projectIconsData } = IconsData()
    return (
        <div>
            {
                projectIconsData[iconItem as never] ? (<img className={className} src={projectIconsData[iconItem as never]}></img>) : (<></>)
            }
        </div>

    )

}