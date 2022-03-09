import { IParallax } from "@react-spring/parallax";
import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";
import type { RootState } from "../../app/store";

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
		parallax: undefined
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
		updateParallax: (state, action) => {
			state.parallax = action.payload;
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
	updateParallax,
} = orderSlice.actions;

export const selectName = (state: RootState) => state.order.name;
export const selectPhoneNumber = (state: RootState) => state.order.phoneNumber;
export const selectHasName = (state: RootState) => state.order.hasName;
export const selectHasPhoneNumber = (state: RootState) =>
	state.order.hasPhoneNumber;

export const selectOrder = (state: RootState) => state.order.order;
export const selectSize = (state: RootState) => state.order.size;
export const selectHasSize = (state: RootState) => state.order.hasSize;
export const selectToppings = (state: RootState) => state.order.toppings;
export const selectHasToppings = (state: RootState) => state.order.hasToppings;

export const selectParallax = (state: RootState) => state.order.parallax;

export default orderSlice.reducer;
