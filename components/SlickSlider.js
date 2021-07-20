import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from 'react-slick';
import Image from 'next/image';
import NavBar from '../components/NavBar';
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
function SlickSlider() {
	return (
		<div className='max-h-screen pb-5 m-auto'>
			<Slider {...settings} className='w-4/5  m-auto'>
				<figure className=''>
					<Image
						src='/1.jpg'
						width='250rem'
						height='auto'
						layout='responsive'
						objectFit='contain'
						quality={100}
					/>
					<figcaption className='text-center text-yellow-500'>
						Caption for image one. <a href='#one'>Read more</a>
					</figcaption>
				</figure>
				<figure className='m-auto h-auto'>
					<Image
						src='/2.jpg'
						width='250rem'
						height='auto'
						layout='responsive'
						objectFit='contain'
						quality={100}
					/>
					<figcaption className='text-center text-yellow-500'>
						Heelo I am seconf omab
					</figcaption>
				</figure>
				<figure className='m-auto'>
					<Image
						src='/3.jpg'
						width='250rem'
						height='auto'
						layout='responsive'
						objectFit='contain'
						quality={100}
					/>
					<figcaption className='text-center text-yellow-500'>
						Heelo I am seconf omab
					</figcaption>
				</figure>
				<figure>
					<Image
						src='/4.jpg'
						width='250rem'
						height='auto'
						layout='responsive'
						objectFit='contain'
						quality={100}
					/>
					<figcaption className='text-center text-yellow-500'>
						Heelo I am seconf omab
					</figcaption>
				</figure>
				<figure>
					<Image
						src='/cover.jpg'
						width='250rem'
						height='auto'
						layout='responsive'
						objectFit='contain'
						quality={100}
					/>
					<figcaption className='text-center text-yellow-500'>
						Micro
					</figcaption>
				</figure>
			</Slider>
		</div>
	);
}

export default SlickSlider;
