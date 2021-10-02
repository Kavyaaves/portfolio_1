import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Tabs from '../../components/Tabs';
import prisma from '../../utils/db'

export default function studentCorner({ syllabus, notes }) {
    return (
        <div className=''>
            <Head>
                <title>Student Corner - Bakthavachalam Babu</title>
                <html lang="en">

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <meta name="description" content='Indian Algologists Publications, Syllabus for M.Sc and B.Sc and Notes are linked for Students reference. Algae database - Marine and Freshwater Algae images with description and data'></meta>
                    <meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
                    <meta property="og:description" content='Indian Algologists Publications, Syllabus for M.Sc and B.Sc and Notes are linked for Students reference. Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
                    <meta name="robots" content="index, follow" />
                    <meta name="google" content="notranslate" />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap'
                        rel='stylesheet'
                    />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                    <link rel="manifest" href="favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </html>
            </Head>
            <body className='bg-studentCorner bg-cover bg-fixed bg-no-repeat'>
                <div>
                    <NavBar />
                </div>
                <div className='p-5'>
                    <div className=' text-center'>
                        <div className='max-w-4xl m-auto bg-primary rounded-lg'>
                            <div className='md:p-10 p-5'>
                                <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                                    <span className=''>STUDENT CORNER</span>
                                </h2>
                                <br />
                                <Tabs syllabus={syllabus} notes={notes} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </body>
        </div>
    );
}

export async function getStaticProps() {
    const bscSyllabus = await prisma.syllabus?.findMany({ where: { "category": 'BSc' } });
    const mscSyllabus = await prisma.syllabus?.findMany({ where: { "category": 'MSc' } });

    const notes = await prisma.notes?.findMany();

    return {
        props: {
            syllabus: { bsc: bscSyllabus || [], msc: mscSyllabus || [] },
            notes: notes || []
        }
    };
}

