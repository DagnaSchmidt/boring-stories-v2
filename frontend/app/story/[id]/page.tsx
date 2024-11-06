import ImageGallery from '@/components/story/ImageGallery';
import ScrollToTopContainer from '@/components/story/ScrollToTopContainer';
import StoryHeader from '@/components/story/StoryHeader';
import React from 'react';

const storyExample = {
    id: 'string',
    title: 'string',
    prevImg: 'string',
    altText: 'string',
    localization: 'string',
    description: 'string',
    images: ['https://res.cloudinary.com/dcnobzztr/image/upload/v1730709829/cld-sample-2.jpg', 'https://res.cloudinary.com/dcnobzztr/image/upload/v1730709829/cld-sample.jpg'],
    createdAt: new Date()
}

const StoryPage = ({ params }: { params: { id: number } }) => {
    return (
        <ScrollToTopContainer>
            <StoryHeader {...storyExample} />
            <ImageGallery images={storyExample.images} />
        </ScrollToTopContainer>
    );
};

export default StoryPage;
