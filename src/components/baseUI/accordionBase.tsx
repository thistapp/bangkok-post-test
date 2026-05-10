import React from "react";

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
			{isOpen && (
				<div className='mt-2 overflow-hidden transition-all duration-300 ease-in-out'>
					{answer}
				</div>
			)}
		</div>
	);
};

export default AccordionBase;
