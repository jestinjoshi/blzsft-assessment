import { createSlice } from "@reduxjs/toolkit";

export interface bookState {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
}

const initialState: bookState[] = [];

const bookSlice = createSlice({
    initialState,
    name: 'books',
    reducers: {
        addBook: (state, { payload }) => {
            if (Array.isArray(payload)) {
                state.push(...payload);
            } else {
                state.unshift(payload);
            }
        },
        updateBook: (state, { payload }) => {
            return state.map(el => {
                if (el.id === payload.id) {
                    el = payload;
                }
                return el;
            })
        },
        deleteBook: (state, { payload }) => {
            return state.filter(el => el.id !== payload)
        }
    }
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer;