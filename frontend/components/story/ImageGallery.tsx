import React from 'react';
import SingleImage from './SingleImage';

interface ImageGalleryProps {
    images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {

    return (
        <>
            <p className='amulya text-body py-24 text-center font-thin tracking-widest'>scroll</p>
            <div
                className='flex flex-col items-center gap-8 lg:gap-12 pb-24'
            >
                {
                    images.map(i => <SingleImage src={i} alt={i} key={i} />)
                }
            </div>
        </>

    );
};

export default ImageGallery;
