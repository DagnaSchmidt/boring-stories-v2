import React from 'react';
import Image from 'next/image';

interface SingleImageProps {
    src: string,
    alt: string
};

const SingleImage: React.FC<SingleImageProps> = ({
    src,
    alt
}) => {
    return (
        <Image
            className='w-full lg:max-h-[600px] lg:object-contain'
            src={src}
            alt={alt}
            width={800}
            height={600}
        />
    );
};

export default SingleImage;
