export interface ShippingMenuModel {
	title: string;
	desc: string;
	shippingType: shippingTypeEnum;
}

export enum shippingTypeEnum {
	printType = "print",
	digitalType = "digital",
}
