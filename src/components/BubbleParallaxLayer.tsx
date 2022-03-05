import { ParallaxLayer } from "@react-spring/parallax";

interface Props {
	offset: number;
	speed: number;
	emoji: string;
	width?: string;
	height?: string;
	marginLeft?: string;
	marginRight?: string;
	marginTop?: string;
}

export const BubbleParallaxLayer = ({
	offset,
	speed,
	emoji,
	width,
	height,
	marginLeft,
	marginRight,
	marginTop,
}: Props) => {
	return (
		<ParallaxLayer
			offset={offset}
			speed={speed}
			style={{
				display: "flex",
				backgroundColor: "#aff5fe",
				width: `${width}` || "6rem",
				height: `${height}` || "6rem",
				borderRadius: "50%",
				justifyContent: "center",
				marginLeft: `${marginLeft}`,
				marginTop: `${marginTop}`,
				marginRight: `${marginRight}`,
			}}
		>
			<p
				style={{
					placeSelf: "center",
				}}
			>
				{emoji}
			</p>
		</ParallaxLayer>
	);
};
