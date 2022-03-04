import logo from "./logo.svg";
import "./App.css";
import { ParallaxContainer } from "./components/ParallaxContainer";

function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div
				style={{
					maxWidth: "15vw",
					width: "100%",
					backgroundColor: "#363645",
					height: "100vh",
					color: "white",
				}}
			>
				Something here
			</div>
			<div style={{ height: "80vh" }}>
				<ParallaxContainer></ParallaxContainer>
			</div>
		</div>
	);
}

export default App;
