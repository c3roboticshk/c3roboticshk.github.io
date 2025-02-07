import {useEffect, useState} from "react";

import images from "../data/homePageAnimatedImg";

function AnimatedImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="image-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="products"
                    className={index === currentImageIndex ? "active" : ""}
                />
            ))}
        </div>
    );
}

export default AnimatedImage;