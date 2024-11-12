import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelectors } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/lib/hooks';
import { close } from '@/shared/lib/features/nav/navSlice';

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
        <button
            className='amulya text-xl hover:opacity-100 opacity-70'
            onClick={handleRandomStory}
        >
            random story
        </button>
    );
};

export default NavRandomStoryButton;
