import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { BubbleParallaxLayer } from "./BubbleParallaxLayer";
import { HeroContent } from "./HeroContent";
import "./ParallaxContainer.scss";
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updatePhoneNumber, updateOrder } from "../features/order/orderSlice";
import { PersonalForm } from "./PersonalForm";

export const ParallaxContainer = () => {
	const parallax = useRef<IParallax>(null!);
	return (
		<Parallax
			ref={parallax}
			pages={4}
			style={{ maxWidth: "85vw", width: "100%" }}
		>
			<ParallaxLayer
				offset={0}
				speed={2.5}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "pink",
				}}
				onClick={() => parallax.current.scrollTo(1)}
			>
				<HeroContent />
			</ParallaxLayer>

			<BubbleParallaxLayer
				offset={0}
				speed={2}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"20%"}
				marginTop={"20%"}
			/>

			<BubbleParallaxLayer
				offset={0}
				speed={2}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"75%"}
				marginTop={"20%"}
			/>

			<ParallaxLayer
				offset={1}
				speed={2}
				className="nameForm"
				style={{ backgroundColor: "pink" }}
			>
        <PersonalForm parallax={parallax} />
			</ParallaxLayer>

			<ParallaxLayer
				offset={2}
				speed={2}
				style={{ backgroundColor: "#ff6d6d" }}
			/>

			<ParallaxLayer
				offset={2}
				speed={0.5}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
				}}
			>
				<p>Scroll up</p>
			</ParallaxLayer>
		</Parallax>
	);
};
