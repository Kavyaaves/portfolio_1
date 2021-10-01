import { useState, useEffect } from 'react'


function Publications() {
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
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className='max-w-4xl py-10 p-5 m-auto bg-primary rounded-lg'>
			{isVisible && (
				<button  aria-label="scroll" onClick={scrollToTop} className="focus:outline-none fixed right-0 bottom-0 text-center flex rounded-full w-16 m-10 h-16 bg-primary text-yellow-500 items-center justify-center z-30">
					<div className='inline-flex m-10'><svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></div>
				</button>
			)}
			<h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
				<span className=''>BOOKS</span>
			</h2>
			<div className='md:p-12 p-5'>
				<ul className='list-none pt-0'>
					<li className='border-white bg-gray-200 font-semibold text-gray-800 rounded-t-lg  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-b-lg'>
						Jiunn-Tzong Wu, Bakthavachalam Babu, Chuan-Ling Chou and
						Sundararaju Jothisaraswathi 2011. Freshwater Diatom
						Flora of Taiwan. Vol. I. 2011. Publisher: Biodiversity
						Research Center, Academia Sinica, Taiwan, pp 1-392.
						ISBN: 978-986027105-8.
					</li>
					<li className='border-white bg-gray-400  font-semibold text-gray-800 rounded-b-lg p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-t-lg'>
						Jiunn-Tzong Wu, Bakthavachalam Babu, Chuan-Ling Chou and
						Sundararaju Jothi Saraswathi 2011. Freshwater Diatom
						Flora of Taiwan. Vol. II. 2011. Publisher: Biodiversity
						Research Center, Academia Sinica, Taiwan, pp 1-356.
						ISBN: 978-986027106-5
					</li>
				</ul>
			</div>
			<h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
				<span className='bg-'>PAPERS</span>
			</h2>
			<div className='md:p-12 p-5'>
				<ul className='list-none'>
					<li className='border-white bg-gray-200 font-semibold text-gray-800 rounded-t-lg p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-b-lg'>
						Grace, M. P., Hannah, S.J., Nandhini, K. and B. Babu. 2021. New records of two species
						of Herposiphonia (Rhodophyta, Rhodomelaceae) from India. Indian Hydrobiology, 20(1):
						151–156. (UGC Listed Journal).
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800 rounded-t-lg p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-b-lg'>
						Bakthavachalam Babu and Pauline Gifty, 2020. Diversity
						of Freshwater Diatoms from the World Heritage
						Mamallapuram region of Tamil Nadu, India. Indian
						Hydrobiology 19: 77-96. 1 &amp; 2 0971-6548
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu and S. Vasanthakumar, 2020.
						Diversity and new records of Cosmarium Corda ex Ralfs
						(Desmidiales, Zygnematophyceae) from Kanniyakumari
						District, Tamil Nadu, India. Indian Hydrobiology 19:
						263-284.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu, S. Jothi Saraswathi and R.
						Rengasamy, 2018. Seasonal studies on biochemical
						constituents of alginate from Hormophysa cuneiformis
						(Gmelin) Silva. Indian Hydrobiology 17: 77-84.
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu and Pauline Gifty, 2018. Systematic
						studies on the freshwater flora from selected places of
						Kancheepuram District, Tamil Nadu. Indian Hydrobiology
						17: 103-121.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu and Jiunn-Tzong Wu, 2010.
						Biodegradation of phthalate esters by cyanobacteria.
						Journal of Phycology 46:1106-1113.
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu and Jiunn-Tzong Wu, 2010. Production
						of phthalate esters by nuisance freshwater algae and
						cyanobacteria. Science of the Total Environment, 408:
						4969-4975.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Dhanalakshmi, K., B. Babu, A. Nicodemus, B. Nagarajan
						and M. Baluswami, 2010. Thorea hispida (Thore) Desvaux
						Emend. Sheath, Vis et Cole from Little Andaman, India.
						Proceedings of the International Conference on Algal
						Biomass, Resources and Utilization, 2009, pp. 35-42.
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						Bakthavachalam Babu and Jiunn-Tzong Wu, 2008. Production
						of natural butylated hydroxytoluene as an antioxidant by
						freshwater phytoplankton. Journal of Phycology, 44:
						1447-1454.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800   p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						S. Jothi Saraswathi, B. Babu and R. Rengasamy, 2006.
						Seasonal studies on alginate and its composition II:
						Turinaria conoides (J. Ag.) Kütz. (Fucales),
						Phaeophyceae. Journal of Applied Phycology, 18: 161-166.
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800  p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						S. Jothi Saraswathi, B. Babu and R. Rengasamy, 2003.
						Seasonal studies on the alginate and its biochemical
						composition I: Sargassum polycystum (Fucales),
						Phaeophyceae. Phycological Research 51: 240 – 243.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						B. Babu and M. Baluswami, 2005. Tuomeya americana
						(Kuetzing) Papenfuss, a fresh-water red alga, new to
						India., Indian Hydrobiology 8: 1-4. 0971-6548
					</li>
					<li className='border-white bg-gray-200  font-semibold text-gray-800 p-5 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg'>
						M. Baluswami and B. Babu, 1997. The Structure and
						reproduction of Sirodotia iyengarii sp. nov. Proc. of
						Nat. Symp. Recent Trends Algal Res., Andhra University.
						PP. 237-244.
					</li>
					<li className='border-white bg-gray-400 font-semibold text-gray-800  rounded-b-lg p-5 transition duration-700 ease-in-out hover:bg-yellow-500 hover:rounded-t-lg transform hover:-translate-y-1 hover:scale-110 '>
						M. Baluswami and B. Babu, 1997. On the structure and
						reproduction of Batrachospermum umamaheswararaoi sp.
						nov. Proc. of Nat. Symp. Recent Trends Algal Res.,
						Andhra University. PP. 245-254.
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Publications;
