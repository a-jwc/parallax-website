import "./App.scss";
import { ParallaxContainer } from "./components/ParallaxContainer";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div style={{ height: "80vh" }}>
				<ParallaxContainer></ParallaxContainer>
			</div>
		</div>
	);
}

export default App;
