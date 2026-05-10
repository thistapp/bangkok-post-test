"use client";

import {subScribeModels} from "@/src/models/subscribeModels";
import ButtonBaseUI from "../baseUI/buttonBase";
import CardComponents from "../baseUI/cardBase";
import {useState} from "react";

const SubscribeComponent = ({data}: {data: subScribeModels[]}) => {
	const [error, isError] = useState(false);

	return (
		<div className='w-full relative min-h-screen lg:min-h-auto'>
			<div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
				{data.map((m, i) => {
					return <CardComponents {...m} key={i} />;
				})}
			</div>
			<div className='sticky lg:static bottom-8 w-full flex flex-col items-center mt-6'>
				{error && (
					<p className='text-red-500 text-sm lg:text-lg'>
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
		</div>
	);
};

export default SubscribeComponent;
