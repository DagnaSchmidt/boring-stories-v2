import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface OpacityEntranceProps {
    children: ReactElement
};

const OpacityEntrance: React.FC<OpacityEntranceProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "easeOut", delay: 0.45 }}
        >
            {children}
        </motion.div>
    );
};

export default OpacityEntrance;
