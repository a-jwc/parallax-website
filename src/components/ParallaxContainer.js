import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { EmojiParallaxLayer } from "./EmojiParallaxLayer";
import { HeroContent } from "./HeroContent";

export const ParallaxContainer = () => {
	return (
		<Parallax pages={2} style={{ maxWidth: "85vw", width: "100%" }}>
			<ParallaxLayer
				offset={0}
				speed={2.5}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "pink",
				}}
			>
        <HeroContent />
			</ParallaxLayer>

      <EmojiParallaxLayer offset={.7} speed={-1.9} left={"17rem"} emoji={"🍕"}/>

      <EmojiParallaxLayer offset={.4} speed={-1.4} left={"50rem"} bottom={"4rem"} emoji={"🍕"}/>

      <EmojiParallaxLayer offset={.3} speed={-1.5} left={"41rem"} bottom={"20rem"} emoji={"🍕"}/>

      <EmojiParallaxLayer offset={.5} speed={-1.2} left={"15rem"} bottom={"26rem"} emoji={"🍕"}/>

      <EmojiParallaxLayer offset={.6} speed={-1.3} left={"4rem"} bottom={"50rem"} emoji={"🍕"}/>

      <EmojiParallaxLayer offset={.8} speed={-.9} left={"4rem"} bottom={"40rem"} emoji={"🍕"}/>

			<ParallaxLayer
				offset={1.5}
				speed={-0.7}
				style={{
					display: "flex",
					backgroundColor: "#aff5fe",
					width: "6rem",
					height: "6rem",
					borderRadius: "50%",
					position: "relative",
					top: "5rem",
					left: "20rem",
					justifyContent: "center",
				}}
			>
				<p
					style={{
						placeSelf: "center",
					}}
				>
					Computer Science
				</p>
			</ParallaxLayer>

			<ParallaxLayer
				offset={1.4}
				speed={-0.5}
				style={{
					display: "flex",
					backgroundColor: "#aff5fe",
					width: "6rem",
					height: "6rem",
					borderRadius: "50%",
					left: "50rem",
					justifyContent: "center",
				}}
			>
				<p
					style={{
						placeSelf: "center",
					}}
				>
					SFSU
				</p>
			</ParallaxLayer>

			<ParallaxLayer
				offset={1}
				speed={2}
				style={{ backgroundColor: "#ff6d6d" }}
			/>

			<ParallaxLayer
				offset={1}
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
