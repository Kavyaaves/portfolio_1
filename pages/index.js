import { useState, useEffect } from 'react'
import Head from 'next/head';
import Body from '../components/Body';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
export default function Index() {
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
	return (
		<div className=''>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="description" content='Algae database - Marine and Freshwater Algae images with description and data'></meta>
				<meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
				<meta property="og:description" content='Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
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
				<script src='https://unpkg.com/popper.js@1/dist/umd/popper.min.js'></script>
				<script src='https://unpkg.com/tippy.js@4'></script>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
				<link rel="manifest" href="/favicon_io/site.webmanifest" />

				<title>Home - Bakthavachalam Babu</title>
			</Head>
			<body className='bg-gallery bg-center bg-cover bg-no-repeat bg-fixed'>
				{isVisible && (
					<button onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 bg-primary text-yellow-500 items-center justify-center z-30">
						<div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
					</button>
				)}
				<div>
					<NavBar />
					<Home />
				</div>
				<div className='p-5'>
					<Body />
				</div>
				<br />
			</body>

		</div>
	);
}
