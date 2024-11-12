import { useAppSelector } from "./hooks";
import { selectActiveStory, selectStories } from "./features/stories/storiesSlice";
import { selectIsOpen, selectNavSort } from "./features/nav/navSlice";

export const selectors = () => {
    const stories = useAppSelector(selectStories);
    const activeStory = useAppSelector(selectActiveStory);

    const isNavOpen = useAppSelector(selectIsOpen);
    const navSort = useAppSelector(selectNavSort);

    return { stories, activeStory, isNavOpen, navSort }
};
