import { createAppSlice } from "../../createAppSlice";

export interface CounterSliceState {
    isOpen: boolean,
    sort: 'all' | 'new' | null;
};

const initialState: CounterSliceState = {
    isOpen: false,
    sort: null
};

export const navSlice = createAppSlice({
    name: "nav",
    initialState,
    reducers: (create) => ({
        open: create.reducer((state) => {
            state.isOpen = true;
            state.sort = null;
        }),
        close: create.reducer((state) => {
            state.isOpen = false;
            state.sort = null;
        }),
        toggle: create.reducer((state) => {
            state.isOpen = !state.isOpen;
            state.sort = null;
        }),
        chooseAll: create.reducer((state) => {
            state.sort = 'all'
        }),
        chooseNew: create.reducer((state) => {
            state.sort = 'new'
        })
    }),
    selectors: {
        selectIsOpen: (nav) => nav.isOpen,
        selectNavSort: (nav) => nav.sort
    },
});

export const { open, close, toggle, chooseAll, chooseNew } = navSlice.actions;

export const { selectIsOpen, selectNavSort } = navSlice.selectors;
