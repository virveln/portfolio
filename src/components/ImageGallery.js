import React, { useState } from 'react';
import '../styles/ImageGallery.css';

function ImageGallery({ project }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <div className="image-gallery">
            {project.images.map((image, index) => (
                <div key={index} className="image-item">
                    <img
                        src={image.url}
                        alt={image.description}
                        className="project-image"
                        onClick={() => openImage(image)} // Öppna bilden vid klick
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
