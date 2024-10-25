import { createAppSlice } from "../../createAppSlice";

export interface CounterSliceState {
    isOpen: boolean
};

const initialState: CounterSliceState = {
    isOpen: false
};

export const storiesSlice = createAppSlice({
    name: "nav",
    initialState,
    reducers: (create) => ({
        // open: create.reducer((state) => {
        //     state.isOpen = true;
        // }),
        // close: create.reducer((state) => {
        //     state.isOpen = false;
        // }),
        // toggle: create.reducer((state) => {
        //     state.isOpen = !state.isOpen;
        // }),
    }),
    selectors: {
        // selectIsOpen: (nav) => nav.isOpen
    },
});

export const { } = storiesSlice.actions;

export const { } = storiesSlice.selectors;
