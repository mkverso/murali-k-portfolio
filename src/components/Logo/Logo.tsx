import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ size?: number }> = ({ size = 100 }) => {
    return (
        <motion.img
            src="/images/MKLOGO.png"
            alt="Murali K. Logo"
            width={size}
            height={size}
            className="object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
};
