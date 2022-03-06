import "./styles.scss";

export const HeroContent = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#ca6d6d",
				padding: "2rem",
				borderRadius: "2rem",
				color: "white",
			}}
			className="heroContent"
		>
			<p>welcome to pizzas</p>
			<p>click for pizzas</p>
			<div></div>
		</div>
	);
};
