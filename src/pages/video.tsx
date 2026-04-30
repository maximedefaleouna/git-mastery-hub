import React from "react";
import { useNavigate } from "react-router-dom";
import FINALE from "../assets/FINALE.mp4";

export default function CompleteVideoPage() {
  const navigate = useNavigate();

  return (
    <section className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
        {/* ================= EN-TÊTE ================= */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vidéo complète – Git & GitHub
          </h1>

          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">
              Ressource pédagogique intégrale
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cette vidéo constitue une présentation exhaustive couvrant
            l’ensemble des concepts, outils et bonnes pratiques liés à
            <strong> Git et GitHub</strong>, depuis les bases jusqu’aux usages
            avancés.
          </p>
        </div>

        {/* ================= VIDÉO ================= */}
        <div className="mb-16">
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl bg-black">
            <iframe
              src="https://drive.google.com/file/d/1HzK5h5KyUJJGXtwx6x1dDo6sOLmmu_Td/preview"
              title="Vidéo complète : Git et GitHub"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl bg-black">
            <video
              //   src={FINALE}
              src="https://drive.google.com/file/d/1HzK5h5KyUJJGXtwx6x1dDo6sOLmmu_Td/view"
              controls
              className="absolute top-0 left-0 w-full h-full"
            />
            ;
          </div> */}

          {/* Information sous la vidéo */}
          <div className="mt-8 border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Une ressource complète et structurée
            </h3>
            <p className="text-muted-foreground">
              Cette vidéo a été conçue comme une ressource de référence. Elle
              regroupe l’ensemble des notions essentielles à la maîtrise de Git
              et GitHub et peut être utilisée comme support principal ou comme
              révision approfondie.
            </p>
          </div>
        </div>

        {/* ================= CONTENU ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contenu pédagogique */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              Contenu abordé
            </h3>

            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Fondamentaux de Git :
                </strong>{" "}
                installation, configuration, dépôts locaux et commandes de base.
              </li>
              <li>
                <strong className="text-foreground">
                  Gestion des branches :
                </strong>{" "}
                création, fusion, rebase et résolution de conflits.
              </li>
              <li>
                <strong className="text-foreground">GitHub avancé :</strong>{" "}
                Pull Requests, Issues, Projects, GitHub Actions et Pages.
              </li>
              <li>
                <strong className="text-foreground">
                  Workflows professionnels :
                </strong>{" "}
                Git Flow, GitHub Flow et conventions de commits.
              </li>
            </ul>
          </div>

          {/* Public cible */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              Public concerné
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Cette vidéo s’adresse principalement aux étudiants inscrits en
                <strong className="text-foreground">
                  {" "}
                  Licence Professionnelle en Informatique
                </strong>
                , notamment dans les parcours suivants :
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Développement Web et Mobile (LPDM)</li>
                <li>Sécurité Informatique et Cybersécurité (LPSIC)</li>
                <li>
                  Tout étudiant souhaitant acquérir une maîtrise professionnelle
                  des outils Git et GitHub
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-muted/50 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">
                Cette vidéo constitue une synthèse complète du cours et peut
                être considérée comme une ressource finale de référence.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="font-medium">
            Université de Kara — Licence Professionnelle en Informatique
          </p>
          <p className="mt-1">Vidéo complète de formation sur Git et GitHub</p>
          <p className="mt-2 text-xs opacity-75">
            Support pédagogique destiné à l’apprentissage et à la révision des
            concepts fondamentaux et avancés
          </p>
        </footer>
      </div>
    </section>
  );
}
