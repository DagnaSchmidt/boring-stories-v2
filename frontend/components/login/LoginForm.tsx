'use client'

import { useRouter } from 'next/navigation';
import { setToken } from '@/shared/lib/features/user/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks';
import React, { useState } from 'react';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await dispatch(setToken(password));
            setPassword('');
            router.push('/dashboard');
        } catch (exception) {
            console.log('wrong credentials');
        }
    };

    return (
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
    );
};

export default LoginForm;
