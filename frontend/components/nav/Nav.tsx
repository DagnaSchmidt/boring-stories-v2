'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ExpandingBorder from '../animations/ExpandingBorder';
import { selectIsOpen, selectNavSort } from '@/shared/lib/features/nav/navSlice';
import { setStories, selectStories } from '@/shared/lib/features/stories/storiesSlice';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks';
import NavButton from './NavButton';
import NavNewStoriesButton from './NavNewStoriesButton';
import NavAllStoriesButton from './NavAllStoriesButton';
import NavRandomStoryButton from './NavRandomStoryButton';
import NavStoryPreviewContainer from './NavStoryPreviewContainer';
import NavLogoButton from './NavLogoButton';

const Nav = () => {
    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const isOpen = useAppSelector(selectIsOpen);
    const sort = useAppSelector(selectNavSort);
    const stories = useAppSelector(selectStories);

    useEffect(() => {
        dispatch(setStories());
    }, []);

    return (
        <div>
            <ExpandingBorder>
                {
                    pathname.length > 1 && isOpen === false && <NavLogoButton />
                }
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
                sort !== null && <NavStoryPreviewContainer />
            }
        </div>
    );
};

export default Nav;
