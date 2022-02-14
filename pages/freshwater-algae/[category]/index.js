import Head from 'next/head';
import { useState, useEffect } from 'react'
import NavBar from '../../../components/NavBar';
import prisma from '../../../utils/db';
import Link from 'next/link';

const index = ({ data }) => {
    return (
        <div>
            <Head>
                <title>{data ? data.name : ''} - Freshwater Algae - Bakthavachalam Babu</title>
                <html lang="en">
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={`${data && data?.name} alga details is specified here. Also information of hundreds of freshwater and marine algae are listed here. Algae database - Marine and Freshwater Algae images with description and data`}></meta>
                    <meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
                    <meta property="og:description" content={`${data && data?.name} alga details is specified here. Also information of hundreds of freshwater and marine algae are listed here. Algae database - Marine and Freshwater Algae images with description and data`} key="ogdesc" />
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
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </html>
            </Head>

            <body className='bg-freshwater_single bg-fixed bg-cover bg-center bg-no-repeat' >
                <NavBar />
                <div className='p-5'>
                    <div className='bg-primary rounded-lg p-10 w-full max-w-4xl min-h-screen relative mx-auto'>
                        {/* <div className="w-full md:flex flex-direction-row pl-8 flex items-center justify-center"> */}
                        {data && <div className="md:w-full px-8 items-center justify-center">
                            <p className="text-lg text-yellow-500 text-center p-5 pl-0 font-bold uppercase">{data[0]?.division}</p>
                            {data.map((d, i) => {
                                return (
                                    <ul key={i} className="pr-8 list-disc">
                                        <li className="text-base text-white  items-center justify-center w-full">
                                            <Link href={"/freshwater-algae/" + d.division + "/" + d.name} >
                                                <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                        </li>
                                    </ul>
                                )
                            })}
                            {/* </div> */}
                        </div>}
                    </div>
                </div>
                <br />
            </body >
        </div>
    )
}

export default index
export async function getStaticProps(ctx) {
    const data = await prisma.freshwater?.findMany({ where: { "division": ctx.params.category } });

    return {
        props: { data: data || [] }
    };
}
export async function getStaticPaths() {
    const data = await prisma.freshwater?.findMany();
    let paths = data?.map(post => ({
        params: {
            category:
                post.division
        }
    }))
    return {
        paths: paths || [],
        fallback: true,
    };
}


