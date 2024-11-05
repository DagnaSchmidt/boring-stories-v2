'use client'

import { clearToken } from '@/shared/lib/features/user/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks';

import React from 'react';

const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(clearToken())}
            className='synonym text-xl font-medium tracking-wider py-4'
        >
            logout
        </button>
    );
};

export default LogoutButton;
