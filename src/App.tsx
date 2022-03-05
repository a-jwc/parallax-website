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
      <Sidebar />
			<div style={{ height: "80vh" }}>
				<ParallaxContainer></ParallaxContainer>
			</div>
		</div>
	);
}

export default App;
