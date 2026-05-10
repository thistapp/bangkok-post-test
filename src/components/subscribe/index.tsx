"use client";

import {subScribeModels} from "@/src/models/subscribeModels";
import ButtonBaseUI from "../baseUI/buttonBase";
import CardComponents from "../baseUI/cardBase";
import {useState} from "react";

const SubscribeComponent = ({data}: {data: subScribeModels[]}) => {
	const [error, isError] = useState(false);

	return (
		<section className='w-full relative'>
			<div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
				{data.map((m, i) => {
					return <CardComponents {...m} key={i} />;
				})}
			</div>
			<div className='w-full place-items-center'>
				{error && (
					<p className='text-red-500'>
						No plan selected. Please choose one to continue
					</p>
				)}
				<ButtonBaseUI
					onClick={() => isError(true)}
					className='lg:static sticky'
				>
					Subscribe now
				</ButtonBaseUI>
				<p className='text-sm text-gray-500 mt-2'>You can cancel anytime</p>
			</div>
		</section>
	);
};

export default SubscribeComponent;
