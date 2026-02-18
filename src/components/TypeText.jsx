import { useEffect, useState } from "react";

const TypeText = ({ text, speed = 120, delay = 1500 }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursor, setCursor] = useState(true);

    useEffect(() => {
        const typingSpeed = isDeleting ? speed / 2 : speed;

        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                setIndex(index + 1);
            } else if (!isDeleting && index === text.length) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && index > 0) {
                setDisplayText(text.slice(0, index - 1));
                setIndex(index - 1);
            } else if (isDeleting && index === 0) {
                setIsDeleting(false);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, delay]);

    useEffect(() => {
        const blink = setInterval(() => {
            setCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(blink);
    }, []);

    return (
        <span>
            {displayText}
            <span className="ml-0.5">{cursor ? "|" : " "}</span>
        </span>
    );
};

export default TypeText;
