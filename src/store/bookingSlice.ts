// src/store/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prestation } from "@/types";

export interface BookingState {
  basket: Prestation[];
  address: string | null;
  appointment: string | null;
}

const initialState: BookingState = {
  basket: [],
  address: null,
  appointment: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addPrestation: (state, action: PayloadAction<Prestation>) => {
      state.basket.push(action.payload);
    },
    removePrestation: (state, action: PayloadAction<string>) => {
      //being sure we remove only one item /reference
      const index = state.basket.findIndex(
        (p) => p.reference === action.payload
      );
      if (index >= 0) state.basket.splice(index, 1);
    },
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload;
    },
    setAppointment: (state, action: PayloadAction<string | null>) => {
      state.appointment = action.payload;
    },
    clearBooking: (state) => {
      state.basket = [];
      state.address = null;
      state.appointment = null;
    },
  },
});

export const {
  addPrestation,
  removePrestation,
  setAddress,
  setAppointment,
  clearBooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
