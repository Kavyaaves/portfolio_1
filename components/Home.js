import Image from 'next/image';

export default function Home() {
	return (
		<div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:my-0'>
			<div className='lg:w-2/5 my-16'>
				<Image
					src='/Babu 4.jpg'
					width={850}
					height={1200}
					alt="B Babu"
					layout='responsive'
					className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block'
				/>
			</div>
			<div className='w-full text-gray-900 lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-gray-200 mx-6  sm:opacity-100 lg:mx-0'>
				<div className='p-4 md:p-12 text-center lg:text-left'>
					<div className='block lg:hidden rounded-full shadow-xl mx-auto -mt-32 h-48 w-48 bg-cover bg-center bg-babu'></div>
					<h1 className='lg:text-3xl text-xl font-bold pt-8 lg:pt-0'>
						Bakthavachalam Babu
					</h1>
					<h2 className=' text-lg font-bold pt-1'>
						M. Sc., M. Phil., Ph. D (Botany), PDF (Taiwan)
					</h2>
					<div className='mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-'></div>
					<p className='pt-4 text-base font-semibold flex items-center justify-center lg:justify-start'>
						<svg
							className='h-5 fill-current text-gray-500 md:pr-6 pr-2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
						</svg>{' '}
						Assistant Professor, Department of Botany,
						<br />
						Madras Christian College
					</p>

					<div className='pt-2 text-base font-semibold flex items-center justify-center lg:justify-start'>
						<svg
							className='h-5 fill-current text-gray-500 pr-6'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z' />
						</svg>
						babu@mcc.edu.in
					</div>
					<div className='pt-2 text-base font-semibold flex items-center justify-center lg:justify-start'>
						<div className='pr-3'>
							<svg xmlns="http://www.w3.org/2000/svg"
								width="30" height="24"
								viewBox="0 0 172 172"
								fill="#000000"
							><g transform="translate(-18.06,-18.06) scale(1.21,1.21)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#708090"><path d="M78.83333,28.66667l-57.33333,35.83333h39.36068c-0.14762,0.54107 -0.38568,1.03284 -0.50391,1.5957c-0.32967,1.73433 -0.58789,3.64179 -0.58789,5.62695c0,25.59217 26.16113,22.70378 26.16113,22.70378v6.52279c0,2.64449 3.46878,1.72884 3.87728,7.09668c-1.73433,0 -36.23926,-0.99348 -36.23926,22.28385c0,23.36333 30.45833,22.21386 30.45833,22.21386c0,0 35.17545,1.57308 35.17545,-27.32292c0.01434,-17.2645 -20.14225,-22.88428 -20.14225,-29.81445c0,-7.01617 15.18717,-9.07726 15.18717,-25.50326c0,-7.181 -0.49148,-12.29554 -3.70931,-15.92904c-0.25083,-0.25083 -0.41421,-0.42306 -0.65788,-0.58789c-0.05538,-0.05159 -0.12578,-0.08916 -0.18196,-0.13997h0.88184l14.83724,-11.12793v15.21517c-0.00409,0.27761 0.0241,0.55475 0.08399,0.82585c-2.29173,1.28218 -3.69878,3.71498 -3.66732,6.34082v7.16667c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-7.16667c0.03146,-2.62584 -1.37559,-5.05864 -3.66732,-6.34082c0.05989,-0.2711 0.08808,-0.54824 0.08399,-0.82585v-20.60417l10.75,-8.0625zM83.78841,50.5446c2.06266,-0.09339 4.13886,0.40772 6.11686,1.52572c1.4835,0.74533 2.8754,1.80958 4.11524,3.13542c2.5585,2.5585 4.71107,6.27318 5.86491,10.65202c2.72333,10.39883 -0.81465,20.39868 -8.16048,22.29785c-7.267,2.05683 -15.36645,-4.7272 -18.16862,-15.0472c-1.23983,-5.031 -1.06873,-9.89627 0.33594,-13.77344c0.01324,-0.05001 0.04225,-0.09031 0.05599,-0.13997c0.0241,-0.01183 0.06064,-0.04465 0.08399,-0.05599c0.40265,-1.5329 1.06082,-2.90814 1.86166,-4.04525c1.47307,-2.15203 3.41587,-3.6096 5.83691,-4.25521c0.68083,-0.16483 1.37007,-0.26282 2.05761,-0.29395zM86.58789,112.41309c12.13317,-0.91017 22.46235,5.77107 23.20768,14.85123c0.50167,9.00134 -8.83292,17.00852 -21.05208,17.83269c-12.13316,0.82417 -22.61318,-5.76592 -23.19368,-14.76725c-0.5805,-9.08017 8.81892,-17.0065 21.03808,-17.91667z"></path></g><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path></g></g></svg>
						</div><a target="blank" href="https://scholar.google.co.in/citations?user=m5JoTg8AAAAJ&hl=en">Google Scholar</a>
					</div>
					<div className='mt-6 pb-5 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between'>
						<span className=''>* This website is a resource for identification of Freshwater and Marine Algae</span>
					</div>
				</div>
			</div>
		</div >
	);
}
