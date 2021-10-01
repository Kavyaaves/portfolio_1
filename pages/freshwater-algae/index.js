import Head from 'next/head';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Log2 from '../../components/Log2';
import NavBar from '../../components/NavBar';
import prisma from '../../utils/db';

function freshwaterAlgae({ freshwater }) {

    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <div className='w-screen h-screen overflow-x-hidden'>
            <Head>
                <title>Bakthavachalam Babu - Freshwater Algae</title>
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    rel='stylesheet'
                    type='text/css'
                    charSet='UTF-8'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap'
                    rel='stylesheet'
                />
                <script src='https://unpkg.com/popper.js@1/dist/umd/popper.min.js'></script>
                <script src='https://unpkg.com/tippy.js@4'></script>
            </Head>

            <body className='bg-falls bg-fixed bg-cover bg-center bg-no-repeat' >
                <NavBar />
                <div className='md:p-2 pt-5 max-w-4xl relative mx-auto'>
                    <div className='bg-primary relative rounded-lg p-10 w-full h-full'>
                        <Log2 data={freshwater} />
                    </div>
                </div>
                <br />
                {isVisible && (
                    <button onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center">
                        <div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
                    </button>
                )}

                <br />
            </body >


        </ div >
    );
}

export default freshwaterAlgae;


export const getStaticProps = async () => {

    const charophyta = await prisma.freshwater.findMany({ where: { "division": 'Charophyta' }, orderBy: { "name": "asc" } });
    const chlorophyta = await prisma.freshwater.findMany({ where: { "division": 'Chlorophyta' }, orderBy: { "name": "asc" } });
    const glaucophyta = await prisma.freshwater.findMany({ where: { "division": 'Glaucophyta' }, orderBy: { "name": "asc" } });
    const ochrophyta = await prisma.freshwater.findMany({ where: { "division": 'Ochrophyta' }, orderBy: { "name": "asc" } });
    const rhodophyta = await prisma.freshwater.findMany({ where: { "division": 'Rhodophyta' }, orderBy: { "name": "asc" } });

    return { props: { freshwater: { charophyta, chlorophyta, glaucophyta, ochrophyta, rhodophyta } } };
};