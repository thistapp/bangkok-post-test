const BoxBaseComponent = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={`w-160 flex flex-col items-center px-8 py-12 rounded-[3px] ${className}`}
		>
			{children}
		</div>
	);
};

export default BoxBaseComponent;
