"use client";

import {fuqEpaperType} from "@/config/epaper/fuq";
import {useState} from "react";
import AccordionBase from "../baseUI/accordionBase";

const FuqComponent = () => {
	const [selectIndex, setSelectIndex] = useState<number | null | undefined>(
		undefined,
	);
	const selectQuestion = (index: number) => {
		debugger;
		if (selectIndex === undefined) {
			console.log("test");
			setSelectIndex(index);
			return;
		}
		setSelectIndex(undefined);
	};

	return (
		<div className='w-full flex flex-wrap justify-center gap-4'>
			{fuqEpaperType.map((m, i) => {
				return (
					<AccordionBase
						key={i}
						id={i as number}
						question={m.question}
						answer={m.answer}
						isOpen={selectIndex === i}
						setOpen={() => selectQuestion(i)}
					/>
				);
			})}
			<div className=''></div>
		</div>
	);
};

export default FuqComponent;
