import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ImageGrid from "../components/ImageGrid";

// Import images
const bathImages = import.meta.glob('/src/assets/baths/*.{jpg,jpeg,png,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const sinkImages = import.meta.glob('/src/assets/sinks/*.{jpg,jpeg,png,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const toiletImages = import.meta.glob('/src/assets/toilets/*.{jpg,jpeg,png,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const categoryImages: Record<string, Record<string, unknown>> = {
  'baths': bathImages,
  'sinks': sinkImages,
  'toilets': toiletImages,
  'showers': {}, // Add images when available
  'cloakrooms': {}, // Add images when available
  'bathroom-furniture': {}, // Add images when available
};

export default function ProductPage() {
  const { category } = useParams<{ category: string }>();
  
  const categoryName = category
    ? category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  const images = category ? Object.values(categoryImages[category] || {}) as string[] : [];
  const hasImages = images.length > 0;

  return (
    <div className="min-h-screen">
      <PageHeader 
        title={categoryName} 
        description={`Explore our range of ${categoryName.toLowerCase()}${!hasImages ? ' - images coming soon' : ''}.`}
      >
        {hasImages ? (
          <ImageGrid images={images} categoryName={categoryName} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-base-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-base-content/50">Image {i}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link to="/#contact" className="btn btn-secondary btn-lg">
            Get a Quote
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}
