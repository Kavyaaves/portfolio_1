import Image from 'next/image';
import Slider from 'react-slick';
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	appendDots: (dots) => (
		<div style={{}}>
			<ul style={{ margin: '0px', color: 'white' }}> {dots} </ul>
		</div>
	),
};
function Body() {
	return (
		<div className='max-w-5xl m-auto'>
			<div className='text-center p-10'>
				<h1 className='text-3xl'>Welcome to Our Algae Lab!</h1>
				<br />
				The study of Hawaiian algae has a long and fascinating history.
				The projects in our laboratory span the freshwater, marine,
				terrestrial, and airborne algal floras of the islands, and
				include a broad diversity of algal lineages. The Hawaiian
				archipelago provides a unique location for the study of
				biodiversity, adaptive radiation and island biogeography.
			</div>
			<br />
			<h4 className='m-5'>Latest</h4>
			<div className='flex flex-grow  justify-between'>
				<div className='max-w-xl max-h-xl '>
					<Image
						src='/1.jpg'
						width='600em'
						objectFit='contain'
						height='auto'
						quality={100}
					/>
				</div>
				<br />
				<div className='text-sm'>
					Feresa's paper describing new species of Psaromenia and
					Meredithia from Hawaiian mesophotic coral ecosystems is now
					online (open access!) in the European Journal of Phycology!
				</div>
			</div>
			<br />
			<div className='max-w-xl m-auto h-auto'>
				<Slider {...settings} className='w-4/5 lg:w-full m-auto'>
					<div className='m-auto'>
						<Image
							src='/1.jpg'
							width='250rem'
							height='auto'
							layout='responsive'
							objectFit='contain'
							quality={100}
						/>
					</div>
					<div className='m-auto'>
						<Image
							src='/2.jpg'
							width='250rem'
							height='auto'
							layout='responsive'
							objectFit='contain'
							quality={100}
						/>
					</div>
					<div className='m-auto'>
						<Image
							src='/3.jpg'
							width='250rem'
							height='auto'
							layout='responsive'
							objectFit='contain'
							quality={100}
						/>
					</div>
					<div className='m-auto'>
						<Image
							src='/4.jpg'
							width='250rem'
							height='auto'
							layout='responsive'
							objectFit='contain'
							quality={100}
						/>
					</div>
				</Slider>
			</div>
		</div>
	);
}

export default Body;
