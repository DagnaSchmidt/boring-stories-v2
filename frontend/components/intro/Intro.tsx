import React from 'react';
import MainTitle from './MainTitle';
import { FlipEntrance } from '../animations/FlipEntrance';

const Intro: React.FC = () => {
    return (
        <>
            <MainTitle />
            <div
                className='flex flex-col-reverse gap-6 sm:flex-row sm:justify-between'
            >
                <a href='https://www.instagram.com/b.oring_stories/' target='_blank'>
                    <FlipEntrance
                        text='instagram'
                        size='text-md sm:text-lg lg:text-xl'
                        weight='font-medium'
                        startDelay={1}
                        delay={0.02}
                    />
                </a>
                <FlipEntrance
                    text='from scandinavia and other places'
                    size='text-md sm:text-lg lg:text-xl'
                    weight='font-thin'
                    startDelay={1}
                    delay={0.02}
                />
            </div>
        </>
    );
};

export default Intro;
