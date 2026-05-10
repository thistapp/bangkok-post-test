"use client";

import Image from "next/image";
import {HeaderMenus} from "@/config/menus/headerMenus";
import Link from "next/link";
import {useState} from "react";

const HeaderComponents = () => {
	const defaultSelectedMenu = HeaderMenus[0].label
		.toLocaleLowerCase()
		.replace(" ", "-");

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-full flex flex-wrap justify-between h-20 top-0 left-0 bg-[#0054C6] text-white px-10 sticky lg:static z-50'>
			<div className='my-auto w-1/2'>
				<Link href={"/"}>
					<Image
						src={"/icon/bp-logo.svg"}
						width={100}
						height={100}
						alt=''
						className='w-2/3 lg:w-1/3'
					/>
				</Link>
			</div>
			<div className='my-auto hidden lg:flex flex-wrap gap-4 w-1/2 justify-end'>
				{HeaderMenus.map((menu, index) => (
					<p
						key={index}
						className={`cursor-pointer ${
							menu.label.toLocaleLowerCase().replace(" ", "-") ===
							defaultSelectedMenu
								? "underline"
								: ""
						} hover:underline`}
					>
						<a href={menu.url} target='_blank' rel='noopener noreferrer'>
							{menu.label}
						</a>
					</p>
				))}
			</div>
			<div className='flex lg:hidden my-auto'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='relative w-8 h-8 flex flex-col justify-center items-center gap-1.5'
				>
					<span
						className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out
        ${isOpen ? "rotate-45 translate-y-2" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-0 scale-x-0" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out
        ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
					/>
				</button>
			</div>
			<div
				className={`absolute top-20 left-0 h-screen w-screen bg-white ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<div className='w-full flex flex-col justify-center items-center mt-24 text-[#0054C6] gap-6 text-2xl'>
					<p className='flex items-center gap-2 text-[#0054C6] '>
						<svg
							className='text-[#0054C6]'
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<circle cx='12' cy='12' r='10' />
							<circle cx='12' cy='10' r='3' />
							<path d='M7 20.662v-1.162a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.162' />
						</svg>
						<span className='font-medium'>Sign in</span>
					</p>
					{HeaderMenus.map((menu, index) => (
						<p
							key={index}
							className={`cursor-pointer ${
								menu.label.toLocaleLowerCase().replace(" ", "-") ===
								defaultSelectedMenu
									? "underline"
									: ""
							} hover:underline`}
						>
							<a href={menu.url} target='_blank' rel='noopener noreferrer'>
								{menu.label}
							</a>
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeaderComponents;
