import { ParallaxLayer } from "@react-spring/parallax";
import "./styles.scss";

interface Props {
	offset: number;
	speed: number;
	emoji: string;
	width?: string;
	height?: string;
	marginLeft?: string;
	marginRight?: string;
	marginTop?: string;
  marginBottom?: string;
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
  marginBottom
}: Props) => {
	return (
		<ParallaxLayer
			offset={offset}
			speed={speed}
			style={{
				display: "flex",
				width: `${width}` || "6rem",
				height: `${height}` || "6rem",
				borderRadius: "50%",
				justifyContent: "center",
				marginLeft: `${marginLeft}`,
				marginTop: `${marginTop}`,
				marginRight: `${marginRight}`,
				marginBottom: `${marginBottom}`,
			}}
			className="bubble"
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
