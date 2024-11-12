'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import ExpandingBorder from '../animations/ExpandingBorder';
import { selectIsOpen, selectNavSort } from '@/shared/lib/features/nav/navSlice';
import { setStories, selectStories } from '@/shared/lib/features/stories/storiesSlice';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks';
import NavButton from './NavButton';
import NavNewStoriesButton from './NavNewStoriesButton';
import NavAllStoriesButton from './NavAllStoriesButton';
import NavRandomStoryButton from './NavRandomStoryButton';
import NavStoryPreviewContainer from './NavStoryPreviewContainer';

const Nav = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectIsOpen);
    const sort = useAppSelector(selectNavSort);
    const stories = useAppSelector(selectStories);

    console.log(stories);

    useEffect(() => {
        dispatch(setStories());
    }, []);

    return (
        <>
            <ExpandingBorder>
                {
                    isOpen &&
                    <>
                        <NavNewStoriesButton />
                        <NavAllStoriesButton />
                        <NavRandomStoryButton />
                    </>
                }
                <NavButton />
            </ExpandingBorder>
            {
                sort !== null &&
                <NavStoryPreviewContainer />
                // <Link href='/story/659febfa0153814c454f1ce7'>LIST OF STORIES TO CHOOSE</Link>
            }
        </>
    );
};

export default Nav;
