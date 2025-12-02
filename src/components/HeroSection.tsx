export default function HeroSection() {
  return (
    <section
      id="top"
      className="hero min-h-[50vh] sm:min-h-[70vh] relative overflow-hidden bg-primary w-screen ml-[calc(-50vw+50%)]"
    >
      <div className="hero-content w-full px-4 sm:px-6 md:px-8 text-center justify-center">
        <div className="mx-auto max-w-xl sm:max-w-2xl">
          <div className="pointer-events-none select-none badge badge-white mb-3 sm:mb-4">
            Since 1961 • Portsmouth
          </div>

          <h1
            className="pointer-events-none select-none text-4xl sm:text-5xl md:text-7xl font-bold text-shadow text-base-100 tracking-[0rem] mt-5 sm:mt-10"
            style={{ fontFamily: "'Michroma', serif" }}
          >
            BRADLEYS
          </h1>
          <h2
            className="pointer-events-none select-none text-4xl sm:text-5xl md:text-7xl mt-[-10px] text-base-100 leading-tight tracking-tight font-bold"
            style={{ fontFamily: "'Michroma', serif" }}
          >
            BATHROOMS
          </h2>

          <p
            className="pointer-events-none select-none mt-3 sm:mt-4 sm:text-lg md:text-xl lg:text-3xl font-bold text-base-100 mb-10"
            style={{ fontFamily: "'Michroma', serif" }}
          >
            Design • Style • Serenity
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a href="#services" className="btn bg-white hover:bg-gray-100 text-black border-0 w-full sm:w-auto">
              Explore services
            </a>
            <a href="#contact" className="btn btn-outline text-base-100 border-base-100 hover:bg-base-100 hover:text-primary w-full sm:w-auto">
              Get a quote
            </a>
          </div>

          <div className="mt-6 sm:mt-8 stats stats-horizontal shadow-lg bg-base-100 backdrop-blur scale-100">
            <div className="stat px-2 sm:px-4">
              <div className="stat-title font-bold text-xs sm:text-sm">
                Customer rating
              </div>
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJDWg7UhZddEgRRAz3nzi7XUo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Google reviews (opens in a new tab)"
                className="stat-value text-lg sm:text-2xl transform transition-transform duration-200 hover:-translate-y-0.5"
              >
                4.8⭐
              </a>{" "}
              <a
                className="stat-desc text-[10px] font-bold sm:text-xs"
                href="https://search.google.com/local/reviews?placeid=ChIJDWg7UhZddEgRRAz3nzi7XUo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Google reviews (opens in a new tab)"
              >
                Click to read reviews
              </a>
            </div>
            <div className="stat px-2 sm:px-4">
              <div className="stat-title text-xs sm:text-sm font-bold">
                Get a Quote
              </div>
              <div className="stat-value text-lg sm:text-2xl">Same-day</div>
              <div className="stat-desc text-[10px] sm:text-xs font-bolt">
                Where applicable
              </div>
            </div>
            <div className="stat px-2 sm:px-4">
              <div className="stat-title text-xs sm:text-sm font-bold">
                Guarantee
              </div>
              <div className="stat-value text-lg sm:text-2xl">12 mo</div>
              <div className="stat-desc text-[10px] sm:text-xs font-bold">
                Materials &amp; labour
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="pointer-events-none select-none badge badge-base-100 text-xs sm:text-sm px-3 py-2">
              157-161 London Rd, North End, Portsmouth PO2 9AA
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" />
    </section>
  );
}
