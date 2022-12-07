import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Link from "next/link";

function freshwaterAlgae() {

	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
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
		{
			imgSrc: "algae/Netrium naegelii/001-7X5.webp",
			name: "Charophyta",
		},
		{
			imgSrc: "algae/Pediastrum duplex/001-7x5.webp",
			name: "Chlorophyta",
		},
		{
			imgSrc: "algae/Lepocinclis oxyuris/001-7X5.webp",
			name: "Euglenophyta",
		},
		{
			imgSrc: "algae/Glaucocystis nostochinearum/001-7x5.webp",
			name: "Glaucophyta",
        },
        {
            imgSrc: "algae/Centritractus belonophorus/001-7X5.webp",
            name: "Ochrophyta",
        },
		{
			imgSrc: "algae/Compsopogon caeruleus/002-7X5.webp",
			name: "Rhodophyta",
		},
	];
	
	return (
		<div>
			<Head>
				<title>Freshwater Algae - Bakthavachalam Babu</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='Freshwater Algae log with description. Algae database - Marine and Freshwater Algae images with description and data'></meta>
				<meta
					property='og:title'
					content='Bakthavachalam Babu Portfolio and Algae Database'
					key='ogtitle'
				/>
				<meta
					property='og:description'
					content='Freshwater Algae log with description. Algae database - Marine and Freshwater Algae images with description and data'
					key='ogdesc'
				/>
				<meta name='robots' content='index, follow' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Recursive:wght@700&display=swap'
					rel='stylesheet'
				/>
				<meta name='google' content='notranslate' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/icons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/icons/favicon-16x16.png'
				/>
				<link
					rel='mask-icon'
					href='/icons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>

			<body className='bg-falls bg-fixed bg-cover bg-center bg-no-repeat overflow-x-hidden'>
				<NavBar />
				<div className='p-5'>
					<div className='bg-primary relative rounded-lg p-10 min-h-screen  max-w-4xl mx-auto'>
						<h2 className='text-center text-2xl min-h-2xl  italic text-yellow-500 font-bold '>
							<span className=''>FRESHWATER ALGAE</span>
						</h2>
						<br />
						<div className='container grid md:grid-cols-3 grid-cols-1 gap-4 mx-auto'>
							{arrayData?.map((group,i) => (
								<Link
									key={i}
									href={`/freshwater-algae/` + group?.name}
									data={group.data}
									className='w-full h-full rounded-lg cursor-pointer'>
									<div className='flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden'>
										<img
											src={process.env.BUCKET_URL+group?.imgSrc}
											className='object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 '
										/>
										<div className=' text-lg text-white font-bold text-center absolute'>
											{group?.name}
										</div>
									</div>
								</Link>
							))}
						</div>
						 <div className="absolute bottom-0 pb-6">
                           <p className="">* Classification as on October 2021 - Guiry M. D. &amp; Guiry G. M. 2021 - {' '}
                <a href="http://www.algaebase.org" target="blank" className="hover:underline">AlgaeBase</a>
            </p>         
                      </div>
					</div>
				</div>
				<br />
				{isVisible && (
					<button
						aria-label='scroll'
						onClick={scrollToTop}
						className='focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center'>
						<div classname='inline-flex m-10'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='#FFBF00'
								width='24'
								height='24'
								viewBox='0 0 24 24'>
								<path d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z' />
							</svg>
						</div>
					</button>
				)}
			</body>
		</div>
	);
}

export default freshwaterAlgae;