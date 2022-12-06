import Head from 'next/head';
import NavBar from '../../../components/NavBar';
import prisma from '../../../utils/db';
import Blog from '../../../components/Blog';

function marineAlgaeDetail({ data }) {
    return (
        <div>
            <Head>
                <title>{data ? data?.name : ''} - Marine Algae - Bakthavachalam Babu</title>
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
            </Head>

            <div className='bg-marine_single bg-fixed bg-cover bg-center bg-no-repeat' >
                <NavBar />
                <div className='p-5'>
                    <div className='bg-primary relative rounded-lg p-10 w-full max-w-4xl mx-auto'>
                        {data ? <Blog data={data} /> : ""}
                    </div>
                </div>
            </div >
        </ div >
    );
}

export default marineAlgaeDetail;

export async function getStaticProps(ctx) {
    const data = await prisma.marine.findMany({ where: { "name": ctx.params.name.toString() }, orderBy: { "name": "asc" }  });

    return {
        props: { data: data[0] || null }
    };
}
export async function getStaticPaths() {
    const data = await prisma.marine.findMany();
    let paths = data.map(post => ({
        params: {
            name:
                post.name,
            category:
                post.division
        }
    }))
    return {
        paths,
        fallback: true,
    };
}


