import { useState } from "react";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:col-span-5">
      <div className="bg-secondary rounded-lg overflow-hidden mb-4">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx ? "border-primary" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full aspect-square object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}