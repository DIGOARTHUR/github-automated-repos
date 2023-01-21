
import { useEffect, useState } from 'react';
import './styles.scss';
import { useGithubAutomatedRepos } from 'github-automated-repos';
import { Card } from '../../../../components/Card';
export function StackIcons() {
    const { iconSkills } = useGithubAutomatedRepos()
    console.log(iconSkills)
    const [stackIconKeys, setStackIconKeys] = useState([])
    const [stackIconValues, setStackIconValues] = useState([])
    useEffect(() => {
        {/*Put here your github Name*/ }
        setStackIconKeys(Object.keys(iconSkills))
        setStackIconValues(Object.values(iconSkills))
    }, [])
    return (
        <div className="stack_Conteiner">
            <p>Stack Icons</p>
            <hr />
            <br />
            <ul className="stack_Content">
                {
                    stackIconValues.map((item, index) => {
                        return (
                            <Card key={index} item={item} iconKeys={stackIconKeys[index]} />
                        )
                    })
                }


            </ul>
        </div>
    )
}