import Link from 'next/Link';
import { useState } from 'react';
function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);

	return (
		<div className='relative'>
			<div className='sm:w-full top-2 '>
				<nav className='max-w-2xl m-auto '>
					<ul className='hidden sm:flex flex-grow  m-auto justify-evenly text-sm lg:text-lg font-semibold '>
						<Link href='/'>Home</Link>
						<Link href='/research'>Research</Link>
						<Link href='/members'>Members</Link>
						<Link href='/publications'>Publications</Link>
						<Link href='/links'>Links</Link>
						<Link href='/contact'>Contact</Link>
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
					<li className='p-2'>
						<Link href='/' className='inline-table'>
							Home
						</Link>
					</li>
					<li className='p-2'>
						<Link href='/research' className='inline-table'>
							Research
						</Link>
					</li>
					<li className='p-2'>
						<Link href='/members' className='inline-table'>
							Members
						</Link>
					</li>
					<li className='p-2'>
						<Link href='/publications'>Publications</Link>
					</li>
					<li className='p-2'>
						<Link href='/links'>Links</Link>
					</li>
					<li className='p-2'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export default NavBar;
