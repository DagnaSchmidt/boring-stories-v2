import { useAppSelector } from "./hooks";
import { selectActiveStory, selectStories } from "./features/stories/storiesSlice";
import { selectIsOpen, selectNavSort } from "./features/nav/navSlice";

export const stories = useAppSelector(selectStories);
export const activeStory = useAppSelector(selectActiveStory);

export const isNavOpen = useAppSelector(selectIsOpen);
export const navSort = useAppSelector(selectNavSort);
