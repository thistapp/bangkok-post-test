"use client";

import {SlideConfig} from "@/config/slide/slideConfig";
import {useMemo, useState} from "react";
import Image from "next/image";

interface Props {
	data: SlideConfig[];
}

const SlideComponent = ({data}: Props) => {
	const [current, setCurrent] = useState(0);

	const imageMobile = useMemo(() => {
		if (data.find((img) => img?.imageMobile)) {
			return data[current]?.imageMobile;
		}
		return data[current]?.imageDesktop;
	}, [data, current]);

	const selectedData = useMemo(() => {
		return data[current];
	}, [data, current]);

	return (
		<div className='relative w-full'>
			<div className={`block lg:hidden`}>
				<Image
					src={imageMobile || ""}
					alt='test'
					width={1280}
					height={1000}
					className='w-full'
				/>
			</div>
			<div className='hidden lg:block'>
				<Image
					src={selectedData.imageDesktop || ""}
					alt='test'
					width={1280}
					height={1000}
					className='w-full'
				/>
			</div>
			{data.find((data) => data.title) && (
				<div className='cursor-pointer text-md p-4 border-l-[6px] bg-[#c5d5f434] border-[#c7d8ff] mb-6'>
					<div className='text-left'>
						<h3 className='font-bold text-xl'>{selectedData.title}</h3>
						<p>{selectedData.desc}</p>
					</div>
				</div>
			)}
			<div className='absolute left-1/2 -translate-x-1/2 -translate-y-4 flex items-center justify-center gap-2 py-4'>
				{data.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`h-3 w-3 rounded-full transition-all duration-300 ${
							current === index ? "bg-black scale-125" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default SlideComponent;
