import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";

function TypingEffect() {
    const [startTyping, setStartTyping] = useState(false); // Håller reda på när typningen ska börja

    useEffect(() => {
        // Ställ in en timer för att börja typningen efter 3 sekunder
        const timer = setTimeout(() => {
            setStartTyping(true); // Aktiverar typning
        }, 3000); // 3000 ms = 3 sekunder

        // Rensa upp timern vid avmontering
        return () => clearTimeout(timer);
    }, []);

    return (
        <h3>
                {startTyping && ( // Kolla om typningen ska börja
                    <ReactTyped
                    strings={["Jessica Hvirfvel"]}
                    typeSpeed={100}
                    loop backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                    />
                )}
        </h3>
    );
}

export default TypingEffect;
