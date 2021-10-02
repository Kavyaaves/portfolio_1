import Head from 'next/head';
import NavBar from '../components/NavBar';
import Scholars from '../components/Scholars';

function scholars() {
	return (
		<div className=''>
			<Head>
				<title>Scholars - Bakthavachalam Babu</title>
				<html lang="en">

					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta name="description" content='Scholars who completed their project under the guidance of Dr. B. Babu are listed here. Algae database - Marine and Freshwater Algae images with description and data'></meta>
					<meta property="og:title" content='Bakthavachalam Babu Portfolio and Algae Database' key="ogtitle" />
					<meta property="og:description" content='Scholars who completed their project under the guidance of Dr. B. Babu are listed here. Algae database - Marine and Freshwater Algae images with description and data' key="ogdesc" />
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
					<meta name="google" content="notranslate" />
					<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
					<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
				</html>
			</Head>
			<body className='bg-species bg-center bg-cover bg-fixed bg-no-repeat bg-opacity-0'>
				<div>
					<NavBar />
				</div>
				<div className='p-5'>
					<Scholars />
				</div>
				<br />
			</body>
		</div>
	);
}

export default scholars;
