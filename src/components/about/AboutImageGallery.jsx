import React, { useState, useEffect, useRef } from 'react';
import '../../styles/General.css';
import '../../styles/about/AboutImageGallery.css';

// const importImages = (requireContext) =>
//     requireContext.keys().map(requireContext);

// const aboutImages = importImages(
//     require.context('../../images/aboutimages', false, /\.(png|jpe?g|svg|JPG|PNG)$/)
// );

// const aboutImages = await Promise.all(Object.keys(importImages).map((key) => importImages[key]()));

const importImages = import.meta.glob('../../images/aboutimages/*.{png,jpe?g,svg,JPG,PNG}', { eager: true });
const aboutImages = Object.values(importImages).map((module) => module.default);

// const aboutImages = Object.keys(importImages).map((key) => importImages[key]());
// const aboutImages = Object.keys(importImages).map(key => {
//     return importImages[key]().then((module) => module.default);
//   });

const AboutImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Index för aktuell bild
    const timeoutRef = useRef(null);

    const delay = 4000; // Bildväxlingsintervall i millisekunder

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
                    <img src={image} alt={`${index}`} className='slide-image' />
                </div>
            ))}
        </div>
    );
};

export default AboutImageGallery;
