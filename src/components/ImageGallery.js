import '../styles/ImageGallery.css';
import React, { useState, useEffect } from 'react';

function ImageGallery({ project }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    const openImage = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    useEffect(() => {
        // Vänta på att alla bilder laddats och deras dimensioner kontrollerats
        const loadImages = async () => {
            const updatedImages = await Promise.all(
                project.images.map((image) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = image.url;

                        img.onload = () => {
                            // När bilden laddats, kolla om höjden är större än bredden
                            const isPortrait = img.height > img.width;
                            resolve({ ...image, portrait: isPortrait });
                        };
                    });
                })
            );

            // Uppdatera state med de bearbetade bilderna
            setImages(updatedImages);
        };

        loadImages();
    }, [project]);

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className={`image-container ${image.portrait ? 'portrait' : ''}  ${project.images.length === 1 ? 'single-image' : 'multiple-images'}`}>
                    <img
                        src={image.url}
                        alt={image.description}
                        className='project-image'
                        onClick={() => openImage(image)}
                    />
                    <p className='image-description'>{image.description}</p>
                </div>
            ))}

            {/* Större bild visning */}
            {isOpen && (
                <div className="lightbox" onClick={closeImage}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeImage}>&times;</span>
                        <img src={selectedImage.url} alt={selectedImage.description} className="large-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;
