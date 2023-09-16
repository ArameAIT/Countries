import { createSlice } from "@reduxjs/toolkit";

const savesSlice = createSlice({
    name: "saves",
    initialState: {
        value: JSON.parse(localStorage.getItem("saves")) || [],
    },
    reducers: {
        handleSaves(state, {payload}){
            state.value = payload.elem
            localStorage.setItem("saves", JSON.stringify(state.value))
        }
    }
})

export const selectSaves = (store) => store.savesSlice.value

export const { handleSaves } = savesSlice.actions

export default savesSlice.reducer