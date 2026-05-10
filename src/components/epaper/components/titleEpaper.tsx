import {SlideConfig} from "@/config/slide/slideConfig";

const TitleEpaper = ({
	id,
	data,
	selectedId,
	selectedData,
}: {
	id: number;
	data: SlideConfig;
	selectedId: number | undefined;
	selectedData: (data: SlideConfig, id: number) => void;
}) => {
	return (
		<div
			className={` cursor-pointer text-md p-4 border-l-[6px] ${
				selectedId === id ? "bg-[#c5d5f434] border-[#c7d8ff]" : "border-white"
			}  hover:bg-[#c5d5f434] hover:border-[#c7d8ff]`}
			onClick={() => selectedData(data, id)}
		>
			<p className='font-bold text-lg'>{data.title}</p>
			<p className='font-light text-mds'>{data.desc}</p>
		</div>
	);
};

export default TitleEpaper;
