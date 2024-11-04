'use client'

import React from 'react';
import ExpandingBorder from '../animations/ExpandingBorder';
import { selectIsOpen, selectNavSort } from '@/shared/lib/features/nav/navSlice';
import { useAppSelector } from '@/shared/lib/hooks';
import NavButton from './NavButton';
import NavNewStoriesButton from './NavNewStoriesButton';
import NavAllStoriesButton from './NavAllStoriesButton';
import NavRandomStoryButton from './NavRandomStoryButton';

const Nav = () => {
    const isOpen = useAppSelector(selectIsOpen);
    const sort = useAppSelector(selectNavSort);

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
                <p>LIST OF STORIES TO CHOOSE</p>
            }
        </>
    );
};

export default Nav;
