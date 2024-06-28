import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IConfig} from "@/store/config/config.types";
import {EnumSort} from "@/components/interfaces/sorting.interface";


const initialState: IConfig = {
    searchQuery: '',
    category: 'all',
    sortType: EnumSort.NEWEST,
    activeDetailLink: ''
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setSortTypeConfig: (state, action: PayloadAction<EnumSort>) => {
            state.sortType = action.payload;
        },
        setActiveDetailLink: (state, action: PayloadAction<string>) => {
            state.activeDetailLink = action.payload;
        }
    }
});
