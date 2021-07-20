import Image from 'next/image';

export default function Home() {
	return (
		<div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:my-0'>
			<div className='lg:w-2/5 my-16'>
				<Image
					src='/Babu 4.jpg'
					width={850}
					height={1200}
					layout='responsive'
					className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block'
				/>
			</div>
			<div className='w-full text-gray-900 lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white mx-6 opacity-90 lg:mx-0'>
				<div className='p-4 md:p-12 text-center lg:text-left'>
					<div className='block lg:hidden rounded-full shadow-xl mx-auto -mt-32 h-48 w-48 bg-cover bg-center bg-babu'></div>
					<h1 className='lg:text-3xl text-xl font-bold pt-8 lg:pt-0'>
						Bakthavachalam Babu
					</h1>
					<h5 className=' text-sm font-bold pt-1'>
						M. Phil., Ph. D (Botany)
					</h5>
					<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-'></div>
					<p className='pt-4 text-base font-bold flex items-center justify-center lg:justify-start'>
						<svg
							className='h-5 fill-current text-gray-500 pr-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
						</svg>{' '}
						Assistant Professor, Department of Botany,
						<br />
						Madras Christian College
					</p>
					<p class='pt-2 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
						<a className='link' href='#' data-tippy-content=''>
							<svg
								class='h-5 fill-current text-gray-500 pr-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z' />
							</svg>
						</a>
						babu@mcc.edu.in
					</p>
					<br />
					<p>Former Postdoctoral Researcher at Academia Sinica</p>

					<div className='mt-6 pb-5 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between'></div>
				</div>
			</div>
		</div>
	);
}
