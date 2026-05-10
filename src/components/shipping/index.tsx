import {ShippingMenuModel} from "@/src/models/shippingModels";
import BoxBaseComponent from "../baseUI/boxBase";
import ButtonBaseUI from "../baseUI/buttonBase";
import Image from "next/image";

const ShippingComponent = (data: ShippingMenuModel) => {
	return (
		<BoxBaseComponent
			className={`${
				data.shippingType === "print" ? "bg-[#E4E4E4]" : "bg-[#C5D5F4]"
			} rounded-[3px]`}
		>
			<div className='relative w-full mb-6'>
				{data.shippingType === "print" ? (
					<div className='flex flex-wrap items-center mx-auto w-62.5 h-48'>
						<Image
							src={"/shipping/truck.png"}
							alt='truck Shipping'
							width={250}
							height={250}
							className='z-10'
						/>
						<Image
							src={"/shipping/newspaper.png"}
							alt='Paper Shipping'
							width={100}
							height={100}
							className='absolute top-0 z-0 w-36 left-0 lg:left-28 -rotate-45'
						/>
					</div>
				) : (
					<div className='flex flex-wrap items-center mx-auto w-62.5 h-48'>
						<Image
							src={"/shipping/digital01.png"}
							alt='Digital Shipping'
							width={500}
							height={500}
							className='align-middle z-10'
						/>
					</div>
				)}
			</div>
			<h2>{data.title}</h2>
			<p>{data.desc}</p>
			<div className='w-full flex flex-wrap justify-center gap-4'>
				{data.shippingType === "print" ? (
					<>
						<ButtonBaseUI>Subscribe</ButtonBaseUI>
						<ButtonBaseUI>Where to find us</ButtonBaseUI>
					</>
				) : (
					<>
						<ButtonBaseUI>Subscribe</ButtonBaseUI>
					</>
				)}
			</div>
		</BoxBaseComponent>
	);
};

export default ShippingComponent;
