function HeroGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 min-h-[60vh] md:min-h-[80vh] gap-4 mt-4">
      <div className="relative col-span-1 lg:col-span-2 rounded-2xl">
        <img
          src={"/assets/images/729091cd0452fb9d0b89106ceec16368.png"}
          className="rounded-2xl w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Color of <br /> Summer
            <br /> Outfit
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
            100+ Collections for your <br /> outfit inspirations <br />
            in this summer
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-1 md:grid-rows-2 gap-4">
        <div className="rounded-2xl relative h-40 md:h-auto">
          <img
            src="/assets/images/29a85f64d93c41afa6b64d31b3a88038.png"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
              Outdoor <br /> Active
            </h1>
          </div>
        </div>
        <div className="rounded-2xl relative h-40 md:h-auto">
          <img
            src="/assets/images/0233936f837e7b69d6a545511b1ba132.png"
            alt="Featured product"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGrid;
