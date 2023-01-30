import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './styles.scss';
import { IconsData } from 'github-automated-repos';
import { Card } from '../../../../components/Card';
export function StackIcons() {


    const { iconStacks } = IconsData()


    const [stackIconKeys, setStackIconKeys] = useState([])
    const [stackIconValues, setStackIconValues] = useState([])
    useEffect(() => { 
        {/*Put here your github Name*/ }
        setStackIconKeys(Object.keys(iconStacks))
        setStackIconValues(Object.values(iconStacks))
    }, [])
    return (
        <div className="stack_Conteiner">
            <h1 className='document_Title'>Stack Icons</h1>
            <hr />
            <br />
            <ul className="stack_Content">
                {
                    stackIconValues.map((item, index) => {
                        return (

                            <Card key={index} item={item} iconKey={stackIconKeys[index]} />
                        )
                    })
                }

                <ToastContainer />
            </ul>
        </div>
    )
}