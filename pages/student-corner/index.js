import Head from 'next/head';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import StudentCorner from '../../components/StudentCorner';
import Tabs from '../../components/Tabs';

export default function studentCorner({ data }) {
    return (
        <div className=''>
            <Head>
                <title>Bakthavachalam Babu - Student's Corner</title>
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
            <body className='bg-research bg-cover bg-fixed bg-no-repeat'>
                <div>
                    <NavBar />
                </div>
                <div className='p-5'>

                    <div className=' text-center'>
                        <div className='max-w-4xl m-auto bg-primary rounded-lg'>
                            <div className='p-10'>
                                <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                                    <span className=''>STUDENT CORNER</span>
                                </h2>
                                <br />
                                <Tabs data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </body>
            <footer className=''>
                <Footer />
            </footer>
        </div>
    );
}


export const getStaticProps = async () => {
    const mopPub = await prisma.iyengar.findMany({ orderBy: { "name": "asc" } });
    return { props: { data: { mopPub } } };
};

