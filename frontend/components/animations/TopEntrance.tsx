import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface TopEntranceProps {
    children: ReactNode | ReactNode[]
};

const TopEntrance: React.FC<TopEntranceProps> = ({ children }) => {
    return (
        <div
            className='flex gap-2 pb-2 overflow-x-scroll scrollbar-hide w-full h-full'
        >
            {React.Children.toArray(children).map((child, index) => (
                <motion.div
                    key={index}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: index * 0.2,
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
};

export default TopEntrance;
