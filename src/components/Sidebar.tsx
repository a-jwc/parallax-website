import { IParallax } from "@react-spring/parallax";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateName,
	updatePhoneNumber,
	updateOrder,
	selectName,
	selectPhoneNumber,
	selectHasName,
	selectHasPhoneNumber,
	selectSize,
	selectHasSize,
	selectHasToppings,
	selectToppings,
} from "../features/order/orderSlice";
import { Logo } from "./Logo";
import "./sidebar.scss";

interface Parallax {
	parallax: React.MutableRefObject<IParallax>;
}

export const Sidebar = ({ parallax }: Parallax) => {
	const name = useSelector(selectName);
	const hasName = useSelector(selectHasName);

	const phoneNumber = useSelector(selectPhoneNumber);
	const hasPhoneNumber = useSelector(selectHasPhoneNumber);

	const size = useSelector(selectSize);
	const hasSize = useSelector(selectHasSize);

	const toppings: string[] = useSelector(selectToppings);
	const hasToppings = useSelector(selectHasToppings);

	const toppingsNodes = () => {
		return toppings.map((topping) => <div key={topping}>{topping}</div>);
	};

	const ColoredLine = () => <hr className="coloredLine" />;

	return (
		<div
			style={{
				maxWidth: "15vw",
				// width: "100%",
				backgroundColor: "#363645",
				height: "100vh",
				color: "white",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<Logo parallax={parallax} />
			<div className="sidebarSection">
				<h1>Your Info</h1>
				<ColoredLine />
				<h5>{hasName ? `Name:` : ""}</h5>
				<div>{hasName ? `${name}` : ""}</div>
				<h5>{hasPhoneNumber ? `Phone Number:` : ""}</h5>
				<div>{hasPhoneNumber ? `${phoneNumber}` : ""}</div>
			</div>
			<div className="sidebarSection">
				<h1>Order</h1>
				<ColoredLine />
				<h5>{hasSize ? `Size:` : ""}</h5>
				<div>{hasSize ? `${size}` : ""}</div>
				<h5>{hasToppings ? `Toppings:` : ""}</h5>
				<div className="toppings">
					{(() => {
						if (hasToppings) {
							return toppingsNodes();
						} else {
							return "";
						}
					})()}
				</div>
			</div>
		</div>
	);
};
