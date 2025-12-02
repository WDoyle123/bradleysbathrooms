import PageHeader from "../components/PageHeader";
import ImageGrid from "../components/ImageGrid";
import { Link } from "react-router-dom";

const allImages = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

export default function GalleryPage() {
  const imageUrls = Object.values(allImages) as string[];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Photo Gallery" 
        description="Browse our complete collection of bathroom products and showroom displays"
      >
        <ImageGrid images={imageUrls} />

        <div className="mt-12">
          <Link to="/#contact" className="btn btn-secondary btn-lg">
            Get a Quote
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}

