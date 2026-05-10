import {FooterMenus} from "@/config/menus/footerMenus";
import Link from "next/link";

const FooterComponents = () => {
	return (
		<footer className='w-full bg-black p-0 lg:py-6 lg:px-8 text-white'>
			<div className='w-full hidden lg:flex flex-wrap text-sm gap-2'>
				<div className='w-full capitalize font-bold'>
					<p>© 2025 bangkok post public company limited</p>
				</div>
				<div className='w-full flex flex-row gap-8'>
					{FooterMenus.map((menu, index) => (
						<p key={index} className='cursor-pointer hover:underline'>
							{menu.label}
						</p>
					))}
				</div>
			</div>
			<div className='w-full flex lg:hidden flex-wrap text-sm gap-2'>
				<div className='w-full flex flex-wrap gap-4 p-4'>
					<p className='font-bold text-lg'>Troubleshoot ?</p>
					<p className='text-xs'>
						Contact{" "}
						<Link
							href={"mailto:enewspaper@bangkokpost.co.th"}
							className='underline'
						>
							enewspaper@bangkokpost.co.th
						</Link>{" "}
						or call{" "}
						<Link href={"tel:026164000"} className='underline'>
							02 616 4000
						</Link>{" "}
						ext.4615, 4618 (M-F 8.30 a.m. - 5.30 p.m.)
					</p>
				</div>
				<div className='w-full bg-[#0054C6] p-4'>
					<p>© 2025 bangkok post public company limited</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterComponents;
