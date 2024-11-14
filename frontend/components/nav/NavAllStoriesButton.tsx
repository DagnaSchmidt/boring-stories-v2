import React from 'react';

import { selectNavSort, chooseAll } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import OpacityEntrance from '../animations/OpacityEntrance';

const NavAllStoriesButton = () => {
    const sort = useAppSelector(selectNavSort);
    const dispatch = useAppDispatch();

    return (
        <OpacityEntrance
            delay={0.20}
            duration={0.8}
        >
            <button
                onClick={() => dispatch(chooseAll())}
                className={[
                    'amulya text-sm sm:text-lg lg:text-xl hover:opacity-100',
                    sort === 'all' ? 'opacity-100 hover:cursor-default' : 'opacity-70'
                ].join(' ')}
            >
                all stories
            </button>
        </OpacityEntrance>
    );
};

export default NavAllStoriesButton;
