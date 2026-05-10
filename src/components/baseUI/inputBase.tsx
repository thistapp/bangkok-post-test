"use client";

import {useState} from "react";

export enum inputType {
	card = "card",
	expire = "expire",
	cvv = "cvv",
	text = "text",
}

interface Props {
	className?: string;
	placeHolder?: string;
	type?: string;
	name: string;
}

const InputBaseForm = ({
	className,
	placeHolder,
	name,
	type = "text",
}: Props) => {
	const [value, setValue] = useState("");

	function formatValue(value: string, type: string): string {
		switch (type) {
			case "card":
				return value
					.replace(/\D/g, "")
					.slice(0, 16)
					.replace(/(.{4})/g, "$1 ")
					.trim();
			case "expire":
				const digits = value.replace(/\D/g, "").slice(0, 4);
				return digits.length >= 3
					? digits.slice(0, 2) + " / " + digits.slice(2)
					: digits;
			case "cvv":
				return value.replace(/\D/g, "").slice(0, 3);
			default:
				return value;
		}
	}

	return (
		<div
			className={`${className} ${
				type === inputType.cvv && "relative"
			} w-full p-4 border-2 border-gray-200 rounded-md mt-4`}
		>
			<input
				className='w-full'
				type='text'
				inputMode='numeric'
				placeholder={placeHolder}
				name={name}
				value={value}
				onChange={(e) => setValue(formatValue(e.target.value, type))}
			/>
			{type === inputType.cvv && (
				<div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
					<svg
						width='32'
						height='24'
						viewBox='0 0 32 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							x='0.5'
							y='0.5'
							width='31'
							height='23'
							rx='3.5'
							stroke='#D1D5DB'
						/>
						<rect y='6' width='32' height='5' fill='#D1D5DB' />
						<rect x='4' y='14' width='14' height='3' rx='1' fill='#D1D5DB' />
						<rect x='20' y='14' width='8' height='3' rx='1' fill='#9CA3AF' />
					</svg>
				</div>
			)}
		</div>
	);
};

export default InputBaseForm;
