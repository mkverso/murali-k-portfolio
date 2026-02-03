import React, { useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        element.textContent = text.substring(0, index + 1);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <span ref={elementRef}></span>;
};
