import Image from 'next/image';
import { useState, useEffect } from 'react'
function Scholars() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		setIsVisible(true)

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	return (
		<div className='max-w-4xl md:p-10 p-5 min-h-auto m-auto bg-primary rounded-lg'>
			{isVisible && (
				<button onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 text-blue-700 bg-yellow-600 md:bg-primary md:text-yellow-500 items-center justify-center">
					<div classname='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
				</button>
			)}
			<h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
				<span className=''>SCHOLARS</span>
			</h2>
			<br />
			<div className='md:flex md:flex-wrap'>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Vasantha Kumar.JPG'
							alt='Vasantha Kumar'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. Vasanthakumar S.
						</h3>
						<span className='text-base'>M. Phil.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2019 - 2021
						</span>

						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Studies on Taxonomy of Freshwater
								Diatoms and Water Quality Assessment of
								Agatheeswaram and Vilavancode Taluks,
								Kanniyakumari District, Tamil Nadu.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Krithica.L.jpeg'
							alt='Krithica'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Krithica.L
						</h3>
						<span className='text-base'>M. Phil.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2018 - 2019
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Phycosynthesis of Silver (AgNps) and Gold Nanoparticles (AuNps) by Caulerpa verticillata J.  Agardh and its Antibacterial, Antioxidant and Anticancer properties
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Kokila.jpg'
							alt='Kokila'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Kokila T.
						</h3>
						<span className='text-base  lg:mb-4'>M. Phil.</span>
						<span className='text-base  lg:mb-4'>
							Batch: 2018 - 2019
						</span>

						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Taxonomy and Biodiversity of
								Diatom Assemblages used as Bioindicators to
								Assess the Quality of 33 Water Bodies in Three
								Taluks of Kancheepuram District, Tamil Nadu
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Grace.JPG'
							alt='Grace'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Grace Mariam Philip
						</h3>
						<span className='text-base'>M. Sc</span>
						<span className='text-base lg:mb-4'>
							Batch: 2020 - 2021
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Diversity of Marine algae from
								the Coast of Thirumullavaram, Kerala, India
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Hannah1.jpg'
							alt='Hannah'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Hannah Sherine, J.
						</h3>
						<span className='text-base lg:mb-4'>M. Sc.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2020 - 2021
						</span>

						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Systematic study on the
								freshwater phytoplankton of Erode and Thanjavur
								Districts of Tamil Nadu, India.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Nandhini.jpg'
							alt='Nandhini'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Nandhini, K.
						</h3>
						<span className='text-base lg:mb-4'>M. Sc.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2020 - 2021
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Taxonomy of Diatoms from Lentic
								and Lotic Ecosystems of Erode and Thanjavur
								Districts, Tamil Nadu, India.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Arokia Monisha .jpg'
							alt='Arokia Monisha'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Arokia Monisha M. A.
						</h3>
						<span className='text-base'>M. Sc.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2019 - 2020{' '}
						</span>

						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Taxonomy and Assemblage of Diatom
								in relation to water quality in Cheyyur and
								Gudiyattam Taluks of Tami Nadu, India.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Sonsuri.jpg'
							alt='Sonsuri Rongpi'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. Sonsuri Rongpi
						</h3>
						<span className='text-base'>M. Sc.</span>
						<span className='text-base lg:mb-4'>
							Batch: 2019 - 2020
						</span>

						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Studies on Freshwater
								Phytoplankton diversity of Agastheeswaram and
								Vilavancode Taluks of Kanyakumari District,
								Tamil Nadu, India.
							</p>
						</div>
					</div>
				</div>{' '}


				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Asmin.jpg'
							alt='Asmin Bibi'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Asmin Bibi. K
						</h3>
						<span className='text-base lg:mb-4'>M. Sc.</span>

						<span className='text-base  lg:mb-4'>
							Batch: 2018 - 2019
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Studies on Marine algal diversity
								of Havelock and Neil Islands, Andaman and
								Nicobar Islands.
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Sasi.jpg'
							alt='Sasi Kumar'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. Sasi Kumar U.
						</h3>
						<span className='text-base  lg:mb-4'>2019</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Studies on Taxonomy, Diversity and Assemblage of Diatoms as Bio indicator to Assess the Quality of Water bodies of Sriperumbudur and Maduranthakam Taluks Kancheepuran District, Tamil Nadu
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Krithica.L.jpeg'
							alt='Krithica'
						/>
						<div className='md:hidden flex items-center ml-10 justify-center'>
							<Image
								className=' rounded-lg'
								width={200}
								height={300}
								src='/Kokila.jpg'
								alt='Kokila'
							/>
						</div>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Krithica. L. &amp; Ms. Kokila T.
						</h3>
						<span className='text-base'>M. Sc.</span>
						<span className='text-base  lg:mb-4'>
							Batch: 2017 - 2018
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Taxonomy, diversity and seasonal
								studies on diatom as indicators to assess the
								quality of 21 water bodies of Thirukazhukundram
								Taluk, Kancheepuram District, Tamil Nadu.
							</p>
						</div>
					</div>
					<div className='hidden md:flex-shrink-0 md:flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Kokila.jpg'
							alt='Kokila'
						/>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Hungthing K Y S.jpg'
							alt='Hungthing'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. Hungthing K Y S
						</h3>
						<span className='text-base'>M. Sc. </span>
						<span className='text-base  lg:mb-4'>
							Batch: 2017 - 2018
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Bioprospecting of two freshwater
								microalgae <i>Aphanocapsa pulchra </i> (Kützing)
								Rabenhorst and <i>Microspora irregularis </i>
								(West &amp; West) Wichmann for Antibacterial,
								Antioxidant and Anticancer properties.
							</p>
						</div>
					</div>
				</div>
				{/* 3 - Aiswarya, Sahaya Nancy, Sankesh  */}
				<div className='md:w-full md:grid rounded-lg overflow-hidden shadow-lg md:justify-between mb-10'>
					<div className='md:flex-shrink-0  gap-3 items-center flex lg:justify-evenly'>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/Aiswarya.jpg'
							alt='Hungthing'
						/>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/Nancy.jpg'
							alt='A Quiet Place movie poster'
						/>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/Sankesh.jpg'
							alt='Sankesh'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Aiswarya Tom Ms. S. Sahaya Nancy Mr. S. Sankesh
						</h3>
						<span className='text-base'>M. Sc. </span>
						<span className='text-base  lg:mb-4'>
							Batch: 2016 - 2017
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Bioprospecting of two freshwater
								microalgae <i>Aphanocapsa pulchra </i> (Kützing)
								Rabenhorst and <i>Microspora irregularis </i>
								(West &amp; West) Wichmann for Antibacterial,
								Antioxidant and Anticancer properties.
							</p>
						</div>
					</div>
				</div>
				{/* Pratima and Manikandan */}
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Manikandan.jpg'
							alt='Manikandan'
						/>
						<div className='md:hidden flex items-center ml-10 justify-center'>
							<Image
								className='rounded-lg'
								width={200}
								height={300}
								src='/Pratima Gurung.jpg'
								alt='Pratima'
							/>
						</div>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. U. Manikandan &amp; Ms. Pratima Gurung
						</h3>
						<span className='text-base'>M. Sc.</span>
						<span className='text-base  lg:mb-4'>
							Batch: 2015 - 2016
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Diversity of Diatoms from
								selected places of High Altitude of Tamil Nadu.
							</p>
						</div>
					</div>
					<div className='hidden md:flex-shrink-0 md:flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Pratima Gurung.jpg'
							alt='Pratima'
						/>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/S. Pauline Gifty.jpg'
							alt='Pauline Gifty'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							S. Pauline Gifty
						</h3>
						<span className='text-base'>M. Sc. </span>
						<span className='text-base  lg:mb-4'>
							Batch: 2014 - 2015
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Diversity of Freshwater
								Bacillariophyceae in selected places of
								Kanchipuram District, Tamil Nadu
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Smitha.jpg'
							alt='A Quiet Place movie poster'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. R. Smita Mohan
						</h3>
						<span className='text-base'>M. Sc</span>

						<span className='text-base  lg:mb-4'>
							Batch: 2014 - 2015
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Diversity of the members of
								Chlorophyceae and Euglenophyceae from selected
								places of Kanchipuram, Tamil Nadu.
							</p>
						</div>
					</div>
				</div>
				{/* 3 - Kathika, Sandhya */}
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex gap-3 items-center lg:justify-evenly'>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/Karthika.jpg'
							alt='Karthika'
						/>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/Sandhya.jpg'
							alt='Sandhya'
						/>
						<Image
							className='rounded-lg'
							width={200}
							height={300}
							src='/SARANYA.jpg'
							alt='Saranya'
						/>
					</div>

					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Ms. Karthika. P, Ms. Sandhya. V &amp; Ms. Saranya. V
						</h3>
						<span className='text-base'>M. Sc.</span>
						<span className='text-base  lg:mb-4'>
							Batch: 2013 - 2014
						</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Biological production of Zinc
								Oxide and Silver nanoparticles and the
								antioxidant and antibacterial activity from
								three freshwater algae –{' '}
								<i>
									Nostoc sp., Hydrodictyon reticulata and
									Chara braunii.
								</i>
							</p>
						</div>
					</div>
				</div>
				<div className='md:w-full rounded-lg overflow-hidden shadow-lg md:flex md:justify-between mb-10'>
					<div className='md:flex-shrink-0 flex items-center justify-center'>
						<Image
							className='rounded-lg md:rounded-none'
							width={200}
							height={300}
							src='/Amal.jpg'
							alt='Mr. Amudham Radha Amal Raj'
						/>
					</div>
					<div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
						<h3 className='font-bold text-xl text-gray-200'>
							Mr. Amudham Radha Amal Raj
						</h3>
						<span className='text-base  lg:mb-4'>2013 -2014</span>
						<div className='flex-grow'>
							<p className='text-base text-gray-100 leading-snug truncate-overflow'>
								Project Title: Freshwater Diatom Flora of Kanchipuram District and Manur River (Tirunelveli)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Scholars;
