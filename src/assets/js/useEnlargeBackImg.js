import { useState, useEffect } from 'react';

export const useEnlargeBackImg = () => {
    const [backgroundSize, setBackgroundSize] = useState('cover');

    const handleScroll = () => {
        const width = window.innerWidth
        const height = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        const newSize = width > 600 ? 
        width * (1 + scrollPosition / 2000) + 'px' 
        : height * (1 + scrollPosition / 2000) + 'px';

        document.querySelector(".cust-hero-body").style.opacity = `${(-window.scrollY + 300) * .004}`
        document.querySelector(".cust-hero-badge").style.opacity = `${(-window.scrollY + 650) * .004}`

        setBackgroundSize(`${newSize}`);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [backgroundSize]);

    return backgroundSize;
}