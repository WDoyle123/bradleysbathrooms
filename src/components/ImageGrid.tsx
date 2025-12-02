import { useState } from "react";

interface ImageGridProps {
  images: string[];
  categoryName?: string;
}

export default function ImageGrid({ images, categoryName }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => setSelectedImage(imageUrl)}
          >
            <figure className="aspect-square">
              <img
                src={imageUrl}
                alt={categoryName ? `${categoryName} ${index + 1}` : `Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="modal modal-open"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-box max-w-5xl p-0 relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto"
            />
          </div>
          <div className="modal-backdrop"></div>
        </div>
      )}
    </>
  );
}
