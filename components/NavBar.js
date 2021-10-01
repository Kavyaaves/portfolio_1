import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	return (
		<div className='relative'>
			<div className='w-full top-2'>
				<nav
					className={
						router.pathname == '/'
							? 'bg-black max-w-4xl m-auto opacity-95  rounded-t-none rounded-lg text-white'
							: 'bg-primary max-w-4xl m-auto  rounded-t-none rounded-lg text-white'
					}>
					<ul className='hidden sm:flex flex-grow p-2 m-auto justify-evenly text-white text-sm lg:text-lg font-semibold '>
						<li
							className={
								router.pathname == '/'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/'>Home</Link>
						</li>
						<li
							className={
								router.pathname == '/freshwater-algae'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/freshwater-algae'>Freshwater Algae</Link>
						</li>
						<li
							className={
								router.pathname == '/marine-algae'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/marine-algae'>Marine Algae</Link>
						</li>
						<li
							className={
								router.pathname == '/research'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/research'>Research</Link>
						</li>
						<li
							className={
								router.pathname == '/publications'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/publications'>Publications</Link>
						</li>
						<li
							className={
								router.pathname == '/scholars'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/scholars'>Scholars</Link>
						</li>
						<li
							className={
								router.pathname == '/student-corner'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/student-corner'>Student Corner</Link>
						</li>
						<li
							className={
								router.pathname == '/links'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/links'>Links</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className='md:hidden block h-auto'>
				{!isOpen && (
					<>
						<br />
						<button
							aria-label="menu"
							className='text-5xl border-none p-4 h-10 rounded-lg bg-primary cursor-pointer ml-6 focus:outline-none hover:bg-yellow-500'
							onClick={(e) => {
								e.preventDefault();
								setIsOpen(!isOpen);
							}}>
							<svg
								width='18'
								height='12'
								className=''
								viewBox='0 0 18 12'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z'
									fill='white'
								/>
							</svg>
						</button>
					</>
				)}

				{isOpen && (
					<nav className='absolute md:relative top-0 left-0 z-20 p-6 font-semibold w-full md:w-auto h-screen bg-primary'>
						<button
							aria-label="menu"
							className='text-right text-3xl cursor-pointer'
							onClick={(e) => {
								e.preventDefault();
								setIsOpen(false);
							}}>
							&#10005;
						</button>
						<br />
						<ul className='sm:flex flex-grow m-auto text-center m-top-auto text-lg lg:text-xl font-light'>
							<li
								className={
									router.pathname == '/'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/'>Home</Link>
							</li>
							<li
								className={
									router.pathname == '/freshwater-algae'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/freshwater-algae'>FreshWater Algae</Link>
							</li>
							<li
								className={
									router.pathname == '/marine-algae'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/marine-algae'>Marine Algae</Link>
							</li>
							<li
								className={
									router.pathname == '/research'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/research'>Research</Link>
							</li>
							<li
								className={
									router.pathname == '/publications'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/publications'>Publications</Link>
							</li>
							<li
								className={
									router.pathname == '/scholars'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/scholars'>Scholars</Link>
							</li>
							<li
								className={
									router.pathname == '/student-corner'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/student-corner'>
									Student Corner
								</Link>
							</li>
							<li
								className={
									router.pathname == '/links'
										? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
										: 'p-2'
								}>
								<Link href='/links'>Links</Link>
							</li>


						</ul>
					</nav>
				)}
			</div>
		</div>
	);
}

export default NavBar;
