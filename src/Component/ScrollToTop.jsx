import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button only after user has scrolled down 300px
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollUp}
            aria-label="Scroll to top"
            className="
                fixed bottom-6 right-5 z-50
                w-12 h-12 rounded-full shadow-xl
                bg-secondary text-white
                flex items-center justify-center
                text-xl
                hover:scale-110 active:scale-95
                transition-transform duration-200
                animate-bounce
            "
        >
            ↑
        </button>
    );
};

export default ScrollToTop;
