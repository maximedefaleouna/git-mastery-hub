import React from "react";
import { useNavigate } from "react-router-dom";

/* =======================
   IMAGES
======================= */
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import ukLogo from "@/assets/uk4.jpg";
import gitHero from "@/assets/git.webp";

/* =======================
   MEMBRES (SANS ROLE)
======================= */
const members = [
  { name: "DEFALEOUNA Tchassama Dessoklema", filiere: "LPDM", avatar: img10 },
  { name: "NYABO Kodjo Messan Pacôme", filiere: "LPSIC", avatar: img11 },
  { name: "EGBOHOU William Manguiliwe", filiere: "LPSIC", avatar: img12 },
  { name: "FAYA Esso-Rong Lazare", filiere: "LPSIC", avatar: img13 },
  { name: "ATHON B. Maxime", filiere: "LPDM", avatar: img14 },
];

interface TeamPageProps {
  onStartTutorial: () => void;
}

/* =======================
   PAGE
======================= */
export default function TeamPage({ onStartTutorial }: TeamPageProps) {
  const navigate = useNavigate();

  return (
    // <section className="bg-background">
    //   {/* ================= BANNIÈRE EN HAUT ================= */}

    //   <div className="w-full">
    //     <img
    //       src={gitHero}
    //       alt="Git Hero"
    //       className="w-full h-auto object-contain rounded-lg"
    //     />
    //   </div>

    //   {/* ================= TEXTE ET BOUTON ================= */}
    //   <div className="mx-auto max-w-6xl px-6 py-16">
    //     <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-16">
    //       {/* Texte */}
    //       <div className="flex-1">
    //         <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
    //           Tutoriel Git et GitHub – Licence Professionnelle en Informatique
    //         </h1>

    //         <p className="text-muted-foreground leading-relaxed mb-2">
    //           Nous sommes des étudiants en{" "}
    //           <strong>Licence Professionnelle en Informatique</strong> à l’
    //           <strong>Université de Kara</strong>. Ce projet a été initié et
    //           encadré par notre responsable pédagogique,{" "}
    //           <strong>Docteur SAMIE</strong>.
    //         </p>

    //         <p className="text-muted-foreground leading-relaxed mb-4">
    //           L’équipe est composée d’étudiants issus des filières{" "}
    //           <strong>LPDM</strong> (Développement Web et Mobile) et{" "}
    //           <strong>LPSIC</strong> (Sécurité Informatique et Cybersécurité).
    //         </p>

    //         <button
    //           onClick={onStartTutorial}
    //           className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
    //         >
    //           Commencer le tutoriel
    //         </button>
    //       </div>

    //       {/* Logo petit et discret */}
    //       <div className="flex-shrink-0 w-20 md:w-24 mt-4 md:mt-0">
    //         <img
    //           src={ukLogo}
    //           alt="Université de Kara"
    //           className="w-full h-auto object-contain"
    //         />
    //       </div>
    //     </div>

    //     {/* ================= TEAM GRID ================= */}
    //     <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
    //       Notre Équipe
    //     </h2>
    //     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //       {members.map((member, index) => (
    //         <div
    //           key={index}
    //           className="group rounded-2xl border border-border bg-card
    //       transition-all duration-300 hover:shadow-lg"
    //         >
    //           {/* Image */}
    //           <div className="relative overflow-hidden rounded-t-2xl aspect-[4/5]">
    //             <img
    //               src={member.avatar}
    //               alt={member.name}
    //               loading="lazy"
    //               className="absolute inset-0 h-full w-full object-cover
    //           grayscale transition-all duration-500
    //           group-hover:grayscale-0 group-hover:scale-105"
    //             />
    //           </div>

    //           {/* Content */}
    //           <div className="px-5 py-5 text-center">
    //             <h3 className="text-base font-semibold text-foreground leading-snug">
    //               {member.name}
    //             </h3>

    //             <span
    //               className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium
    //           ${
    //             member.filiere === "LPDM"
    //               ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
    //               : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
    //           }`}
    //             >
    //               {member.filiere}
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* ================= FOOTER ================= */}
    //     <div className="mt-24 border-t border-border pt-8 text-center text-sm text-muted-foreground">
    //       <p className="font-medium">
    //         Université de Kara — Licence Professionnelle en Informatique
    //       </p>
    //       <p className="mt-1">Projet académique encadré par le Dr SAMIE</p>
    //     </div>
    //   </div>
    // </section>

    <section className="bg-background">
      {/* ================= BANNIÈRE EN HAUT ================= */}
      {/* <div className="w-full overflow-hidden rounded-lg">
        <img
          src={gitHero}
          alt="Git Hero"
          className="w-full h-60 md:h-80 lg:h-96 object-cover"
        />
      </div> */}
      <div className="w-full">
        <img
          src={gitHero}
          alt="Git Hero"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* ================= TEXTE ET BOUTON ================= */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-12">
          {/* Texte */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
              Tutoriel Git et GitHub – Licence Professionnelle en Informatique
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-2">
              Nous sommes des étudiants en{" "}
              <strong>Licence Professionnelle en Informatique</strong> à l’
              <strong>Université de Kara</strong>. Ce projet a été initié et
              encadré par notre responsable pédagogique,{" "}
              <strong>Docteur SAMIE</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              L’équipe est composée d’étudiants issus des filières{" "}
              <strong>LPDM</strong> (Développement Web et Mobile) et{" "}
              <strong>LPSIC</strong> (Sécurité Informatique et Cybersécurité).
            </p>

            <button
              onClick={onStartTutorial}
              className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Commencer le tutoriel
            </button>
          </div>

          {/* Logo petit et discret */}
          {/* <div className="flex-shrink-0 w-20 md:w-24 mt-4 md:mt-0">
            <img
              src={ukLogo}
              alt="Université de Kara"
              className="w-full h-auto object-contain"
            />
          </div> */}
        </div>

        {/* ================= TEAM GRID ================= */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          Notre Équipe
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-2xl aspect-[4/5]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-5 text-center">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {member.name}
                </h3>
                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    member.filiere === "LPDM"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {member.filiere}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-20 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p className="font-medium">
            Université de Kara — Licence Professionnelle en Informatique
          </p>
          <p className="mt-1">Projet encadré par le Dr SAMIE</p>
        </div>
      </div>
    </section>
  );
}
