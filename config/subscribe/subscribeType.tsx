import {subScribeModels, subscribeTypeEnum} from "@/src/models/subscribeModels";

export const subscribeType: subScribeModels[] = [
	{
		label: "1 Month",
		price: "700 Baht",
		discountPrice: "",
		desc: "Plus 5 free back issues",
		suggested: subscribeTypeEnum.Introductory,
	},
	{
		label: "3 Months",
		price: "2,100 Baht/month",
		discountPrice: "1,700 Baht",
		desc: "Plus 10 free back issues",
	},
	{
		label: "6 Months",
		price: "4,200 Baht/month",
		discountPrice: "2,800 Baht",
		desc: "Plus 30 free back issues",
	},
	{
		label: "12 Months",
		price: "8,400 Baht/month",
		discountPrice: "4,700 Baht",
		desc: "Plus 5 free back issues",
		suggested: subscribeTypeEnum.PopularPack,
	},
	{
		label: "36 Month",
		price: "25,200 Baht/month",
		discountPrice: "12,600 Baht",
		desc: "Plus 10 free back issues",
	},
	{
		label: "Epaper + Print Bundle 12 Months",
		price: "12,850 Baht",
		discountPrice: "",
		desc: "Plus 30 free back issues",
	},
];
