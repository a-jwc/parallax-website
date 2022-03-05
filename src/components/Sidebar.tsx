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
} from "../features/order/orderSlice";
import { Logo } from "./Logo";

export const Sidebar = () => {
	const name = useSelector(selectName);
	const phoneNumber = useSelector(selectPhoneNumber);
	const hasName = useSelector(selectHasName);
	const hasPhoneNumber = useSelector(selectHasPhoneNumber);

	return (
		<div
			style={{
				maxWidth: "15vw",
				width: "100%",
				backgroundColor: "#363645",
				height: "100vh",
				color: "white",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				justifyContent: "start",
			}}
		>
      <Logo />
			<div>Your Info</div>
			<div>{hasName ? `Name: ${name}` : ""}</div>
			<div>{hasPhoneNumber ? `Phone Number: ${phoneNumber}` : ""}</div>
		</div>
	);
};
