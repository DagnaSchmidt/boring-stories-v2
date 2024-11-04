'use client'

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { selectIsOpen } from "@/shared/lib/features/nav/navSlice";
import { useAppSelector } from "@/shared/lib/hooks";

interface ExpandingBorderProps {
    children: ReactNode;
};

const ExpandingBorder: React.FC<ExpandingBorderProps> = ({ children }) => {
    const isActive = useAppSelector(selectIsOpen);
    return (
        <div
            className="relative w-full h-24"
        >
            <motion.div
                className="absolute -z-10 border-4 border-pale"
                initial={{
                    width: "4px",
                    height: "4px",
                    top: "50%",
                    right: "-4px",
                    transform: "translateY(-50%)",
                }}
                animate={{
                    width: isActive ? "100%" : "4px",
                    height: isActive ? "100%" : "4px",
                    top: isActive ? "0%" : "50%",
                    right: isActive ? "0%" : "-4px",
                    transform: isActive ? "none" : "translateY(-50%)",
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            />
            <div
                className={[
                    'z-10 h-full flex items-center px-5',
                    isActive ? 'justify-between' : 'justify-end'
                ].join(' ')}
            >
                {children}
            </div>
        </div>
    );
};

export default ExpandingBorder;
