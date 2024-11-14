'use client'

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FlipHoverProps {
    text: string;
}

const DURATION = 0.50;
const STAGGER = 0.05;

export const FlipHover: React.FC<FlipHoverProps> = ({ text }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const letterVariants = {
        hidden: { y: "110%" },
        visible: (i: number) => ({
            y: 0,
            transition: {
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
            },
        }),
        hover: {
            fontWeight: 100,
            transition: { duration: 0.35 },
        },
        hoverAdjacent: {
            fontWeight: 500,
            transition: { duration: 0.35 },
        },
        hoverFurtherAdjacent: {
            fontWeight: 300,
            transition: { duration: 0.35 },
        },
    };

    return (
        <motion.h2
            className="amulya text-center tracking-tighter font-bold overflow-hidden text-[48px] sm:text-[80px] md:text-[112px] lg:text-[144px] xl:text-[176px] px-1 md:pb-2 lg:pb-6"
            initial="hidden"
            animate={controls}
        >
            {text.split("").map((char, idx) => (
                <motion.span
                    key={idx}
                    className="inline-block"
                    custom={idx}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h2>
    );
};
