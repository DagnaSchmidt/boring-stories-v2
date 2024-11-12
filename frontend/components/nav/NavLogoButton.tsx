import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/lib/hooks';
import { close } from '@/shared/lib/features/nav/navSlice';


const NavLogoButton = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleLogoButton = () => {
        router.push('/');
        dispatch(close());
    };

    return (
        <button
            onClick={handleLogoButton}
            className='w-full text-left'
        >
            Boring Stories
        </button>
    );
};

export default NavLogoButton;
