import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface OpacityEntranceProps {
    children: ReactElement,
    duration?: number,
    delay?: number
};

const OpacityEntrance: React.FC<OpacityEntranceProps> = ({
    children,
    duration = 1.25,
    delay = 0.45
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration, ease: "easeOut", delay: delay }}
        >
            {children}
        </motion.div>
    );
};

export default OpacityEntrance;
