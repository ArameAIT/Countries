import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: "country",
    initialState: {
        // value: []
        value : JSON.parse(localStorage.getItem("country")) || [],
    },

    reducers: {
        forCountryies(state, { payload }) {
            state.value = payload.country
            localStorage.setItem("country", JSON.stringify(state.value))

        }
    }
})

export const getCountry = (store) => store.countrySlice.value

export const { forCountryies } = countrySlice.actions

export default countrySlice.reducer;