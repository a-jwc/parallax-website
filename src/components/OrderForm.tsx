import { IParallax } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import {
	updateSize,
	updateHasSize,
	updateHasToppings,
	updateToppings,
} from "../features/order/orderSlice";
import "./form.scss";

interface Sizes {
	size: string;
	description: string;
}

interface Parallax {
	parallax: React.MutableRefObject<IParallax>;
}

const toppings = ["Pepperoni", "Anchovies", "Mushrooms", "Spinach", "Olives"];

const sizes: Sizes[] = [
	{ size: "Small", description: 'Small 8"' },
	{ size: "Medium", description: 'Medium 12"' },
	{ size: "Large", description: 'Large 16"' },
	{ size: "WOW", description: "Wow that's unbelievable 24\"" },
];

export const OrderForm = ({ parallax }: Parallax) => {
	const dispatch = useAppDispatch();

	const [state, setState] = useState({
		size: "Small",
		toppings: new Array(toppings.length).fill(false),
	});

	const [toppingsList, setToppingsList] = useState<string[]>([]);

	const handleChange = (e: any) => {
		const value = e.target.value;
		setState({ ...state, [e.target.name]: value });
	};

	const handleToppingChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		position: number
	) => {
		const value = e.target.value;
		if (!toppingsList.includes(value)) {
			console.log("in update");
			const tempList = [...toppingsList, value];
			setToppingsList(tempList);
		} else {
			for (let i of toppingsList) {
				if (i === value) {
					const tempList = [...toppingsList];
					tempList.splice(toppingsList.indexOf(i), 1);
					setToppingsList(tempList);
				}
			}
		}
	};

	useEffect(() => {
		console.log("in useEffect toppingsList", toppingsList);
	}, [state.toppings, toppingsList]);

	return (
		<div>
			<h1>Customize!</h1>
			<form className="orderForm">
				<div className="sizeForm">
					<h2>Size</h2>
					{sizes.map(({ size, description }, index) => {
						return (
							<label>
								<input
									type="radio"
									name="size"
									onChange={handleChange}
									value={size}
									checked={state.size === `${size}`}
								/>
								{description}
							</label>
						);
					})}
				</div>

				<div className="toppingsForm">
					<h2>Toppings</h2>
					{toppings.map((name, index) => {
						return (
							<label>
								<input
									type="checkbox"
									name="toppings"
									value={name}
									onChange={(event) => handleToppingChange(event, index)}
								/>
								{name}
							</label>
						);
					})}
				</div>

				<div className="addOnsForm">
					<h2>Add Ons</h2>
					<label>
						<input type="checkbox" name="addOnCheckbox" />
						Another pizza
					</label>
				</div>

				<div className="orderButtons">
					<input
						type="submit"
						name="submit"
						className="orderSubmitButton"
						value={"Update"}
						onClick={(e) => {
							e.preventDefault();
							dispatch(updateHasSize(true));
							dispatch(updateSize(state.size));
							dispatch(updateHasToppings(true));
							dispatch(updateToppings(toppingsList));
						}}
					/>
					<input
						type={"submit"}
						name="next"
            className="orderSubmitButton"
						value={"Next"}
						onClick={(e) => {
							e.preventDefault();
              parallax.current.scrollTo(3)
						}}
					/>
				</div>
			</form>
		</div>
	);
};
