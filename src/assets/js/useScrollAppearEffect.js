import { useState, useEffect } from 'react';

const useScrollAppearEffect = () => {
    const [opacity, setOpacity] = useState(0);
    const [translateY, setTranslateY] = useState(30);
    const [hasAppeared, setHasAppeared] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (!hasAppeared && scrollPosition > 400) {
            // Only perform the effect once when scroll position exceeds a certain value (e.g., 400)
            setHasAppeared(true);

            // Update opacity and translateY
            setOpacity(1);
            setTranslateY(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAppeared]); // Re-run the effect when hasAppeared changes

    const appearStyle = {
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.5s, transform 0.5s',
    };

    return appearStyle;
};

export default useScrollAppearEffect;
