import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="py-26 container mx-auto px-4">
      <Link to="/" className="btn btn-ghost mb-6">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        {title}
      </h1>
      
      {description && (
        <p className="text-lg opacity-80 mb-8">
          {description}
        </p>
      )}

      {children}
    </section>
  );
}
