'use client'

import React from 'react';
import { selectIsOpen, toggle } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";

const NavButton = () => {
    const isOpen = useAppSelector(selectIsOpen);
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(toggle())}
            className='justify-self-end synonym font-medium text-md sm:text-lg lg:text-xl tracking-widest text-nowrap'
        >
            {isOpen ? 'close' : 'start here'}
        </button>
    )
};

export default NavButton;
