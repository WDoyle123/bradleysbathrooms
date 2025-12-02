export default function WhyChooseSection() {
  return (
    <section id="why" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Heading spans full width */}
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-12 text-center">
          Why choose Bradleys Bathrooms?
        </h2>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Google Maps iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1764709647160!6m8!1m7!1sNzoy5l30-i_PphpwbpyThw!2m2!1d50.81804273477992!2d-1.078938615135516!3f325.8899662743746!4f-0.08035963867436635!5f0.7820865974627469" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="rounded-lg shadow-xl w-full"
            title="Bradleys Bathrooms Location"
          />

          {/* Right column: cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Established 1961</h3>
              <p className="opacity-80">
                A family run business serving Hampshire and West Sussex for over 60 years with personal service and experienced staff.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">CAD Design Service</h3>
              <p className="opacity-80">
                Photorealistic 3D renderings of your dream bathroom—visualise every detail before you commit.
              </p>
              <ul className="mt-3 steps steps-vertical md:steps-horizontal">
                <li className="step step-secondary">Consultation</li>
                <li className="step step-secondary">Design</li>
                <li className="step">Visualise</li>
                <li className="step">Install</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg md:col-span-2">
            <div className="card-body">
              <h3 className="card-title">Quality &amp; Innovation</h3>
              <p className="opacity-80">
                At the forefront of trends from traditional to modern designs, partnered with leading manufacturers and professional installers.
              </p>
              <div className="join mt-4">
                <div className="badge join-item badge-outline">Family Run</div>
                <div className="badge join-item badge-outline">Expert Design</div>
                <div className="badge join-item badge-outline">Quality Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-lg opacity-80 mb-6">
          Right down to the last detail, our design team will guide you through your bathroom design in aesthetic, ergonomic and technical detail. Bathrooms are our passion, and we continue to invest so that our customers get the very best in bathroom design, quality and service.
        </p>
        <p className="text-xl font-bold">
          Pop in, or better still, arrange an appointment.
        </p>
      </div>
    </div>
    </section >
  );
}

