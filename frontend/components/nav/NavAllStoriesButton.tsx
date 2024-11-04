import React from 'react';

import { selectNavSort, chooseAll } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";

const NavAllStoriesButton = () => {
    const sort = useAppSelector(selectNavSort);
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(chooseAll())}
            className={[
                'amulya text-xl hover:opacity-100',
                sort === 'all' ? 'opacity-100 hover:cursor-default' : 'opacity-70'
            ].join(' ')}
        >
            all stories
        </button>
    )
}

export default NavAllStoriesButton;
