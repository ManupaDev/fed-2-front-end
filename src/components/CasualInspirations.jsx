function CasualInspirations() {
  return (
    <section className="px-4 lg:px-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-8 md:mt-4 gap-4 md:gap-x-4">
      <div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Casual Inspirations</h1>
        <p className="mt-2 md:mt-4 text-sm sm:text-base">
          Our favorite combinations for casual outfit that can inspire you to
          apply on your daily activity.
        </p>
        <button className="mt-4 md:mt-8 text-center w-full h-10 md:h-12 rounded-full border border-black flex items-center justify-center text-sm sm:text-base">
          BROWSE INPIRATIONS
        </button>
      </div>
      <div className="relative col-span-1 md:col-span-3 h-60 sm:h-80 rounded-2xl">
        <img
          src="/assets/images/ca0df25c3d226a223269e70541e09760.png"
          alt="Casual inspirations outfit"
          className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-1 md:col-span-3 h-60 sm:h-80 rounded-2xl">
        <img
          src="/assets/images/2a24c60e5479cec788203caf906828d8.png"
          alt="Casual inspirations outfit"
          className="rounded-2xl w-full absolute top-0 left-0 object-top h-full object-cover"
        />
      </div>
    </section>
  );
}

export default CasualInspirations; 