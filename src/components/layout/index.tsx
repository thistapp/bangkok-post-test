import FooterComponents from "./footer";
import HeaderComponents from "./header";

export default function LayoutComponents({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeaderComponents />
			<div className=''>{children}</div>
			<FooterComponents />
		</>
	);
}
