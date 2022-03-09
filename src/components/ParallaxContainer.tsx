import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { BubbleParallaxLayer } from "./BubbleParallaxLayer";
import { HeroContent } from "./HeroContent";

import { PersonalForm } from "./PersonalForm";
import { OrderForm } from "./OrderForm";
import { Sidebar } from "./Sidebar";

export const ParallaxContainer = () => {
	const parallax = useRef<IParallax>(null!);

	return (
		<Parallax
			ref={parallax}
			pages={4}
			// style={{ maxWidth: "85vw", width: "100%" }}
			style={{ width: "100%" }}
		>
			<ParallaxLayer
				offset={0}
				speed={0}
				sticky={{ start: 0, end: 4 }}
				style={{ width: "15%" }}
			>
				<Sidebar parallax={parallax} />
			</ParallaxLayer>

			<ParallaxLayer
				offset={0}
				speed={0}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#eee8e2",
				}}
				className="parallaxLayer"
				onClick={() => parallax.current.scrollTo(1)}
			>
				<HeroContent />
			</ParallaxLayer>

			<ParallaxLayer
				offset={1}
				speed={0}
				className="nameForm parallaxLayer"
				style={{ backgroundColor: "#eee8e2" }}
			>
				<PersonalForm parallax={parallax} />
			</ParallaxLayer>

			<BubbleParallaxLayer
				offset={0}
				speed={-0.8}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"20%"}
				marginTop={"20%"}
			/>

			<BubbleParallaxLayer
				offset={0}
				speed={-0.8}
				emoji={"🍕"}
				width={"6rem"}
				height={"6rem"}
				marginLeft={"90%"}
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
					backgroundColor: "#fe6d6d",
				}}
				className="parallaxLayer"
			>
				<OrderForm parallax={parallax} />
			</ParallaxLayer>

			<ParallaxLayer
				offset={3}
				speed={2}
				style={{ backgroundColor: "#eee8e2" }}
			></ParallaxLayer>

			<ParallaxLayer
				offset={3}
				speed={0.7}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "large",
				}}
				className="parallaxLayer"
				// onClick={() => parallax.current.scrollTo(0)}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div>Thank you!</div>
					<div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
						<input
							type={"submit"}
							name="next"
							className="orderSubmitButton"
							value={"Back to order"}
							onClick={(e) => {
								e.preventDefault();
								parallax.current.scrollTo(2);
							}}
						/>
						<input
							type={"submit"}
							name="next"
							className="orderSubmitButton"
							value={"Back to start"}
							onClick={(e) => {
								e.preventDefault();
								parallax.current.scrollTo(0);
							}}
						/>
					</div>
				</div>
			</ParallaxLayer>
		</Parallax>
	);
};
