import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { BubbleParallaxLayer } from "./BubbleParallaxLayer";
import { HeroContent } from "./HeroContent";
import { useSelector, useDispatch } from "react-redux";
import {
	updateName,
	updatePhoneNumber,
	updateOrder,
} from "../features/order/orderSlice";
import { PersonalForm } from "./PersonalForm";
import { OrderForm } from "./OrderForm";

export const ParallaxContainer = () => {
	const parallax = useRef<IParallax>(null!);
	return (
		<Parallax
			ref={parallax}
			pages={3}
			style={{ maxWidth: "85vw", width: "100%" }}
		>
			<ParallaxLayer
				offset={0}
				speed={0}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#eee8e2",
				}}
				onClick={() => parallax.current.scrollTo(1)}
			>
				<HeroContent />
			</ParallaxLayer>


			<ParallaxLayer
				offset={1}
				speed={0}
				className="nameForm"
				style={{ backgroundColor: "#eee8e2" }}
			>
				<PersonalForm parallax={parallax} />
			</ParallaxLayer>

			<BubbleParallaxLayer
				offset={0}
				speed={-1.2}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"20%"}
				marginTop={"20%"}
			/>

			<BubbleParallaxLayer
				offset={0}
				speed={-1.2}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"75%"}
				marginTop={"20%"}
			/>

			<ParallaxLayer
				offset={2}
				speed={0}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
          backgroundColor: "#fe6d6d"
				}}
			>
				<OrderForm />
			</ParallaxLayer>
		</Parallax>
	);
};
