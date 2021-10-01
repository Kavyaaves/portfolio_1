import Head from 'next/head';
import Research from '../components/Research';
import NavBar from '../components/NavBar';

function research() {
	return (
		<div className=''>
			<Head>
				<title>Bakthavachalam Babu - Research</title>
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
			<body className='bg-andaman bg-cover bg-fixed bg-no-repeat'>
				<div>
					<NavBar />
				</div>
				<div className='p-5'>
					<Research />
				</div>
				<br />
			</body>

		</div>
	);
}

export default research;
