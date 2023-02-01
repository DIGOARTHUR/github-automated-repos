import { IconsData } from "./hooks/useGithubAutomatedRepos"
import React from 'react'

type Props = {
    iconItem: string
    className?: string
}

export function StackIcon({ iconItem, className }: Props) {
    const {stackIconsData, projectIconsData } = IconsData()
    return (
        iconItem == "deploy" || projectIconsData[iconItem as never] ? (<></>) : (

            <img className={className} src={stackIconsData[iconItem as never]}></img>

        )
    )
}


