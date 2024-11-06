import React from 'react';

interface StoryHeaderProps {
    title: string,
    localization: string,
    description: string,
    createdAt?: string | Date
};

const StoryHeader: React.FC<StoryHeaderProps> = ({
    title,
    localization,
    description,
    createdAt
}) => {
    return (
        <div
            className='border-4 border-pale w-full flex flex-col gap-8 px-4 py-8'
        >
            <div
                className='flex justify-between'
            >
                <p
                    className='amulya text-base font-medium'
                >
                    {title}
                </p>
                <p
                    className='amulya text-sm'
                >
                    {createdAt?.toString().slice(0, 10)} / {localization}
                </p>
            </div>
            <p
                className='amulya text-sm px-4'
            >
                {description}
            </p>
        </div>
    );
};

export default StoryHeader;
