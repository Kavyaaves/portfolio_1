import Image from 'next/image';

function Links() {
	return (
		<div className='max-w-4xl m-auto bg-primary rounded-lg p-5'>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					target='_blank'
					href='https://www.psaalgae.org/'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 " src='/link1.jpg' width={370} height={140} />
				</a>
				<a
					target='_blank'
					href='https://www.algaebase.org/'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 transform" src='/link2.jpg' width={350} height={140} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					target='_blank'
					href='http://www.diatoms.org/'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/link3.png' width={900} height={200} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='http://www.digicodes.info/'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/link4.png' width={1200} height={140} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					target='_blank'
					href='http://phycolab.yolasite.com/'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/Phycolab.PNG' width={350} height={140} />
				</a>
				<a
					target='_blank'
					href='http://cfb.unh.edu/phycokey/phycokey.htm'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/Phycokey.PNG' width={350} height={140} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='http://desmids.science4all.nl'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105"
						src='/Desmids of Drenthe.png'
						width={900}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col md:justify-between'>
				<a
					target='_blank'
					href='https://websites.rbge.org.uk/ADIAC/db/Adiacgen.htm'
					className='p-5 flex items-center justify-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/ADIAC.jpg' width={350} height={140} />
				</a>
				<a
					href='http://protist.i.hosei.ac.jp/Protist_menuE.html'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105"
						src='/Protist Information server.jpg'
						width={300}
						height={140}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='https://naturalhistory.museumwales.ac.uk/diatoms/Home.php'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105"
						src='/Diatom flora of Britain.PNG'
						width={900}
						height={300}
					/>
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='http://nordicmicroalgae.org/'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/Nordic.png' width={500} height={60} />
				</a>
				<a
					href='http://symbiont.ansp.org/dntf/index.php'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105" src='/Diatom New.PNG' width={500} height={60} />
				</a>
			</div>
			<div className='md:grid md:grid-rows-1 md:grid-flow-col justify-center'>
				<a
					href='http://southafrseaweeds.uct.ac.za'
					target='_blank'
					className='p-5 justify-center flex items-center'>
					<Image className="hover:opacity-90 opacity-100 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-105"
						src='/Seaweed South africa.PNG'
						width={900}
						height={300}
					/>
				</a>
			</div>
		</div>
	);
}

export default Links;
