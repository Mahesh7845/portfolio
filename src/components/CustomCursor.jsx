import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setHover(true);
        const removeHover = () => setHover(false);

        window.addEventListener("mousemove", move);

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            {/* DOT */}
            <div
                className="custom-cursor-dot"
                style={{ left: pos.x, top: pos.y }}
            />

            {/* RING */}
            <div
                className={`custom-cursor-ring ${hover ? "hover" : ""}`}
                style={{ left: pos.x, top: pos.y }}
            />
        </>
    );
};

export default CustomCursor;