import { motion } from "framer-motion";
import Image from 'next/image'
const Modal = ({ images, selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedImg(null);
    };

    return (
        <div className="block h-screen overflow-auto" >
            <button
                className='text-3xl absolute  right-10 p-2 text-right focus:outline-none'
                onClick={handleClick}>
                &#10005;
            </button>
            <br />
            <div className="flex border-none mt-10 md:mt-0 justify-center p-2">
                <Image
                    className=""
                    priority
                    src={selectedImg.url}
                    alt={selectedImg.name}
                    width={600}
                    height={550}
                    quality={100}
                />
            </div>
            <p onClick={handleClick} className="text-center text-3xl">{selectedImg.name}</p>
        </div >
    );
};

export default Modal;