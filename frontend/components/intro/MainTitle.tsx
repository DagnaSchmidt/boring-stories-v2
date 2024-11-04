import React from 'react';
import { FlipHover } from '../animations/FlipHover';

const MainTitle = () => {
    return (
        <div
            className='flex w-full h-full justify-center items-center'
        >
            <FlipHover text='Boring  Stories' />
        </div>
    );
};

export default MainTitle;
