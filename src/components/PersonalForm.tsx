import { IParallax } from "@react-spring/parallax";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
	updateName,
	updatePhoneNumber,
	selectName,
	selectPhoneNumber,
	selectHasName,
	updateHasName,
	selectHasPhoneNumber,
	updateHasPhoneNumber,
} from "../features/order/orderSlice";
import "./styles.scss";
import "./form.scss";

interface Parallax {
	parallax: React.MutableRefObject<IParallax>;
}

export const PersonalForm = ({ parallax }: Parallax) => {
	const [state, setState] = useState({
		name: "",
		phoneNumber: "",
		hasName: false,
	});

	const name = useAppSelector(selectName);
	const phoneNumber = useAppSelector(selectPhoneNumber);
	const hasName = useAppSelector(selectHasName);
	const hasPhoneNumber = useAppSelector(selectHasPhoneNumber);
	const dispatch = useAppDispatch();

	const handleChange = (e: any) => {
		const value = e.target.value;
		setState({ ...state, [e.target.name]: value });
	};

	return (
		<div className="formBox">
			<form className="form">
				<label className="formLabel">Name:</label>
				<input
					type="text"
					name="name"
					value={state.name}
					className="textInput"
					onChange={handleChange}
					required
				/>
				<label className="formLabel">Phone Number:</label>
				<input
					type="text"
					name="phoneNumber"
					value={state.phoneNumber}
					className="textInput"
					onChange={handleChange}
					required
				/>
				<input
					type="submit"
					name="submit"
					className="personalSubmitButton"
					onClick={(event) => {
						event.preventDefault();
						if (!state.name || !state.phoneNumber) {
							alert("Please enter name and phone number 💙");
              return
						}
						parallax.current.scrollTo(2);
						dispatch(updateName(state.name));
						dispatch(updatePhoneNumber(state.phoneNumber));
						dispatch(updateHasName(true));
						dispatch(updateHasPhoneNumber(true));
					}}
				/>
			</form>
		</div>
	);
};
