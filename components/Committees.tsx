const committees = [
  "UNSC",
  "UNHRC",
  "DISEC",
  "IP",
  "Lok Sabha",
  "IPL",
];

export default function Committees() {
  return (
    <section
      id="committees"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl text-center gold-text mb-14">
        Committees
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {committees.map((committee) => (
          <div
            key={committee}
            className="glass rounded-3xl p-8 hover:scale-105 transition duration-300"
          >
            <h3 className="text-3xl gold-text">
              {committee}
            </h3>

            <p className="mt-4 text-gray-300">
              Committee information will be managed through the admin panel.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}