import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	const router = useRouter();

	return (
		<div className='relative '>
			<div className='sm:w-full top-2 '>
				<nav
					className={
						router.pathname == '/'
							? 'bg-gray-500 max-w-2xl m-auto p-2  rounded-t-none rounded-lg text-white'
							: 'bg-primary max-w-2xl m-auto p-2  rounded-t-none rounded-lg text-white'
					}>
					<ul className='hidden sm:flex flex-grow  m-auto justify-evenly text-white text-sm lg:text-lg font-semibold '>
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
								router.pathname == '/research'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/research'>Research</Link>
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
								router.pathname == '/publications'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/publications'>Publications</Link>
						</li>
						<li
							className={
								router.pathname == '/links'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/links'>Links</Link>
						</li>
						<li
							className={
								router.pathname == '/contact'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/contact'>Contact</Link>
						</li>
						<li
							className={
								router.pathname == '/gallery'
									? 'border-solid border-yellow-400 border-b-2 text-yellow-400'
									: ''
							}>
							<Link href='/gallery'>Gallery</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className='sm:hidden top-0 h-auto'>
				{!isOpen && (
					<button
						className='text-4xl p-2 focus:hidden'
						onClick={() => {
							isOpen ? setIsOpen(false) : setIsOpen(true);
						}}>
						&equiv;
					</button>
				)}
			</div>
			<aside
				className={
					isOpen
						? 'translate-x-full transition-all ease-in p-5 duration-100 absolute w-screen  top-0 z-10 sm:hidden h-screen flex-shrink-0 bg-primary'
						: 'hidden'
				}>
				<div
					className='text-right cursor-pointer'
					onClick={() => {
						setIsOpen(false);
					}}>
					&#10005;
				</div>
				<br />
				<ul className='sm:flex flex-grow m-auto text-center m-top-auto text-lg lg:text-xl font-light'>
					<li
						className={
							router.pathname == '/'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/' className='inline-table'>
							Home
						</Link>
					</li>
					<li
						className={
							router.pathname == '/research'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/research' className='inline-table'>
							Research
						</Link>
					</li>
					<li
						className={
							router.pathname == '/scholars'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/scholars' className='inline-table'>
							Scholars
						</Link>
					</li>
					<li
						className={
							router.pathname == '/publications'
								? 'border-solid border-white p-2'
								: 'p-2'
						}>
						<Link href='/publications'>Publications</Link>
					</li>
					<li
						className={
							router.pathname == '/links'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/links'>Links</Link>
					</li>
					<li
						className={
							router.pathname == '/contact'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/contact'>Contact</Link>
					</li>
					<li
						className={
							router.pathname == '/gallery'
								? 'border-solid border-yellow-400 border-b-2 text-yellow-400 p-2'
								: 'p-2'
						}>
						<Link href='/gallery'>Gallery</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export default NavBar;
