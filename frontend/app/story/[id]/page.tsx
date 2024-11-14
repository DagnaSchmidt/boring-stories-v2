'use client'

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation'
import ImageGallery from '@/components/story/ImageGallery';
import ScrollToTopContainer from '@/components/story/ScrollToTopContainer';
import StoryHeader from '@/components/story/StoryHeader';
import OpacityEntrance from '@/components/animations/OpacityEntrance';
import { setActiveStory } from '@/shared/lib/features/stories/storiesSlice';
import { useAppDispatch } from '@/shared/lib/hooks';
import { useSelectors } from '@/shared/lib/hooks';

const StoryPage: React.FC = () => {
    const params = useParams<{ id: string }>()
    const dispatch = useAppDispatch();
    const { activeStory } = useSelectors();

    useEffect(() => {
        dispatch(setActiveStory(params.id));
    }, []);

    return (
        <ScrollToTopContainer>
            {
                activeStory &&
                <OpacityEntrance>
                    <>
                        <StoryHeader {...activeStory} />
                        {
                            activeStory.imagesURLs &&
                            <ImageGallery images={activeStory.imagesURLs} />
                        }
                    </>
                </OpacityEntrance>
            }
        </ScrollToTopContainer>
    );
};

export default StoryPage;
