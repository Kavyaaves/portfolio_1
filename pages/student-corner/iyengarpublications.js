import Link from "next/link"
import prisma from '../../utils/db'
import Head from 'next/head';
import NavBar from '../../components/NavBar';
function IyengarPublications({ data }) {
    return (
        < div className='' >
            <Head>
                <title>MOP Iyengar's Publications - Bakthavachalam Babu</title>
                <html lang="en">

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="description" content='Information and Publications of Father of Indian Alogology - MOP Iyengar are attached here. Algae database - Marine and Freshwater Algae images with description and data'></meta>
                    <meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
                    <meta property="og:description" content='Information and Publications of Father of Indian Alogology - MOP Iyengar are attached here. Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
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
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                    <link rel="manifest" href="favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </html>
            </Head>
            <body className='bg-research bg-cover bg-fixed bg-no-repeat'>
                <div>
                    <NavBar />
                </div>
                <div className='p-5'>

                    <div className=' text-center'>
                        <div className='max-w-4xl m-auto bg-primary rounded-lg'>
                            <div className='p-10'>
                                <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                                    <span className=''>MOP Iyengar Publications</span>
                                </h2>
                                <br />
                                <div className='p-5'>
                                    {data.map((item, i) => (
                                        <ul key={i} >
                                            <li className="text-base text-white list-disc text-left">
                                                <a href={"/files/IyengarPDF/" + item.name + ".pdf"} target="blank">
                                                    <span className="hover:underline cursor-pointer">{item.name}</span></a>
                                            </li>

                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </body>
        </div >
    );
}

export default IyengarPublications

export async function getStaticProps() {
    const data = await prisma.iyengar.findMany();

    return {
        props: { data: data || [] }
    };
}
