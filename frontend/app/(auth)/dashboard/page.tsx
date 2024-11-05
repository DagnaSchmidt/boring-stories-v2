import React from 'react';
import ProtectedRoute from '@/components/dashboard/ProtectedRoute';

const page = () => {

    return (
        <ProtectedRoute>
            <div>
                dashboard
            </div>
        </ProtectedRoute>
    );
};

export default page;
