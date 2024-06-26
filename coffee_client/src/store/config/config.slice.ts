import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IConfig} from "@/store/config/config.types";


const initialState: IConfig = {
    searchQuery: '',
    category: "All"
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setCategory: (state, action: PayloadAction<"Ice-Coffee" | "Hot-Coffee" | "Tea" | "All">) => {
            state.category = action.payload;
        },
    }
});
