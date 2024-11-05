'use client'

import React, { useState } from 'react';
import { StoryType } from '@/types/StoryType';
import { useAppDispatch } from '@/shared/lib/hooks';

const AddStory = () => {
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<StoryType>({
        title: '',
        prevImg: '',
        altText: '',
        localization: '',
        description: '',
        images: []
    });

    const [image, setImage] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'image') {
            setImage(value);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const addImage = () => {
        formData.images.push(image);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const imagesArr = formData.images.split(' ');

        // const newStory = {
        //     ...formData,
        //     images: imagesArr
        // };

        try {
            //   dispatch(addStory(newStory));
            //   setFormData({
            //     title: '',
            //     prevImg: '',
            //     altText: '',
            //     localization: '',
            //     description: '',
            //     images: ''
            //   });
            // window.alert(`Story ${newStory.title} added!`);
        } catch (exception) {
            console.log('failed to add new story');
        }
    };

    console.log(formData);
    console.log(image);

    return (
        <div className='flex flex-col'>
            <h5 className='text-xl font-medium tracking-tighter amulya pb-4'>Add Story</h5>

            <form className='flex flex-col gap-2 min-w-[320px]' onSubmit={handleSubmit}>

                <input
                    placeholder='title'
                    type='text'
                    onChange={handleInputChange}
                    value={formData.title}
                    name='title'
                />

                <input
                    placeholder='prev img'
                    type='text'
                    onChange={handleInputChange}
                    value={formData.prevImg}
                    name='prevImg'
                />

                <input
                    placeholder='alt text'
                    type='text'
                    onChange={handleInputChange}
                    value={formData.altText}
                    name='altText'
                />

                <input
                    placeholder='localization'
                    type='text'
                    onChange={handleInputChange}
                    value={formData.localization}
                    name='localization'
                />

                <input
                    placeholder='description'
                    type='text'
                    onChange={handleInputChange}
                    value={formData.description}
                    name='description'
                />

                <div>
                    {
                        formData.images.map((i, index) => <p key={index}>{i}</p>)
                    }

                    <input
                        placeholder='images'
                        onChange={handleInputChange}
                        value={image}
                        name='image'
                    />
                    <button
                        onClick={() => formData.images.push(image)}
                        className='synonym text-base font-medium tracking-wider pl-2'
                    >
                        add image
                    </button>
                </div>

                <button
                    className='synonym text-base font-medium tracking-wider pt-12'
                    type='submit'
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default AddStory;
