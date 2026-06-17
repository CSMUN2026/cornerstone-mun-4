import Image from "next/image";

export default function About() {
  return (
    <section
  id="about"
  className="py-24 bg-[#031124]"
>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <div>
          <p className="text-yellow-400 uppercase mb-4">
            About CSMUN
          </p>

          <h2 className="text-5xl mb-6">
            Empowering Voices.
            <br />
            Shaping Futures.
          </h2>

          <p className="text-gray-300 leading-8">
            CSMUN 4.0 brings together young leaders,
            innovators and changemakers to debate
            global issues, build diplomacy and create
            a better world.
          </p>
        </div>

        <Image
          src="/about-image.jpg"
          alt="About CSMUN"
          width={800}
          height={600}
          className="rounded-3xl"
        />

      </div>
    </section>
  );
}