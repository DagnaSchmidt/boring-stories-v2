import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelectors } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/lib/hooks';
import { close } from '@/shared/lib/features/nav/navSlice';
import OpacityEntrance from '../animations/OpacityEntrance';

const NavRandomStoryButton = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { stories } = useSelectors();

    const storiesAmount = stories?.length;

    const handleRandomStory = () => {
        if (storiesAmount) {
            const randomNumber = Math.floor(Math.random() * storiesAmount);
            const randomId = stories[randomNumber].id;
            router.push(`/story/${randomId}`);
            dispatch(close());
        }
    };

    return (
        <OpacityEntrance
            delay={0.20}
            duration={0.8}
        >
            <button
                className='amulya text-xl hover:opacity-100 opacity-70'
                onClick={handleRandomStory}
            >
                random story
            </button>
        </OpacityEntrance>
    );
};

export default NavRandomStoryButton;
