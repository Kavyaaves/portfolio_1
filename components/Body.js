import Image from 'next/image';
import Slider from 'react-slick';
import Card from './Card';
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
		<div className='max-w-4xl m-auto bg-primary rounded-lg'>
			<div className='p-10'>
				<h1 className='text-center text-3xl text-yellow-500 transform skew-y-0'>
					Welcome to Our Algae Lab!
				</h1>
				<br />
				<div className='text-center'>
					Peninsular India has a very long coastline and plenty of
					inland water bodies, which harbours rich marine and
					freshwater algal diversity. It provides a greatest
					opportunity study of biodiversity, ecology and its
					applications in various fields.
				</div>

				<h2 class='text-2xl p-10 text-center text-yellow-500 transform skew-y-0'>
					RESEARCH
				</h2>

				<div class=' text-center'>
					<div class='md:grid md:grid-rows-1 text-black font-semibold md:grid-flow-col'>
						<div class='bg-gray-200 rounded-lg m-4 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110'>
							<h5>Taxonomy of Marine and Fresh Water Algae</h5>
							<br />
							<p class=''>
								Studies on the freshwater diatom flora of Tamil
								Nadu has been initiated and is under progress.
							</p>
						</div>
						<div class='bg-gray-200 rounded-lg m-4  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110'>
							<h5>Water Quality Assessment</h5>
							<br />
							<br />
							<p class=''>
								Studies on Water Pollution and Water Quality
								Assessment using freshwater Diatoms as a
								Pollutions Indicator.
							</p>
						</div>
						<div class='bg-gray-200 rounded-lg m-4  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110'>
							<h5>Biodegradation of Environmental Pollutants</h5>
							<br />
							<p class=''>
								Using different strains of freshwater algae-
								Biodegradation pathway of phthalate esters (DBP,
								DPP, DEP and DMP).
							</p>
						</div>
					</div>
					<div class='md:grid md:grid-rows-1 md:grid-flow-col md:px-32 text-black font-semibold'>
						<div class='bg-gray-200 rounded-lg m-4  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110'>
							<h5>
								Isolation &amp; Purification of Bioactive
								Compounds from Algae
							</h5>
							<br />
							<p class=''>
								The bioactive compounds from microalgae will be
								investigated for antioxidant, antimicrobial and
								anticancer activity.
							</p>
						</div>
						<div class='bg-gray-200 rounded-lg m-4 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110'>
							<h5>Phycosynthesis of Nanoparticle</h5>
							<br />
							<br />
							<p class=''>
								Studies on the synthesis of Silver and Gold
								nanoparticles using various marine and
								freshwater algae.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;
