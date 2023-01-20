
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineContentCopy } from 'react-icons/md';
import './style.scss';
export function Card({item, iconKeys}) {
    console.log(item)
    const showToastMessage = (keyIcon) => {
        toast.success(`Copied ${keyIcon} to clipboard`, {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });

        navigator.clipboard.writeText(keyIcon)
    };
    return (
        <>
            <li className="card">

 
                <img src={item}></img>

                <h2 onClick={() => showToastMessage(iconKeys)}>
                    {iconKeys}
                    <span><MdOutlineContentCopy style={{
                        width: '30px',
                        height: '30px',
                        color: 'white'

                    }} /></span>
                </h2>
            </li>
            <ToastContainer />
        </>

    )
}