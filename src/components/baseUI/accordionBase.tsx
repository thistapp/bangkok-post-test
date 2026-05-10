"use client";

import React, {useEffect, useRef, useState} from "react";

const AccordionBase = ({
	question,
	id,
	answer,
	isOpen,
	setOpen,
}: {
	question: string;
	id: number;
	answer: React.ReactNode;
	isOpen?: boolean;
	setOpen: (index: number) => void;
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? contentRef.current.scrollHeight + 5 : 0);
		}
	}, [isOpen]);

	return (
		<div className='w-full my-4 lg:p-4 border-t-2' onClick={() => setOpen(id)}>
			<div className='flex flex-row justify-between items-center cursor-pointer gap-8'>
				<h3 className='font-bold text-lg'>{`${question}`}</h3>
				<div
					className={`transition-transform duration-300 text-3xl  ${
						isOpen ? "rotate-45" : "rotate-0"
					}`}
				>
					+
				</div>
			</div>
			<div
				style={{height: `${height}px`}}
				className='overflow-hidden transition-[height] duration-300 ease-in-out'
			>
				<div ref={contentRef} className='mt-2'>
					{answer}
				</div>
			</div>
		</div>
	);
};

export default AccordionBase;
