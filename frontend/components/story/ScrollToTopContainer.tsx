'use client'

import React, { useRef, ReactNode } from 'react';

interface ScrollToTopContainerProps {
    children: ReactNode;
};

const ScrollToTopContainer: React.FC<ScrollToTopContainerProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className='w-full h-full relative'
        >
            <button
                onClick={handleScroll}
                className='absolute right-0 bottom-2 px-2 pb-2 h-6 rounded z-10 bg-[#1E1E1E80] synonym text-xl font-medium tracking-wider hover:cursor-pointer'
            >
                up
            </button>
            <div
                ref={scrollRef}
                className='overflow-y-scroll scrollbar-hide h-full pb-12 relative'
            >
                {children}
            </div>
        </div>

    );
};

export default ScrollToTopContainer;
