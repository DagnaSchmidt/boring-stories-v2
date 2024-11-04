'use client'

import { setToken } from '@/shared/lib/features/user/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks';
import React, { useState } from 'react';


const page = () => {
    const dispatch = useAppDispatch();
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(setToken(password));
            setPassword('');
            // navigate('/dashboard');
        } catch (exception) {
            console.log('wrong credentials');
        }
    };

    return (
        <div
            className='w-full h-screen flex justify-center items-center'
        >
            <form
                className='flex flex-col gap-4 items-center'
                onSubmit={handleLogin}
            >
                <input
                    type='password'
                    value={password}
                    name='password'
                    id='password'
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button
                    id='loginButton'
                    className='synonym text-xl font-medium tracking-wider'
                >
                    login
                </button>
            </form>
        </div>
    );
};

export default page;
