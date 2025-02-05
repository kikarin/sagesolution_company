"use client";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    img: "/aldiyar.jpg",
    name: "Aldiyar",
    role: "Direktur",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    img: "/fauzan.jpg",
    name: "Fauzan",
    role: "Programmer",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    img: "/jati.jpg",
    name: "Jati",
    role: "Programmer",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    img: "/rizky.jpg",
    name: "Rizky",
    role: "Programmer",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    img: "/radja.jpg",
    name: "Radja",
    role: "Programmer",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    img: "/ika.png",
    name: "Ika",
    role: "Manager Adminstrasi",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function Team() {
  return (
    <section className="text-center py-16 md:py-20 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#75A56F]">
        Skill Expert Team
      </h2>
      <p className="text-base md:text-lg text-gray-900 dark:text-gray-50 mt-2">
        Berkenalan Dengan Tim Profesional Kami
      </p>
      <p className="text-sm md:text-md text-gray-900 dark:text-gray-50 mt-2 max-w-2xl mx-auto px-4">
        Terdiri dari para profesional berpengalaman, kami siap memberikan solusi
        terbaik dengan keahlian dan dedikasi tinggi di setiap proyek yang kami
        tangani.
      </p>

      <div className="wrapper mt-6 h-[400px] md:h-[600px]">
        <div className="inner" style={{ "--quantity": teamMembers.length }}>
          {teamMembers.map((member, index) => (
            <div key={member.id} className="card" style={{ "--index": index }}>
              {/* Foto Tim */}
              <div className="img">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Social Media yang muncul saat hover */}
              <div className="content">
                <p className="title">
                  {member.name}
                  <br />
                  <span>{member.role}</span>
                </p>
                <ul className="sci">
                  <li>
                    <a href={member.socials.facebook}>
                      <img src="/facebook.png" alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={member.socials.twitter}>
                    <img src="/twitter.png" alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={member.socials.linkedin}>
                    <img src="/linkedin.png" alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={member.socials.instagram}>
                    <img src="/instagram.png" alt="Facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
