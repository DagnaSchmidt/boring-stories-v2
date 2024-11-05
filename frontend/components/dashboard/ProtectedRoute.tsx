'use client'

import React, { useEffect } from 'react';
import { useAppSelector } from '@/shared/lib/hooks';
import { selectToken } from '@/shared/lib/features/user/userSlice';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
    children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();
    const token = useAppSelector(selectToken);
    console.log(token);

    useEffect(() => {
        if (!token) {
            router.push('/');
        }
    }, [token, router]);

    return token ? <>{children}</> : null;
};

export default ProtectedRoute;
