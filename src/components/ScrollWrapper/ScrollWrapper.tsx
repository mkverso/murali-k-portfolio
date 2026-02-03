import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    variant?: 'fade' | 'slide' | 'scale';
}

export const ScrollWrapper: React.FC<ScrollWrapperProps> = ({
    children,
    className = "",
    delay = 0,
    variant = 'fade'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const variants: Record<string, Variants> = {
        fade: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        slide: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
