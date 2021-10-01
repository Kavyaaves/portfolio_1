import Head from 'next/head';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Log from '../../components/Log';
import NavBar from '../../components/NavBar';
import prisma from '../../utils/db';
import Blog from '../../components/Blog';
import { useRouter } from 'next/router';
function marineAlgaeDetail({ data }) {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='w-screen h-screen overflow-x-hidden'>
            <Head>
                <title>Bakthavachalam Babu - Marine Algae</title>
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

            <body className='bg-marine_single bg-fixed bg-cover bg-center bg-no-repeat' >

                <NavBar />
                <div className='p-2  pt-5 max-w-4xl relative mx-auto'>
                    <div className='bg-primary relative rounded-lg p-10 w-full'>
                        {/* <Log data={marine} /> */}
                        {data ? <Blog data={data} /> : ""}
                    </div>
                </div>
                <br />


                <br />
            </body >


        </ div >
    );
}

export default marineAlgaeDetail;

export async function getStaticProps(ctx) {
    const data = await prisma.marine.findMany({ where: { "name": ctx.params.name } });

    return {
        props: { data: data[0] || null }
    };
}
export async function getStaticPaths() {
    const data = await prisma.marine.findMany();
    let paths = data.map(post => ({
        params: {
            name:
                post.name
        }
    }))
    return {
        paths,
        fallback: true,
    };
}


