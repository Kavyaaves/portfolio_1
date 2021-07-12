import Head from 'next/head';
import Footer from '../components/Footer';
import Body from '../components/Body';
import NavBar from '../components/NavBar';
import Scholars from '../components/Scholars';

function scholars() {
	return (
		<div className=''>
			<Head>
				<title>Bakthavachalam Babu - Scholars</title>
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
			<body className='bg-species bg-center bg-cover bg-fixed bg-no-repeat bg-opacity-0'>
				<div>
					<NavBar />
				</div>
				<div className='p-5'>
					<Scholars />
				</div>
				<br />
			</body>
			<footer className=''>
				<Footer />
			</footer>
		</div>
	);
}

export default scholars;
