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
									Graduated in
									Botany (1993) from Madras Christian College
									(Affiliated to University of Madras).
									<br />
									Post-graduation in Botany (1995) from Madras Christian College (Affiliated
									to University of Madras)
									<br />
									M. Phil in 1997 under the guidance of Dr. M. Baluswami from the
									Department of Botany, Madras Christian College.
								</p>
							</div>
						</div>

						<div className='flex justify-between md:-my-10 items-center w-full md:flex-row-reverse left-timeline'>
							<div className='order-2 md:w-5/12 w-0'></div>
							<div className='order-1 bg-yellow-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Freshwater Rhodophyceae of Tamil Nadu, 1995-1997
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-800 text-opacity-100'>
									M. Phil studies on “Freshwater Rhodophyceae of Tamil Nadu” enabled me
									to gain a sound knowledge on various species of red algae and published
									two new species from Tamil Nadu.
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
									Project Fellow, 1997-2000
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-800 text-opacity-100'>
									Joined as a project fellow in the UGC Project entitled “Ultrastructural
									studies on Fucales, Phaeophyceae from Gulf of Mannar” under the
									supervision Dr. R. Rengasamy (Centre for Advanced Studies in Botany,
									University of Madras).
								</p>
							</div>
						</div>

						<div className='flex justify-between items-center md:-my-10 md:flex-row-reverse w-full left-timeline'>
							<div className='order-2 md:w-5/12 w-0'></div>

							<div className='order-1 bg-yellow-400 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4'>
								<h3 className='mb-3 font-bold text-gray-800 text-xl'>
									Ph. D., January 2002
								</h3>
								<p className='text-base font-semibold leading-snug text-gray-800 text-opacity-100'>
									Ph. D. thesis entitled “Histochemical, Ultrasturctural and Biochemical studies on
									<i>Sargassum wightii</i> Greve., <i>Turbinaria ornata</i> J.Ag. and <i>Cystoseira trinodis</i> (Forsskal)
									C. Ag. <i>Fucales</i>, Phaeophyceae from the Gulf of Mannar region” made me acquire
									structural as well application-oriented concepts on Brown algae.

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
									Post Doctoral Researcher, 2004-2013
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-900 text-opacity-100'>
									Under the guidance of Dr. Jiunn-Tzong Wu
									(Research Fellow) in the Biodiversity Research Centre,
									Academia Sinica (BRCAS), Taiwan.
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
									Co-Authored two volumes of book entitled “Freshwater Diatom flora
									of Taiwan”. These two volumes of Book are recognized as First
									Monograph on Diatom Flora of Taiwan. Several Research articles are
									published in peer reviewed journals.
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
									MCC Journey, 2013 - Present
								</h3>
								<p className='text-base leading-snug font-semibold text-gray-900 text-opacity-100'>
									Joined as Faculty in the Department of Botany Madras Christian College.
									Ever since I joined the department, I have been teaching Undergraduate
									and Post Graduate students of Botany. I am also guiding M. Sc. and
									M. Phil. Students.
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
