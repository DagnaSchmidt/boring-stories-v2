import React from 'react';
import TopEntrance from '../animations/TopEntrance';
import NavStoryPreview from './NavStoryPreview';
import { useSelectors } from '@/shared/lib/hooks';

const NavStoryPreviewContainer = () => {
    const { navSort, stories } = useSelectors();
    const listOfStories = navSort === 'all' ? stories : stories?.slice(0, 3);

    return (
        <TopEntrance>
            {listOfStories?.map(i => <NavStoryPreview key={i.id} {...i} />)}
        </TopEntrance>
    );
};

export default NavStoryPreviewContainer;
