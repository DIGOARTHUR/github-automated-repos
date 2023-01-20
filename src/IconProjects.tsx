
import { useGithubAutomatedRepos } from "./hooks/useGithubAutomatedRepos"
import React from 'react'
type Props = {
    iconItem: string,
    className?: string
}

export function IconProjects({ iconItem, className }: Props) {
    const { iconsProjects } = useGithubAutomatedRepos()
    return (
        <div>
            {
                iconsProjects[iconItem as never] ? (<img className={className} src={iconsProjects[iconItem as never]}></img>) : (<></>)
            }
        </div>

    )

}