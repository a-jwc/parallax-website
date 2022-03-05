import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
	name: "order",
	initialState: {
		name: "",
		phoneNumber: "",
		order: "",
		hasName: false,
		hasPhoneNumber: false,
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
	},
});

export const {
	updateName,
	updateOrder,
	updatePhoneNumber,
	updateHasName,
	updateHasPhoneNumber,
} = orderSlice.actions;

export const selectName = (state) => state.order.name;
export const selectPhoneNumber = (state) => state.order.phoneNumber;
export const selectOrder = (state) => state.order.order;
export const selectHasName = (state) => state.order.hasName;
export const selectHasPhoneNumber = (state) => state.order.hasPhoneNumber;

export default orderSlice.reducer;
