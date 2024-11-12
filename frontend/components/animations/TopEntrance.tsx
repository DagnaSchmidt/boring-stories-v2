import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface TopEntranceProps {
    children: ReactElement
};

const TopEntrance: React.FC<TopEntranceProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default TopEntrance;
