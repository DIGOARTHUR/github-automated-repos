import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './styles.scss';
import { IconsData } from 'github-automated-repos';
import { Card } from '../../../../components/Card';
import { FcSearch } from 'react-icons/fc';

export function StackIcons() {
    const { iconStacks } = IconsData();

    const [stackIconKeys, setStackIconKeys] = useState([]);
    const [stackIconValues, setStackIconValues] = useState([]);

    const [inicialStackIconKeys, setInicialStackIconKeys] = useState([]);
    const [inicialStackIconValues, setInicialStackIconValues] = useState([]);
    useEffect(() => {
        setStackIconKeys(Object.keys(iconStacks));
        setStackIconValues(Object.values(iconStacks));

        setInicialStackIconKeys(Object.keys(iconStacks));
        setInicialStackIconValues(Object.values(iconStacks));
    }, []);

    function _handleSearch(e) {
        if (!e.target.value) {
            setStackIconKeys(inicialStackIconKeys);
            setStackIconValues(inicialStackIconValues);
            return;
        }

        const filterStackIconKeys = inicialStackIconKeys.filter((values, index) => {
            return values.includes(e.target.value.toLowerCase());
        });
        setStackIconKeys(filterStackIconKeys);
        console.log(filterStackIconKeys);

        const filterStackIconValues = filterStackIconKeys.map((iconKey) => {
            return iconStacks[iconKey];
        });

        setStackIconValues(filterStackIconValues);
    }

    return (
        <div className='stack_Conteiner'>
            <div className='stack_Header'>
                <h1 className='document_Title'>Stack Icons</h1>
                <div className='stack_searchField'>
                    <input placeholder='🔍 Search Icons' type='text' onChange={_handleSearch} />
                </div>
            </div>

            <hr />
            <br />
            <ul className='stack_Content'>
                {stackIconValues.map((item, index) => {
                    return <Card key={index} item={item} iconKey={stackIconKeys[index]} />;
                })}

                <ToastContainer />
            </ul>
        </div>
    );
}
