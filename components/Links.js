import Image from 'next/image';

function Links() {
	return (
		<div className='max-w-4xl m-auto bg-primary rounded-lg p-5'>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					target='_blank'
					href='https://www.psaalgae.org/'
					className='p-5 flex items-center justify-center'>
					<Image src='/link1.jpg' width={350} height={140} />
				</a>
				<a
					target='_blank'
					href='https://www.algaebase.org/'
					className='p-5 flex items-center justify-center'>
					<Image src='/link2.jpg' width={300} height={140} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					target='_blank'
					href='http://www.diatoms.org/'
					className='p-5 flex items-center justify-center'>
					<Image src='/link3.png' width={400} height={120} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='http://www.digicodes.info/'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image src='/link4.png' width={1200} height={140} />
				</a>
			</div>
		</div>
	);
}

export default Links;
