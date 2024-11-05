import React from 'react';
import ProtectedRoute from '@/components/dashboard/ProtectedRoute';
import LogoutButton from '@/components/dashboard/LogoutButton';

const page = () => {

    return (
        <ProtectedRoute>
            <div
                className='w-full min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-8'
            >
                <LogoutButton />
            </div>
        </ProtectedRoute>
    );
};

export default page;
