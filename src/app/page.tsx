import {subscribeType} from "@/config/subscribe/subscribeType";
import EpaperComponent from "../components/epaper";
import FuqComponent from "../components/fuq";
import ShippingComponent from "../components/shipping";
import {shippingMenus} from "@/config/shipping/shippingMenus";
import SlideComponent from "../components/slide";
import {slideConfig} from "@/config/slide/slideConfig";
import SubscribeComponent from "../components/subscribe";

export default function Home() {
	return (
		<div className='w-full flex flex-wrap'>
			{/* section 1 slide */}
			<div className='w-full'>
				<SlideComponent data={slideConfig} />
			</div>
			{/* section 2 subscribe */}
			<div className='w-full h-full bg-[#F9F5EA] flex flex-col items-center px-8 py-12'>
				<SubscribeComponent data={subscribeType} />
			</div>
			{/* section 3 e paper */}
			<div className='w-full h-full bg-white flex flex-col items-center px-4 lg:px-8 py-6 lg:py-12 text-center'>
				<h1 className='text-xl lg:text-[32px] whitespace-pre-wrap mb-8'>
					{`There’s a better way to experience the \nBangkok Post Epaper`}
				</h1>
				<div className='w-full lg:w-9/12 flex flex-wrap justify-center'>
					<EpaperComponent />
				</div>
			</div>
			{/* section 4 fuq */}
			<div className='w-full h-full bg-[#F9F5EA] flex flex-col items-center px-4 lg:px-8 py-12'>
				<h1 className='text-[32px] whitespace-pre-wrap mb-8'>{`FUQ`}</h1>
				<div className='w-full lg:w-9/12'>
					<FuqComponent />
				</div>
			</div>
			{/* section 5 shipping */}
			<div className='w-full h-full bg-white flex flex-col items-center px-8 py-12 text-center'>
				<h1 className='text-2xl lg:text-[32px] whitespace-pre-wrap mb-8'>
					{`Choose the format you prefer, and enjoy\neven more with your subscription.`}
				</h1>
				<div className='w-10/12 flex flex-wrap justify-center gap-8'>
					{shippingMenus.map((m, i) => {
						return <ShippingComponent key={i} {...m} />;
					})}
				</div>
			</div>
		</div>
	);
}
