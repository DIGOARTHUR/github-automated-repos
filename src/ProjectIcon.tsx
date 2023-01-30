
import { IconsData} from "./hooks/useGithubAutomatedRepos"
import React from 'react'
type Props = {
    iconItem: string,
    className?: string
}

export function ProjectIcon({ iconItem, className }: Props) {
    const { iconsProjects } = IconsData()
    return (
        <div>
            {
                iconsProjects[iconItem as never] ? (<img className={className} src={iconsProjects[iconItem as never]}></img>) : (<></>)
            }
        </div>

    )

}