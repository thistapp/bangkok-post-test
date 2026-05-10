import {subScribeModels} from "@/src/models/subscribeModels";

const CardComponents = (data: subScribeModels) => {
	return (
		<div className='group w-full h-47.5 flex flex-col relative bg-white p-8 rounded-md items-center border-2 border-gray-300 gap-4 mb-5 hover:shadow-lg cursor-pointer transition-all ease-in-out'>
			{data.suggested && (
				<div className='absolute -top-3 right-4 bg-[#C5D5F4] text-black text-xs font-bold px-2 py-1 rounded-lg'>
					{data.suggested}
				</div>
			)}
			<div className='absolute h-6 w-6 top-2 left-2 rounded-full border border-gray-400 bg-gray-100'>
				<div
					className={`absolute h-4 w-4 top-0.75 left-0.75 rounded-full bg-black opacity-0 group-hover:opacity-100 ease-in-out transition-all `}
				/>
			</div>
			<div className='text-lg font-light text-center'>{data.label}</div>
			{data.discountPrice ? (
				<div className='text-center'>
					<p className='text-lg font-bold text-[20px] text-[#001868]'>
						{data.discountPrice}
					</p>
					<p className='line-through text-[#9F9F9F] text-[11px]'>
						{data.price}
					</p>
				</div>
			) : (
				<div className='text-lg font-bold text-[20px] text-[#001868]'>
					{data.price}
				</div>
			)}
			<div className='text-[10px] text-[#424242] font-light'>{data.desc}</div>
		</div>
	);
};

export default CardComponents;
