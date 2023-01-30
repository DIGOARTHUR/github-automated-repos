import { IconsData } from "./hooks/useGithubAutomatedRepos"
import React from 'react'

type Props = {
    iconItem: string
    className?: string
}

export function StackIcon({ iconItem, className }: Props) {
    const { iconStacks, iconsProjects } = IconsData()
    return (
        iconItem == "deploy" || iconsProjects[iconItem as never] ? (<></>) : (

            <img className={className} src={iconStacks[iconItem as never]}></img>

        )
    )
}


