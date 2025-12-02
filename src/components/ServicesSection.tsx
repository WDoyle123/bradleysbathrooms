export default function ServicesSection() {
  return (
    <section id="services" className="py-16 container mx-auto px-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          Our Services
        </h2>
      </div>

      <div className="mt-4 prose max-w-none">
        <p className="text-lg opacity-80">
          Bradleys Bathrooms offer the most complete and thorough service for
          your bathroom needs, no matter how big or small. From the most
          compact and bijou cloakroom, to the most spacious and opulent
          designer bathroom, we have all the products and all the experience
          to ensure you choose exactly what works for you and your home.
        </p>
      </div>

      <div className="mt-6">
        <div className="border border-base-300 bg-base-100 shadow-xl overflow-hidden rounded-lg">
          <div className="px-6 py-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="btn btn-circle btn-secondary btn-outline shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"
                    className="stroke-current"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold break-words">
                  Design & Fitting
                </h3>

                <div className="opacity-80 mt-1 prose break-words">
                  <p>
                    Bradleys have been leading the way by providing a Computer Aided Design
                    service for over 20 years. We have continued to invest and work with the
                    software developers to ensure we have complete, and up to date
                    catalogues of the latest technical files.
                  </p>
                  <br />
                  <p>
                    How do we bring this service to you? Simple! We ask you to bring in
                    accurate dimensions of your bathroom. If you are still in a construction
                    phase, bring the architects drawings. If you have your bathroom
                    installer at hand, ask if they can provide some assistance. The more
                    details you can provide, the more accurate the final rendering will be.
                    The minimum we ask for is the length, width and height of your room,
                    along with window and door locations. A typical measure-up only takes 10
                    minutes. Then leave the rest to us!!
                  </p>
                  <br />
                  <p>
                    We can sit down with you and draw the room up in about ten minutes.
                    However, to get the most from our service, we'd like to make many
                    suggestions based on your needs and budget. We generally recommend
                    booking an appointment because a typical session with Julie can run into
                    many hours - don't worry, we have plenty of coffee and tea!
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-outline">CAD visualisation</span>
                  <span className="badge badge-outline">Expert installation</span>
                  <span className="badge badge-outline">Since 1961</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 min-w-0">
                  <a
                    href="#contact"
                    className="btn btn-outline w-full sm:w-auto max-w-full whitespace-normal break-words"
                  >
                    Get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
