import Head from 'next/head';
import { useState, useEffect } from 'react'
import Link from "next/link"
import NavBar from '../../components/NavBar';
import prisma from '../../utils/db';

function marineAlgae({ marine }) {
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
    const arrayData = [
        { name: "Red Algae", division: "Rhodophyta" },
        { name: "Brown Algae", division: "Ochrophyta" },
        { name: "Green Algae", division: "Chlorophyta" }
    ]
	return (
		<div>
			<Head>
				<title>Marine Algae - Bakthavachalam Babu</title>
				{/* <html lang="en"> */}

					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta name="google" content="notranslate" />
					<meta name="description" content='Marine Algae log with description. Algae database - Marine and Freshwater Algae images with description and data'></meta>
					<meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
					<meta property="og:description" content='Marine Algae log with description. Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
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
				{/* </html> */}
			</Head>

			<body className='bg-marine bg-fixed bg-cover bg-center bg-no-repeat' >
				<NavBar />
				<div className='p-5'>
					<div className='bg-primary rounded-lg p-10 w-full h-full  max-w-4xl relative mx-auto'>
						<h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                <span className=''>MARINE ALGAE</span>
            </h2>
            <div className="w-full md:flex pl-8">
                {arrayData?.map((list, i) => (
                    <div className="md:w-1/3 ">
                        <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">{list?.name}</p>
                        {marine.filter((m)=>m.division===list.division)?.map((d, i) => {
                            return (
                                <ul key={i}>
                                    <li className="text-base text-white list-disc p-1 md:p-0">
                                        <Link href={"/marine-algae/" + d.name}  >
                                            <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>))}
            </div>
            <p className="px-5 pt-5">* Classification as on October 2021 - Guiry M. D. &amp; Guiry G. M. 2021 - {' '}
                <a href="http://www.algaebase.org" target="blank" className="hover:underline">AlgaeBase</a>
            </p>
					</div>
				</div>
				<br />
				{isVisible && (
					<button aria-label="scroll" onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center">
						<div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
					</button>
				)}
			</body>
		</div>
	)
}

export default marineAlgae;


export const getStaticProps = async () => {
	const data = await prisma.marine.findMany({ orderBy: { "name": "asc" } });
	// const marineBrown = await prisma.marine.findMany({ where: { "division": 'Ochrophyta' }, orderBy: { "name": "asc" } });
	// const marineGreen = await prisma.marine.findMany({ where: { "division": 'Chlorophyta' }, orderBy: { "name": "asc" } });
	return { props: { marine: data } };
};