import { useState } from 'react';
import ImageGrid from './ImageGrid';
import SlickSlider from './SlickSlider';

const Tabs = ({ allImages, setSelectedImg }) => {
	const [openTab, setOpenTab] = useState(1);
	return (
		<>
			<div className='flex flex-wrap md:p-5'>
				<div className='w-full'>
					<ul
						className='flex justify-center w-full'
						role='tablist'>
						<li className='-mb-px last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2  flex-auto text-center'>
							<a
								className={
									'text-base p-3 font-semibold md:uppercase px-5 py-3 shadow-lg  block leading-normal ' +
									(openTab === 1
										? 'text-gray-900 rounded-t-lg bg-yellow-500'
										: 'text-yellow-600 bg-primary')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle='tab'
								href='#link1'
								role='tablist'>
								Freshwater Algae
							</a>
						</li>
						<li className='-mb-px last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2 flex-auto text-center'>
							<a
								className={
									'text-base font-semibold md:uppercase p-3 shadow-lg block leading-normal ' +
									(openTab === 2
										? 'text-gray-900 rounded-t-lg bg-yellow-500'
										: 'text-yellow-600 bg-primary ')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(2);
								}}
								data-toggle='tab'
								href='#link2'
								role='tablist'>
								Marine Algae
							</a>
						</li>
						{/* <li className='-mb-px border-yellow-400  border-solid  border-t-0 border-b-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-base font-semibomd:uppercase p-3 shadow-lg rounded-t-lg block leading-normal ' +
									(openTab === 3
										? 'text-gray-800 bg-yellow-500'
										: 'text-yellow-600 bg-primary')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(3);
								}}
								data-toggle='tab'
								href='#link3'
								role='tablist'>
								Other
							</a>
						</li> */}
					</ul>
					<br />
					<div className='relative flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded'>
						<div className='px-4 py-5 md:p-0 flex-auto'>
							<div className='tab-content tab-space'>
								<div
									className={
										openTab === 1 ? 'block' : 'hidden'
									}
									id='link1'>
									<ImageGrid images={allImages?.marine} setSelectedImg={setSelectedImg} />
								</div>
								<div
									className={
										openTab === 2 ? 'block' : 'hidden'
									}
									id='link2'>
									<ImageGrid images={allImages?.freshWater} setSelectedImg={setSelectedImg} />

								</div>
								{/* <div
									className={
										openTab === 3 ? 'block' : 'hidden'
									}
									id='link3'>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs



