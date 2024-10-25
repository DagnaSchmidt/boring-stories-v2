import { createAppSlice } from "../../createAppSlice";

export interface CounterSliceState {
    isOpen: boolean
};

const initialState: CounterSliceState = {
    isOpen: false
};

export const navSlice = createAppSlice({
    name: "nav",
    initialState,
    reducers: (create) => ({
        open: create.reducer((state) => {
            state.isOpen = true;
        }),
        close: create.reducer((state) => {
            state.isOpen = false;
        }),
        toggle: create.reducer((state) => {
            state.isOpen = !state.isOpen;
        }),
    }),
    selectors: {
        selectIsOpen: (nav) => nav.isOpen
    },
});

export const { open, close, toggle } = navSlice.actions;

export const { selectIsOpen } = navSlice.selectors;
