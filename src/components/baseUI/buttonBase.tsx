const ButtonBaseUI = ({
	className,
	onClick,
	children,
}: {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={`w-70 bg-black text-white p-4 text-center rounded-md cursor-pointer mt-4 text-lg border-2 border-black hover:bg-white hover:text-black transition-all ease-in-out ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default ButtonBaseUI;
