import Head from 'next/head';
import { useState, useEffect } from 'react'
import Category1 from '../../components/Category1';
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
        <div>
            <Head>
                <title>Freshwater Algae - Bakthavachalam Babu</title>
                {/* <html ="en"> */}

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="description" content='Freshwater Algae log with description. Algae database - Marine and Freshwater Algae images with description and data'></meta>
                    <meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
                    <meta property="og:description" content='Freshwater Algae log with description. Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
                    <meta name="robots" content="index, follow" />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap'
                        rel='stylesheet'
                    />
                    <meta name="google" content="notranslate" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                {/* </html> */}
            </Head>

            <body className='bg-falls bg-fixed bg-cover bg-center bg-no-repeat overflow-x-hidden' >
                <NavBar />
                <div className='p-5'>
                    <div className='bg-primary relative rounded-lg p-10 min-h-screen  max-w-4xl mx-auto'>
                        <Category1 data={freshwater} />
                    </div>
                </div>
                <br />
                {isVisible && (
                    <button aria-label="scroll" onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center">
                        <div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
                    </button>
                )}
            </body >
        </div>
    )
}

export default freshwaterAlgae;


export const getStaticProps = async () => {
    const charophyta = await prisma.freshwater.findMany({ where: { "division": 'Charophyta' }, orderBy: { "name": "asc" } });
    const chlorophyta = await prisma.freshwater.findMany({ where: { "division": 'Chlorophyta' }, orderBy: { "name": "asc" } });
    const euglenophyta = await prisma.freshwater.findMany({ where: { "division": 'Euglenophyta' }, orderBy: { "name": "asc" } });
    const glaucophyta = await prisma.freshwater.findMany({ where: { "division": 'Glaucophyta' }, orderBy: { "name": "asc" } });
    const ochrophyta = await prisma.freshwater.findMany({ where: { "division": 'Ochrophyta' }, orderBy: { "name": "asc" } });
    const rhodophyta = await prisma.freshwater.findMany({ where: { "division": 'Rhodophyta' }, orderBy: { "name": "asc" } });

    return { props: { freshwater: { charophyta, euglenophyta, chlorophyta, glaucophyta, ochrophyta, rhodophyta } } };
};