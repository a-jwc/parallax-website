import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
	name: "order",
	initialState: {
		name: "",
		phoneNumber: "",
		order: "",
		hasName: false,
		hasPhoneNumber: false,
		size: "",
		hasSize: false,
		toppings: [],
		hasToppings: false,
	},
	reducers: {
		updateName: (state, action) => {
			state.name = action.payload;
		},
		updatePhoneNumber: (state, action) => {
			state.phoneNumber = action.payload;
		},
		updateOrder: (state, action) => {
			state.order = action.payload;
		},
		updateHasName: (state, action) => {
			state.hasName = action.payload;
		},
		updateHasPhoneNumber: (state, action) => {
			state.hasPhoneNumber = action.payload;
		},
		updateSize: (state, action) => {
			state.size = action.payload;
		},
		updateHasSize: (state, action) => {
			state.hasSize = action.payload;
		},
		updateToppings: (state, action) => {
			state.toppings = action.payload;
		},
		updateHasToppings: (state, action) => {
			state.hasToppings = action.payload;
		},
	},
});

export const {
	updateName,
	updateOrder,
	updatePhoneNumber,
	updateHasName,
	updateHasPhoneNumber,
	updateSize,
	updateHasSize,
	updateToppings,
	updateHasToppings,
} = orderSlice.actions;

export const selectName = (state) => state.order.name;
export const selectPhoneNumber = (state) => state.order.phoneNumber;
export const selectHasName = (state) => state.order.hasName;
export const selectHasPhoneNumber = (state) => state.order.hasPhoneNumber;

export const selectOrder = (state) => state.order.order;
export const selectSize = (state) => state.order.size;
export const selectHasSize = (state) => state.order.hasSize;
export const selectToppings = (state) => state.order.toppings;
export const selectHasToppings = (state) => state.order.hasToppings;

export default orderSlice.reducer;
