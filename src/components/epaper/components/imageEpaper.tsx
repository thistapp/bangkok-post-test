import Image from "next/image";

const ImageEpaper = ({
	img,
	alt,
}: {
	img: string | undefined;
	alt: string | undefined;
}) => {
	return (
		<Image
			src={img || ""}
			width={1000}
			height={1000}
			alt={alt || ""}
			className='w-full pr-3'
		/>
	);
};

export default ImageEpaper;
