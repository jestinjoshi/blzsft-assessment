import { createSlice } from "@reduxjs/toolkit";
import { bookState } from "./bookSlice";

interface dialogState {
    enabled: boolean;
    type: string;
    value: bookState
}

const initialState: dialogState = {
    enabled: false,
    type: 'add',
    value: {
        category: '',
        description: '',
        id: 0,
        name: '',
        price: 0
    }
};

const dialogSlice = createSlice({
    initialState,
    name: 'books',
    reducers: {
        enableDialog: state => {
            state.enabled = true;
        },
        disableDialog: state => {
            state.enabled = false;
            state.value = initialState.value;
        },
        setDialogType: (state, { payload }) => {
            state.type = payload;
            state.enabled = true;
        },
        setDialogValue: (state, { payload }) => {
            state.value = payload
        }
    }
});

export const { disableDialog, enableDialog, setDialogType, setDialogValue } = dialogSlice.actions

export default dialogSlice.reducer;