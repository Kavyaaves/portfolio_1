import { useState } from 'react';
import SlickSlider from './SlickSlider';

const Tabs = ({ color }) => {
	const [openTab, setOpenTab] = useState(1);
	return (
		<>
			<div className='max-w-2xl m-auto bg-primary rounded-lg'>
				<div className='flex flex-wrap p-5 h-screen'>
					<div className='w-full'>
						<ul
							className='flex justify-center w-full'
							role='tablist'>
							<li className='-mb-px mr-2 last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2  flex-auto text-center'>
								<a
									className={
										'text-base p-3 font-semibold uppercase px-5 py-3 shadow-lg  block leading-normal ' +
										(openTab === 1
											? 'text-gray-900 rounded-t-lg bg-' +
											color +
											'-500'
											: 'text-' +
											color +
											'-600 bg-primary')
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
							<li className='-mb-px mr-2 last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2 flex-auto text-center'>
								<a
									className={
										'text-base font-semibold uppercase p-3 shadow-lg block leading-normal ' +
										(openTab === 2
											? 'text-gray-900 rounded-t-lg bg-' +
											color +
											'-500'
											: 'text-' +
											color +
											'-600 bg-primary ')
									}
									onClick={(e) => {
										e.preventDefault();
										setOpenTab(2);
									}}
									data-toggle='tab'
									href='#link2'
									role='tablist'>
									Marine Water Algae
								</a>
							</li>
							<li className='-mb-px mr-2 border-yellow-400  border-solid  border-t-0 border-b-2 last:mr-0 flex-auto text-center'>
								<a
									className={
										'text-base font-semibold uppercase p-3 shadow-lg rounded-t-lg block leading-normal ' +
										(openTab === 3
											? 'text-gray-800 bg-' +
											color +
											'-500'
											: 'text-' +
											color +
											'-600 bg-primary')
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
							</li>
						</ul>
						<br />
						<div className='relative flex  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded'>
							<div className='px-4 py-5 flex-auto'>
								<div className='tab-content tab-space'>
									<div
										className={
											openTab === 1 ? 'block' : 'hidden'
										}
										id='link1'>
										<SlickSlider images={marineImages} />
									</div>
									<div
										className={
											openTab === 2 ? 'block' : 'hidden'
										}
										id='link2'>
										<SlickSlider images={marineImages} />
									</div>
									<div
										className={
											openTab === 3 ? 'block' : 'hidden'
										}
										id='link3'>
										<SlickSlider images={marineImages} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default function TabsRender() {
	return (
		<>
			<Tabs color='yellow' />
		</>
	);
}

const marineImages = [
	{
		name: 'Acanthophora spicifera',
		url: '/marine/Acanthophora spicifera.JPG',
		caption: 'imagae 1',
	},
	{
		name: 'Avrainvillea erecta',
		url: '/marine/Avrainvillea erecta.jpg',
		caption: 'imagae 1',
	},
	{
		name: 'Boergesenia forbesii',
		url: '/marine/Boergesenia forbesii.jpg',
		caption: 'imagae 1',
	},
	{
		name: 'Botryocladia sp',
		url: '/marine/Botryocladia sp.JPG',
		caption: 'imagae 1',
	},
	{
		name: 'Caulerpa cupressoides',
		url: '/marine/Caulerpa cupressoides.jpg',
		caption: 'imagae 1',
	},
	{
		name: 'Caulerpa racemosa',
		url: '/marine/Caulerpa racemosa.jpg',
		caption: 'imagae 1',
	},
	{
		name: 'Caulerpa scalpelliformis',
		url: '/marine/Caulerpa scalpelliformis.JPG',
		caption: 'imagae 1',
	},
	{
		name: 'Caulerpa taxifolia',
		url: '/marine/Caulerpa taxifolia.jpg',
		caption: 'imagae 1',
	},
	{
		name: 'Caulerpa',
		url: '/marine/Caulerpa.jpg',
		caption: 'imagae 1',
	},
];
