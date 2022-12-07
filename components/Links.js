import Image from "next/image";
import { useState, useEffect } from "react";

function Links() {
	const [isVisible, setIsVisible] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
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
		setIsVisible(true);

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	return (
		<div className='max-w-4xl m-auto bg-primary rounded-lg p-5'>
			{isVisible && (
				<button
					aria-label='scroll'
					onClick={scrollToTop}
					className='focus:outline-none fixed right-0 z-10 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center'>
					<div className='inline-flex m-10'>
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
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.psaalgae.org/'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='PSAalgae'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 '
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'link1.jpg'}
						width={370}
						height={140}
					/>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.algaebase.org/'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='AlgaeBase'
						className='hover:opacity-90 opacity-100 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 transform'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'link2.jpg'}
						width={350}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					target='_blank'
					href='http://www.diatoms.org/'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='Diatoms'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'link3.png'}
						width={900}
						height={200}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					href='http://www.digicodes.info/'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Digicodes'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'link4.png'}
						width={1200}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					rel='noreferrer'
					target='_blank'
					href='http://phycolab.yolasite.com/'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='Phycolab'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Phycolab.PNG'}
						width={350}
						height={140}
					/>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='http://cfb.unh.edu/phycokey/phycokey.htm'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='Phycokey'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Phycokey.PNG'}
						width={350}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					href='http://desmids.science4all.nl'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Desmids of Drenthe'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Desmids of Drenthe.png'}
						width={900}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://websites.rbge.org.uk/ADIAC/db/Adiacgen.htm'
					className='p-5 flex items-center justify-center'>
					<Image
						alt='ADIAC'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'ADIAC.jpg'}
						width={350}
						height={140}
					/>
				</a>
				<a
					rel='noreferrer'
					href='http://protist.i.hosei.ac.jp/Protist_menuE.html'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Protist Information Server'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Protist Information server.jpg'}
						width={300}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					href='https://naturalhistory.museumwales.ac.uk/diatoms/Home.php'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Diatom Flora of Britain'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Diatom flora of Britain.PNG'}
						width={900}
						height={300}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					href='http://nordicmicroalgae.org/'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Nordic Microalgae'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Nordic.png'}
						width={500}
						height={60}
					/>
				</a>
				<a
					rel='noreferrer'
					href='http://symbiont.ansp.org/dntf/index.php'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Symbiont Diatom'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Diatom New.PNG'}
						width={500}
						height={60}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					rel='noreferrer'
					href='http://southafrseaweeds.uct.ac.za'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image
						alt='Seaweed of South Africa'
						className='hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105'
						passHref={true} src={process.env.BUCKET_LINKS_URL + 'Seaweed South africa.PNG'}
						width={900}
						height={300}
					/>
				</a>
			</div>
		</div>
	);
}

export default Links;
