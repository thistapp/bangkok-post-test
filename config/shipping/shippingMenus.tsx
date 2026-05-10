import {ShippingMenuModel, shippingTypeEnum} from "@/src/models/shippingModels";

export const shippingMenus: ShippingMenuModel[] = [
	{
		title: "Print Subscription (Thailand Only)",
		desc: "Get the Bangkok Post delivered to your home in Bangkok and enjoy the classic print reading experience.",
		shippingType: shippingTypeEnum.printType,
	},
	{
		title: "Digital Subscription",
		desc: "Unlimited access to Bangkok Post’s exclusive online journalism, including premium stories, expert insight, and real-time updates.",
		shippingType: shippingTypeEnum.digitalType,
	},
];
