'use client'
import React from 'react';

import { selectNavSort, chooseNew } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import OpacityEntrance from '../animations/OpacityEntrance';

const NavNewStoriesButton = () => {
    const sort = useAppSelector(selectNavSort);
    const dispatch = useAppDispatch();

    return (
        <OpacityEntrance
            delay={0.20}
            duration={0.8}
        >
            <button
                onClick={() => dispatch(chooseNew())}
                className={[
                    'amulya text-sm sm:text-lg lg:text-xl hover:opacity-100',
                    sort === 'new' ? 'opacity-100 hover:cursor-default' : 'opacity-70'
                ].join(' ')}
            >
                new stories
            </button>
        </OpacityEntrance>
    );
};

export default NavNewStoriesButton;
