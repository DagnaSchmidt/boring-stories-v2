import { createAppSlice } from "../../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { StoryType } from "@/types/StoryType";
import { getStories, createStory } from "./storiesAPI";

export interface StoriesSliceState {
    stories: StoryType[] | null;
};

const initialState: StoriesSliceState = {
    stories: null
};

export const storiesSlice = createAppSlice({
    name: "stories",
    initialState,
    reducers: (create) => ({
        setStories: create.asyncThunk(
            async () => {
                const stories = await getStories();
                return stories;
            },
            {
                fulfilled: (state, action: PayloadAction<StoryType[]>) => {
                    state.stories = action.payload;
                },
                rejected: (state) => {
                    state.stories = null;
                },
            },
        ),
        addStory: create.asyncThunk(
            async (data: StoryType) => {
                const newStory: StoryType = await createStory(data);
                return newStory;
            },
            {
                fulfilled: (state, action: PayloadAction<StoryType>) => {
                    state.stories?.push(action.payload);
                }
            },
        )
    }),
    selectors: {
        selectStories: (stories) => stories.stories
    },
});

export const { setStories } = storiesSlice.actions;
export const { selectStories } = storiesSlice.selectors;
