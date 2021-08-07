import React, { useEffect, useState } from "react";


function Body() {

	return (
		<div className='max-w-4xl m-auto bg-primary rounded-lg'>
			<br />
			<h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
				<span className=''>ABOUT ME</span>
			</h2>
			<div className='md:p-10 p-5'>
				<div className='container bg-gray-200 mx-auto w-full h-full'>
					<div className='relative wrap overflow-hidden md:p-10 p-5 h-full'>
						<div
							className='md:border-2-2 md:absolute border-opacity-20 md:border-gray-700 h-full border'
							style={{ left: '50%' }}></div>
						<div className='flex justify-between items-center md:flex-row-reverse w-full left-timeline'>
							<div className='order-1 md:w-5/12 '></div>
							<div className='z-20 p-3  flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto font-semibold text-lg text-white'>
									1
								</h1>
							</div>
							<div className='order-2 bg-gray-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Graduation
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-800 text-opacity-100'>
									I have obtained my Graduation degree in
									Botany (1993) and Post-graduation degree
									(M.Sc. Botany) in 1995 from the Department
									of Botany, Madras Christian College
									(Affiliated to University of Madras). I had
									a passion towards algology ever since my
									Post-graduation course. This made me to opt
									for Post-graduation Project on algae. I have
									obtained my M. Phil degree (Botany) under
									the guidance of Dr. M. Baluswami from the
									Department of Botany in 1997.
								</p>
							</div>
						</div>

						<div className='flex justify-between md:-my-10 items-center w-full md:flex-row-reverse left-timeline'>
							<div className='order-2 md:w-5/12 w-0'></div>
							<div className='order-1 bg-yellow-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Freshwater Rhodophyceae of Tamil Nadu
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-800 text-opacity-100'>
									My M.Phil dissertation entitled “Freshwater
									Rhodophyceae of Tamil Nadu” enabled me to
									obtain a sound knowledge on various species
									of freshwater Red algae present in various
									freshwater habitats of Tamil Nadu.
								</p>
							</div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto text-white font-semibold text-lg'>
									2
								</h1>
							</div>
						</div>

						<div className='flex justify-between md:flex-row-reverse md:-my-10 items-center w-full left-timeline'>
							<div className='order-1 md:w-5/12'></div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto font-semibold text-lg text-white'>
									3
								</h1>
							</div>
							<div className='order-2 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Project Fellow
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-800 text-opacity-100'>
									Later, in 1997 I joined as a Project Fellow
									in a UGC Project entitled in
									“Ultrastructural studieds on Fucales,
									Phaeophyceae from Gulf of Mannar” under the
									supervision Dr. R. Rengasamy.
								</p>
							</div>
						</div>

						<div className='flex justify-between items-center md:-my-10 md:flex-row-reverse w-full left-timeline'>
							<div className='order-2 md:w-5/12 w-0'></div>

							<div className='order-1 bg-yellow-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Ph. D Thesis
								</h3>
								<p className='text-base font-medium leading-snug text-gray-800 text-opacity-100'>
									My Ph. D. thesis entitled “Histochemical,
									Ultrasturctural and Biochemical studies on
									Sargassum wightii Greve., Turbinaria ornata
									J.Ag. and Cystoseira trinodis (Forsskal) C.
									Ag. Fucales, Phaeophyceae from the Gulf of
									Mannar region” made me acquire structural as
									well application oriented concepts on Brown
									algae. I was awarded Ph. D. in Botany
									(Algology) in January 2002.
								</p>
							</div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto text-white font-semibold text-lg'>
									4
								</h1>
							</div>
						</div>
						<div className='flex justify-between items-center md:-my-10 md:flex-row-reverse w-full left-timeline'>
							<div className='order-1 md:w-5/12'></div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto font-semibold text-lg text-white'>
									5
								</h1>
							</div>
							<div className='order-2 bg-gray-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Post Doctoral Researcher
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-900 text-opacity-100'>
									Further I continued my research on algae as
									a Post-Doctoral Researcher under the
									guidance of Dr. Jiunn-Tzong Wu (Research
									Fellow) in the Biodiversity Research Centre,
									Academia Sinica (BRCAS), Taiwan from 2004 to
									2013.
								</p>
							</div>
						</div>

						<div className='flex justify-between  items-center md:-my-10 md:flex-row-reverse w-full left-timeline'>
							<div className='order-2 md:w-5/12 w-0'></div>

							<div className='order-1 bg-yellow-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Books and Publications
								</h3>
								<p className='text-base font-semibold leading-snug text-gray-800 text-opacity-100'>
									During this Period of Post-Doctoral
									Research, I extended my knowledge in the
									fields of Bioremediation, Isolation of
									Bioactive compounds (Anticancer, Antioxidant
									and antimicrobial), freshwater diatom
									taxonomy etc. I have Co-Authored two volumes
									of book entitled “Freshwater Diatom flora of
									Taiwan”. These two volumes of Book is
									recognized as First monograph on Diatom
									Flora of Taiwan. I have published several
									Papers in peer reviewed journals. I have
									attended and presented research papers in
									both National and International conferences.
								</p>
							</div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto text-white font-semibold text-lg'>
									6
								</h1>
							</div>
						</div>
						<div className='flex justify-between md:flex-row-reverse md:-my-10 items-center w-full left-timeline'>
							<div className='order-1 md:w-5/12'></div>
							<div className='z-20 p-3 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
								<h1 className='mx-auto font-semibold text-lg text-white'>
									7
								</h1>
							</div>
							<div className='order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									MCC Journey
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-900 text-opacity-100'>
									In 2013, I joined as Faculty in the
									Department of Botany Madras Christian
									College. Ever since I joined the department
									I have been teaching Undergraduate and Post
									Graduate students of Botany. I am teaching
									Algology, Plant Anatomy, Bryology and
									Microbial Technology. I am also guiding M.
									Sc. and M. Phil. Students.
								</p>
							</div>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;
