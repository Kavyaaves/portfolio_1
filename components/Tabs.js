import { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tabs = ({ syllabus, notes }) => {
	const [openTab, setOpenTab] = useState(1);
	return (
		<>
			<div className='flex flex-wrap md:p-5 min-h-screen'>
				<div className='w-full'>
					<ul
						className='flex justify-center w-full'
						role='tablist'>
						<li className='-mb-px last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2  flex-auto text-center'>
							<a
								className={
									'text-base font-semibold md:uppercase px-3 md:px-5 py-2 md:py-3  block leading-normal ' +
									(openTab === 1
										? 'text-gray-900 rounded-t-lg bg-yellow-500'
										: 'text-yellow-500')
								}
								role='tab'
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle='tab'
								aria-label="Tab1"
								href='#link1'
								role='tablist'>
								Indian Algologists
							</a>
						</li>
						<li className='-mb-px last:mr-0 border-yellow-400  border-solid  border-t-0 border-b-2 flex-auto text-center'>
							<a
								className={
									'text-base font-semibold md:uppercase px-3 md:px-5 py-2 md:py-3 block ' +
									(openTab === 2
										? 'text-gray-900 rounded-t-lg font-semibold bg-yellow-500'
										: 'text-yellow-500 ')
								}
								role='tab'
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(2);
								}}
								aria-label="Tab2"
								data-toggle='tab'
								href='#link2'
								role='tablist'>
								Syllabus
							</a>
						</li>
						<li className='-mb-px border-yellow-400  border-solid  border-t-0 border-b-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-base font-semibold md:uppercase px-3 md:px-5 py-2 md:py-3  rounded-t-lg block leading-normal ' +
									(openTab === 3
										? 'text-gray-800 bg-yellow-500'
										: 'text-yellow-500 bg-primary')
								}
								role='tab'
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(3);
								}}
								data-toggle='tab'
								href='#link3'
								aria-label="Tab3"
								role='tablist'>
								Notes
							</a>
						</li>
					</ul>
					<br />
					<div className='relative flex  flex-col min-w-0 break-words w-full mb-6 rounded'>
						<div className='px-4 py-5 md:p-0 flex-auto'>
							<div className='tab-contab-space' role="tablist">
								<div
									role="tab"
									aria-selected="true" aria-controls="tab-1-pane" active
									className={
										openTab === 1 ? 'block' : 'hidden'
									}
									id='link1'>
									<Tab1 />
								</div>
								<div
									role="tab"
									aria-selected="false"
									className={
										openTab === 2 ? 'block' : 'hidden'
									}
									id='link2'>
									<Tab2 syllabus={syllabus} />
								</div>
								<div
									className={
										openTab === 3 ? 'block' : 'hidden'
									}
									aria-selected="false"
									role="tab"
									id='link3'>
									<Tab3 notes={notes} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs


