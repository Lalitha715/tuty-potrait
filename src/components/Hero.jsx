import HeroImg from "../assets/herobg.png";

function Hero() {
  return (
    <section id="homegit a" className="text-center pt-32 pb-24 px-6"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        Premium Custom Photo Frames
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        The Color Printing House in Thoothukudi
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="#gallery"
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          View Frames
        </a>

        <a
          href="https://wa.me/917708260129"
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}

export default Hero;