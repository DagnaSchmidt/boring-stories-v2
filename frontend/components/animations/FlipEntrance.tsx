'use client'

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FlipEntranceProps {
    text: string;
    startDelay?: number,
    delay?: number,
    size?: 'text-xl' | 'text-lg' | 'text-base' | 'text-sm',
    font?: 'synonym' | 'amulya',
    weight?: 'font-normal' | 'font-medium'
}

const DURATION = 0.25;

export const FlipEntrance: React.FC<FlipEntranceProps> = ({
    text,
    startDelay = 0,
    delay = 0.05,
    size = 'text-base',
    font = 'synonym',
    weight = 'font-normal'
}) => {
    const controls = useAnimation();

    useEffect(() => {
        const startAnimation = async () => {
            await new Promise((resolve) => setTimeout(resolve, startDelay * 1000));
            controls.start("visible");
        };
        startAnimation();
    }, [controls, startDelay]);

    const letterVariants = {
        hidden: { y: "100%" },
        visible: (i: number) => ({
            y: 0,
            transition: {
                duration: DURATION,
                ease: "easeInOut",
                delay: delay * i,
            },
        }),
    };

    return (
        <motion.h2
            className={[
                `text-center font-thin overflow-hidden`,
                size,
                font,
                weight
            ].join(' ')}
            initial="hidden"
            animate={controls}
        >
            {text.split("").map((char, idx) => (
                <motion.span
                    key={idx}
                    className="inline-block"
                    custom={idx}
                    variants={letterVariants}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h2>
    );
};
