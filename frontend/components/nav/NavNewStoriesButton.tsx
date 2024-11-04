'use client'
import React from 'react';

import { selectNavSort, chooseNew } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";

const NavNewStoriesButton = () => {
    const sort = useAppSelector(selectNavSort);
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(chooseNew())}
            className={[
                'amulya text-xl hover:opacity-100',
                sort === 'new' ? 'opacity-100 hover:cursor-default' : 'opacity-70'
            ].join(' ')}
        >
            new stories
        </button>
    );
};

export default NavNewStoriesButton;
