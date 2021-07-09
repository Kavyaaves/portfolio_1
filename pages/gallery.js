import Head from 'next/head';
import SlickSlider from '../components/SlickSlider';
import NavBar from '../components/NavBar';

function gallery() {
	return (
		<div className=''>
			<Head>
				<title>Bakthavachalam Babu - Home</title>
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
			<body className='bg-gallery bg-fixed bg-center bg-cover'>
				<NavBar />
				<div className='p-2 pt-5'>
					<div className='bg-primary max-w-2xl m-auto rounded-lg p-2'>
						<SlickSlider />
					</div>
				</div>
			</body>
		</div>
	);
}

export default gallery;
