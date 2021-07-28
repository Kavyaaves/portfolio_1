import Head from 'next/head';
import Footer from '../components/Footer';
import Research from '../components/Research';
import NavBar from '../components/NavBar';

export default function studentCorner() {
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
					<Research />
				</div>
				<br />
			</body>
			<footer className=''>
				<Footer />
			</footer>
		</div>
	);
}
