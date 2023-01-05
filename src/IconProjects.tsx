
import {useGithubAutomatedRepos} from "./hooks/useGithubAutomatedRepos"
import React from 'react'
type Props = {
    iconItem: string,
    className?: string
}

export function IconProjects({ iconItem,className}: Props) {
    const { iconsProjects } = useGithubAutomatedRepos()
    return (
        iconsProjects[iconItem as never] ? (<img className={className} src={iconsProjects[iconItem as never]}></img>) : (<></>)
    )

}