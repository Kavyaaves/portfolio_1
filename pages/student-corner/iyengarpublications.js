import Link from "next/link"
import prisma from '../../utils/db'
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
function IyengarPublications({ data }) {
    console.log(data)
    return (
        < div className='' >
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
