import React from 'react'
import GalleryItem from '../galleryitem/GalleryItem'
import "./Gallery.css"

const Gallery = () => {
    return (
        <>
            <h1>Destination Gallery</h1>
            <div className="galleryclass">
                <div className="gallery_images">
                    <GalleryItem src="images/img-1.jpg" alt="img"/>
                </div>
                <div className="gallery_images">
                    <GalleryItem src="images/img-7.jpg" alt="img"/>
                </div>
                <div className="gallery_images">
                    <GalleryItem src="images/img-5.jpg" alt="img"/>
                </div>
            </div>
        </>
    )
}

export default Gallery
