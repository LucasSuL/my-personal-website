import { useState, useEffect } from 'react';

export const useNavTransparenter = () => {
    const [isTransparent, setIsTransparent] = useState(true);

    // set transparent navbar when on top
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsTransparent(scrollPosition === 0);
    };

    useEffect(() => {
        // handle navbar height offset for anchors
        window.addEventListener('scroll', handleScroll);
        const navElement = document.querySelector('.navbar');
        const navbarHeight = navElement ? navElement.offsetHeight + 'px' : '40px';
        document.documentElement.style.setProperty('--scroll-padding', navbarHeight);

        // handle navbar toggle button click
        const navbarToggle = document.querySelector('.navbar-toggler');
        let isNavbarExpanded = false;

        navbarToggle.addEventListener('click', () => {
            isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            if (isNavbarExpanded) {
                navElement.style.setProperty('background-color', '#212529')
            } else {
                const scrollPosition = window.scrollY;
                navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
            }
        });

        // Listen for mouseleave event on the navbar
        navElement.addEventListener('mouseleave', () => {
            isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            if (isNavbarExpanded) {
                simulateClick(navbarToggle);
                const scrollPosition = window.scrollY;
                navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
            }
        });

        function simulateClick(element) {
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            element.dispatchEvent(event);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isTransparent;
};
