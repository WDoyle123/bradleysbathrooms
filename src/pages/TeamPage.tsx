import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="About Us">
        <div className="prose max-w-none mb-12">
          <p className="text-lg opacity-80">
            Established in 1961, Bradleys Bathrooms is a family run business that has been furnishing our customers homes in the Hampshire and West Sussex area for over 50 years. Our enduring success is down to our commitment to personal service, coupled with friendly and experienced sales and design staff. Our showroom has always been at the forefront of trends and innovations, from traditional designs, cottage designs, modern and quirky designs.
          </p>
          
          <p className="text-lg opacity-80 mt-6">
            Right down to the last detail, Bradleys Bathrooms design team will guide you through your bathroom design in aesthetic, ergonomic and technical detail. We pride ourselves on our partnerships with professional bathroom installers and leading bathroom manufacturers, to ensure that technical detail is observed. On the South Coast, we were one of the first to use Computer Aided Design that renders in photorealistic detail. Our clients are able to fully visualise their dream bathroom before they have committed a penny.
          </p>
          
          <p className="text-lg opacity-80 mt-6">
            Bathrooms are our passion, and we continue to invest so that our customers get the very best in bathroom design, quality and service. We look forward to seeing you and being part of your journey to your dream bathroom. Pop in, or better still, arrange an appointment.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
          The Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Julie */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">Julie</h3>
              <p className="text-primary font-semibold">DESIGN AND SALES</p>
              <p className="opacity-80">
                Julie has been designing and planning beautiful bathrooms for over 20 years. Julie will guide you through the entire process.
              </p>
            </div>
          </div>

          {/* Wendy */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">Wendy</h3>
              <p className="text-primary font-semibold">ASSISTANCE</p>
              <p className="opacity-80">
                Wendy also helms the reception desk and will assist in anyway she can.
              </p>
            </div>
          </div>

          {/* Andy */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">Andy</h3>
              <p className="text-primary font-semibold">SALES</p>
              <p className="opacity-80">
                Andy has been involved in building beautiful homes for 30 years. Andy will coordinate with your building team to ensure a silky smooth installation.
              </p>
            </div>
          </div>

          {/* The Fitters */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl">The Fitters</h3>
              <p className="text-primary font-semibold">LOGISTICS</p>
              <p className="font-semibold mb-2">BATHROOM INSTALLATION</p>
              <p className="opacity-80">
                A handpicked selection of quality installers that we can recommend if you have yet to source your own installation team.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/#contact" className="btn btn-secondary btn-lg">
            Get in Touch
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}
