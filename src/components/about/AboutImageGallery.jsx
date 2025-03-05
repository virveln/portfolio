import React, { useState, useEffect, useRef } from 'react';
import '../../styles/General.css';
import '../../styles/about/AboutImageGallery.css';

const importImages = import.meta.glob('../../images/aboutimages/*.{png,jpg,jpeg,svg,JPG,PNG}', { eager: true });
const aboutImages = Object.values(importImages).map((module) => module.default);

const AboutImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const timeoutRef = useRef(null);

    const delay = 4000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => resetTimeout();
    }, [currentIndex]);


    return (
        <div className="slideshow">
            {aboutImages.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex
                            ? 'active'
                            : index === (currentIndex - 1 + aboutImages.length) % aboutImages.length
                                ? 'previous'
                                : 'hidden'
                        }`}
                >
                    <img src={image} alt={`Image ${index} from my life`} loading="lazy" className='slide-image' />
                </div>
            ))}
        </div>
    );
};

export default AboutImageGallery;
