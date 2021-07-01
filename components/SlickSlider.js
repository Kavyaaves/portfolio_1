import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from 'react-slick';
import Image from 'next/image';
const settings = {
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	arrows: false,
};
function SlickSlider() {
	return (
		<Slider {...settings} autoplay={true} className=''>
			<div className='h-screen w-screen overflow-x-hidden opacity-100 '>
				<Image src='/1.jpg' layout='fill' objectFit='cover' quality={100} />
			</div>
			{/* <div className='h-screen w-screen overflow-x-hidden opacity-100 '> */}
			{/* <Image src='/3.jpg' layout='fill' objectFit='cover' quality={100} /> */}
			{/* </div> */}
			{/* <div className='h-screen w-screen overflow-x-hidden opacity-100 '>
				<Image src='/2.jpg' layout='fill' objectFit='cover' quality={100} />
			</div> */}
			<div className='h-screen w-screen overflow-x-hidden opacity-100 '>
				<Image src='/4.jpg' layout='fill' objectFit='cover' quality={100} />
			</div>
		</Slider>
	);
}

export default SlickSlider;
