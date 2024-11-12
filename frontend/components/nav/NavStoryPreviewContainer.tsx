import React from 'react';
import TopEntrance from '../animations/TopEntrance';
import NavStoryPreview from './NavStoryPreview';
import { selectors } from '@/shared/lib/selectors';

const NavStoryPreviewContainer = () => {
    const listOfStories = selectors().navSort === 'all' ? selectors().stories : selectors().stories?.slice(0, 3);

    return (
        <TopEntrance>
            <div
                className='flex gap-2 py-2'
            >
                {listOfStories?.map(i => <NavStoryPreview key={i.id} {...i} />)}
            </div>
        </TopEntrance>
    );
};

export default NavStoryPreviewContainer;
