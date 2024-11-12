import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoryType } from '@/types/StoryType';

const NavStoryPreview: React.FC<StoryType> = ({
    id,
    title,
    prevImg,
    createdAt,
    altText
}) => {

    const url = `https://res.cloudinary.com/dcnobzztr/image/upload/v1730709829/cld-sample-2.jpg`;

    return (
        <div className='w-52 border-4 border-secondary bg-primary flex flex-col gap-2'>
            <Link href={`/story/${id}`} className='w-full'>
                <Image
                    src={url}
                    alt={altText}
                    width={192}
                    height={128}
                    className='grayscale hover:grayscale-0 object-cover w-full'
                />
            </Link>
            <div className='flex justify-between items-end px-1 pb-1'>
                <p className='amulya text-base font-medium'>{title}</p>
                <p className='amulya text-sm'>{createdAt?.toString().slice(0, 10)}</p>
            </div>
        </div>
    );
};

export default NavStoryPreview;
