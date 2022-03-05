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
	updateHasName,
	selectHasPhoneNumber,
	updateHasPhoneNumber,
} from "../features/order/orderSlice";
import "./styles.scss"

interface Parallax {
	parallax: React.MutableRefObject<IParallax>;
}

export const PersonalForm = ({ parallax }: Parallax) => {
	const [state, setState] = useState({
		name: "",
		phoneNumber: "",
		hasName: false,
	});

	const name = useSelector(selectName);
	const phoneNumber = useSelector(selectPhoneNumber);
	const hasName = useSelector(selectHasName);
	const hasPhoneNumber = useSelector(selectHasPhoneNumber);
	const dispatch = useDispatch();

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
          className="submitButton"
					onClick={(event) => {
						event.preventDefault();
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
