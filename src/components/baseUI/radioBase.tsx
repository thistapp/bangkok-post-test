"use client";

import {PaymentMenuModel} from "@/src/models/paymentModels";
import Image from "next/image";
import React, {useState} from "react";

interface Props {
	data: PaymentMenuModel[];
}

const RadioBase = ({data}: Props) => {
	const [isSelect, setIsSelect] = useState(0);

	const selectPayment = (index: number) => {
		setIsSelect(index);
	};
	return (
		<React.Fragment>
			{data.map((m, i) => {
				return (
					<div
						key={i}
						className={`w-32 border-2 ${
							isSelect === i
								? "border-[#527DFA] bg-[#EDF2FE]"
								: "bg-white border-[#D8D8DD]"
						} py-2 px-4`}
						onClick={() => selectPayment(i)}
					>
						{m.image && (
							<Image
								src={m.image}
								width={50}
								height={50}
								alt='logo'
								className='w-8 h-8'
							/>
						)}
						<div className=''>{m.title}</div>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default RadioBase;
