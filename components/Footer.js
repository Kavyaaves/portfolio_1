function Footer() {
	return (
		<div className='md:h-36 bg-primary m-b-0 text-sm h-96'>
			<div className='flex flex-wrap text-center text-white'>
				<div className='w-full md:w-1/3 border-r border-blue-800 md:text-left'>
					<div className='my-6 ml-3 text-sm font-semibold'>
						ABOUT ME
					</div>
				</div>
				<div className='w-full md:w-1/3 border-r border-blue-800 md:text-left'>
					<div className='my-6 ml-3 text-sm font-semibold'>
						CONTACT ME
					</div>
				</div>

				<div className='w-full md:w-1/3 border-r border-blue-800 md:text-left'>
					<div className='my-6 ml-3 text-sm font-semibold'>
						SUBSCRIBE TO NEWSLETTER
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Footer;
