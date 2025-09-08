const teamMembers = [
  {
    initials: "AA",
    name: "Alim Ahmady",
    role: "Team Leader",
    image: "../../images/2021.gif",
  },
  {
    initials: "MA",
    name: "Mujtaba Ahmady",
    role: "AI Analyst",
    image: "../../images/2021.gif",
  },
  {
    initials: "RK",
    name: "Rohullah Kyhan",
    role: "Full Stack Developer",
    image: "../../images/2021.gif",
  },
  {
    initials: "TA",
    name: "Sayed Taqi Ahmadi",
    role: "Full Stack Developer",
    image: "../../images/2021.gif",
  },
  {
    initials: "ZK",
    name: "Zabih Keram",
    role: "DevOps Engineer",
    image: "../../images/2021.gif",
  },
  {
    initials: "EM",
    name: "Esmatullah Mohammadi",
    role: "Full Stack Developer",
    image: "../../images/2021.gif",
  },
  {
    initials: "MA",
    name: "Mortaza Ahmady",
    role: " full Graphic Designer",
    image: "../../images/2021.gif",
  },
  {
    initials: "MA",
    name: "Mohammad Ahmady",
    role: "Full Stack Developer",
    image: "../../images/2021.gif",
  },
];

export default function About() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto border border-green-400 rounded-lg p-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center text-sm font-bold text-green-700">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  member.initials
                )}
              </div>
              <div className="font-semibold text-gray-800">{member.name}</div>
              <div className="text-sm text-gray-500">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
