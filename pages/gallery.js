import Head from 'next/head';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Tabs from '../components/Tabs';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ImagePreview from '../components/ImageGrid';
import Modal from '../components/Modal';
function gallery() {
	const marineImages = [
		[{
			id: 1,
			name: 'Acanthophora spicifera',
			url: '/marine/Acanthophora spicifera.jpg',
			caption: 'imagae 1',
		},
		{

			id: 2,
			name: 'Avrainvillea erecta',
			url: '/marine/Avrainvillea erecta.jpg',
			caption: 'imagae 1',
		},
		{
			id: 3,

			name: 'Boergesenia forbesii',
			url: '/marine/Boergesenia forbesii.jpg',
			caption: 'imagae 1',
		}],
		[{
			id: 4,

			name: 'Botryocladia sp',
			url: '/marine/Botryocladia sp.jpg',
			caption: 'imagae 1',
		},
		{
			id: 5,

			name: 'Caulerpa cupressoides',
			url: '/marine/Caulerpa cupressoides.jpg',
			caption: 'imagae 1',
		},
		{
			id: 6,

			name: 'Caulerpa racemosa',
			url: '/marine/Caulerpa racemosa.jpg',
			caption: 'imagae 1',
		}],
		[{
			id: 8,

			name: 'Caulerpa scalpelliformis',
			url: '/marine/Caulerpa scalpelliformis.jpg',
			caption: 'imagae 1',
		},
		{
			id: 9,

			name: 'Caulerpa taxifolia',
			url: '/marine/Caulerpa taxifolia.jpg',
			caption: 'imagae 1',
		},
		{
			id: 10,

			name: 'Caulerpa',
			url: '/marine/Caulerpa.jpg',
			caption: 'imagae 1',
		}],
	];
	const freshWaterImages = [[{
		id: 7,
		name: 'Colpomenia sinuosa',
		url: '/marine/Colpomenia sinuosa.jpg',
		caption: 'imagae 1',
	},
	{

		id: 2,
		name: 'Dictyosphaeria cavernosa',
		url: '/marine/Dictyosphaeria cavernosa.jpg',
		caption: 'imagae 1',
	},
	{
		id: 3,

		name: 'Halimeda bearing Gametangia',
		url: '/marine/Halimeda bearing Gametangia.jpg',
		caption: 'imagae 1',
	}],
	[{
		id: 4,

		name: 'Liagora sp',
		url: '/marine/Liagora sp.jpg',
		caption: 'imagae 1',
	},
	{
		id: 5,

		name: 'Lobophora variegata',
		url: '/marine/Lobophora variegata.jpg',
		caption: 'imagae 1',
	},
	{
		id: 6,

		name: 'Martensia',
		url: '/marine/Martensia_114654.jpg',
		caption: 'imagae 1',
	}],
	[{
		id: 8,

		name: 'Halimeda',
		url: '/marine/Halimeda.jpg',
		caption: 'imagae 1',
	},
	{
		id: 9,

		name: 'Spatoglossum variabile',
		url: '/marine/Spatoglossum variabile.jpg',
		caption: 'imagae 1',
	},
	{
		id: 10,

		name: 'Ulva sp',
		url: '/marine/Ulva sp.jpg',
		caption: 'imagae 1',
	}]]

	const all = { marine: marineImages, freshWater: freshWaterImages }
	const [allImages, setAllImages] = useState(all)
	const [selectedImg, setSelectedImg] = useState('')
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setAllImages(all)
	}, [allImages])
	useEffect(() => {
		setSelectedImg(selectedImg)
	}, [selectedImg]);
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
	return (
		<div className={selectedImg ? 'w-screen h-screen overflow-hidden' : ''}>
			<Head>
				<title>Bakthavachalam Babu - Gallery</title>
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

			{selectedImg &&
				<div className="overflow-hidden absolute z-20 w-full h-full top-0 bottom-0 bg-primary">
					<Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} images={allImages} />
				</div>
			}

			<body className='bg-falls bg-fixed bg-cover bg-center bg-no-repeat' >
				<NavBar />
				<div className='p-2  pt-5 max-w-4xl relative mx-auto'>
					<div className='bg-primary relative rounded-lg p-10 w-full h-full'>
						<Tabs allImages={allImages} setSelectedImg={setSelectedImg} />
					</div>
				</div>
				<br />
				{isVisible && (
					<button onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center">
						<div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
					</button>
				)}

			</body >
			<br />

			<footer>
				<Footer />
			</footer>
		</ div >
	);
}

export default gallery;

// export async function getStaticProps() {
// 	const results = await fetch('https://bakthavachalam-babu.vercel.app/api/gallery');
// 	console.log(results)
// 	const all = await results.json()
// 	console.log(all)
// 	console.log("getsta", all)
// 	return {
// 		props: {
// 			all,
// 		}
// 	}
// }
