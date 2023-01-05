import { useGithubAutomatedRepos } from "./hooks/useGithubAutomatedRepos"
import React from 'react'

type Props = {
    iconItem: string
    className?: string
}

export function IconSkill({ iconItem, className }: Props) {
    const { iconSkills, iconsProjects } = useGithubAutomatedRepos()
    return (
        iconItem == "deploy" || iconsProjects[iconItem as never] ? (<></>) : (

            <img className={className} src={iconSkills[iconItem as never]}></img>

        )
    )
}


