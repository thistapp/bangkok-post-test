"use client";

import {useMemo, useState} from "react";
import {epaperType} from "@/config/epaper/epaper";
import ImageEpaper from "./components/imageEpaper";
import TitleEpaper from "./components/titleEpaper";
import SlideComponent from "../slide";
import {SlideConfig} from "@/config/slide/slideConfig";

const EpaperComponent = () => {
	const [selected, setSelected] = useState<SlideConfig | null | undefined>(
		undefined,
	);
	const defaultData = useMemo(() => {
		if (selected) {
			return selected;
		}
		return epaperType[0];
	}, [selected]);

	const selectedData = (data: SlideConfig, index: number) => {
		const setNewData = {
			...data,
			id: index,
		};
		setSelected(setNewData);
	};

	return (
		<div className='w-full flex flex-wrap'>
			<div className='w-full hidden lg:flex flex-wrap '>
				<div className='w-1/2'>
					<ImageEpaper
						img={defaultData.imageDesktop || ""}
						alt={defaultData.title}
					/>
				</div>
				<div className='w-1/2 text-left flex flex-wrap gap-4'>
					{epaperType.map((m, i) => {
						return (
							<div key={i} className='w-9/12'>
								<TitleEpaper
									id={i}
									data={m}
									selectedId={defaultData?.id}
									selectedData={selectedData}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className='w-full flex lg:hidden flex-wrap'>
				<SlideComponent data={epaperType} />
			</div>
		</div>
	);
};

export default EpaperComponent;
