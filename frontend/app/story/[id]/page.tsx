'use client'

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation'
import ImageGallery from '@/components/story/ImageGallery';
import ScrollToTopContainer from '@/components/story/ScrollToTopContainer';
import StoryHeader from '@/components/story/StoryHeader';
import OpacityEntrance from '@/components/animations/OpacityEntrance';
import { setActiveStory, selectActiveStory } from '@/shared/lib/features/stories/storiesSlice';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

const images = ['https://res.cloudinary.com/dcnobzztr/image/upload/v1730709829/cld-sample-2.jpg', 'https://res.cloudinary.com/dcnobzztr/image/upload/v1730709829/cld-sample.jpg']

const StoryPage: React.FC = () => {
    const params = useParams<{ id: string }>()
    const dispatch = useAppDispatch();
    const story = useAppSelector(selectActiveStory);

    useEffect(() => {
        dispatch(setActiveStory(params.id));
    }, []);

    return (
        <ScrollToTopContainer>
            {
                story &&
                <OpacityEntrance>
                    <>
                        <StoryHeader {...story} />
                        <ImageGallery images={images} />
                    </>
                </OpacityEntrance>
            }
        </ScrollToTopContainer>
    );
};

export default StoryPage;
