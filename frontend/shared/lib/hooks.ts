import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

import { selectActiveStory, selectStories } from "./features/stories/storiesSlice";
import { selectIsOpen, selectNavSort } from "./features/nav/navSlice";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useSelectors = () => {
    const stories = useAppSelector(selectStories);
    const activeStory = useAppSelector(selectActiveStory);

    const isNavOpen = useAppSelector(selectIsOpen);
    const navSort = useAppSelector(selectNavSort);

    return { stories, activeStory, isNavOpen, navSort }
};
