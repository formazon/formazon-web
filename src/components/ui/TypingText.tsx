"use client";

import { useState, useEffect, useRef } from "react";

interface TypingTextProps {
    text: string;
    typingSpeed?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    className?: string;
    onComplete?: () => void;
    blinkCount?: number; // Количество миганий перед исчезновением
    blinkSpeed?: number; // Скорость мигания в мс
}

export function TypingText({
    text,
    typingSpeed = 75,
    showCursor = true,
    cursorCharacter = "|",
    className = "",
    onComplete,
    blinkCount = 3,
    blinkSpeed = 400,
}: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [shouldShowCursor, setShouldShowCursor] = useState(true);
    const blinkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Сброс при изменении текста
        setDisplayedText("");
        setIsTyping(true);
        setShouldShowCursor(true);

        if (blinkTimeoutRef.current) {
            clearTimeout(blinkTimeoutRef.current);
        }

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
                
                if (onComplete) {
                    onComplete();
                }

                // Мигание курсора несколько раз перед исчезновением
                let blinkCounter = 0;
                const blinkInterval = setInterval(() => {
                    setShouldShowCursor((prev) => !prev);
                    blinkCounter++;
                    
                    if (blinkCounter >= blinkCount * 2) {
                        clearInterval(blinkInterval);
                        setShouldShowCursor(false);
                    }
                }, blinkSpeed);
            }
        }, typingSpeed);

        return () => {
            clearInterval(interval);
            if (blinkTimeoutRef.current) {
                clearTimeout(blinkTimeoutRef.current);
            }
        };
    }, [text, typingSpeed, onComplete, blinkCount, blinkSpeed]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isTyping && shouldShowCursor && (
                <span>{cursorCharacter}</span>
            )}
            {showCursor && isTyping && (
                <span className="animate-pulse">{cursorCharacter}</span>
            )}
        </span>
    );
}
