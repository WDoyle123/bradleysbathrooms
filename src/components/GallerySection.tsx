import { useState, useEffect } from "react";

// Import all images from assets
const allImages = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get array of image URLs and select a subset for the carousel
  const imageUrls = Object.values(allImages) as string[];
  const carouselImages = imageUrls.slice(0, 8); // Show first 8 images

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (carouselImages.length === 0) return null;

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-center">
          Our Showroom
        </h2>
        
        <p className="text-lg opacity-80 mb-8 text-center max-w-2xl mx-auto">
          Browse our extensive range of bathrooms, sinks, and toilets at our Portsmouth showroom
        </p>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="carousel w-full rounded-lg shadow-2xl overflow-hidden aspect-[4/3]">
            {carouselImages.map((img, index) => (
              <div
                key={index}
                className={`carousel-item relative w-full ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="btn btn-circle btn-sm absolute left-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100"
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle btn-sm absolute right-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100"
            aria-label="Next image"
          >
            ❯
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-base-300 hover:bg-base-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href="/gallery" className="btn btn-secondary btn-lg">
            View All Photos
          </a>
        </div>
      </div>
    </section>
  );
}
