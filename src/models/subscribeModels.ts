export interface subScribeModels {
	label: string;
	price: string;
	discountPrice: string;
	desc: string;
	suggested?: subscribeTypeEnum;
}

export enum subscribeTypeEnum {
	Introductory = "Introductory",
	PopularPack = "Popular pack",
}
