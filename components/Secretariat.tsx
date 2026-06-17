import Image from "next/image";

const team = [
  {
    role: "Secretary General",
    name: "Coming Soon",
    image: "/secretariat/sg.jpg",
  },
  {
    role: "Deputy Secretary General",
    name: "Coming Soon",
    image: "/secretariat/dsg.jpg",
  },
  {
    role: "USG Academic",
    name: "Coming Soon",
    image: "/secretariat/usg-academic.jpg",
  },
  {
    role: "USG Operations",
    name: "Coming Soon",
    image: "/secretariat/usg-operations.jpg",
  },
  {
    role: "USG External",
    name: "Coming Soon",
    image: "/secretariat/usg-external.jpg",
  },
  {
    role: "USG Finance",
    name: "Coming Soon",
    image: "/secretariat/usg-finance.jpg",
  },
];

export default function Secretariat() {
  return (
    <section
      id="secretariat"
      className="py-24 px-6"
    >
      <h2 className="text-center text-yellow-400 text-5xl mb-14">
        Meet The Secretariat
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">

        {team.map((member) => (
          <div
            key={member.role}
            className="text-center"
          >
            <Image
              src={member.image}
              alt={member.role}
              width={180}
              height={180}
              className="rounded-full border-2 border-yellow-500 mx-auto"
            />

            <h3 className="text-yellow-400 mt-4 text-sm uppercase">
              {member.role}
            </h3>

            <p className="mt-2">
              {member.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}