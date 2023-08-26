import { ThreeDots  } from  'react-loader-spinner'

export default function Loader() {
    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#99A1B3"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}