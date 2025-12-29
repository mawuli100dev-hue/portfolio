"use client";

import Welcome from "./components/sections/Welcome";
import About from "./components/sections/About";
import Context from "./components/sections/Context";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Resources from "./components/sections/Resources";
import PersonalStrengths from "./components/sections/PersonalStrengths";
import ServiceOffer from "./components/sections/ServiceOffer";
import Contact from "./components/sections/Contacts";
import Layout from "./components/sections/layout";
import blurData from "@/public/img/blur-data.json";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";
import Achievements from "./components/sections/Achievements";

export default function Home() {
  return (
    <div>
      <Layout>
        {/* Mot de bienvenue */}
        <Welcome />

        {/* Qui suis-je ? */}
        <About />

        {/* Contexte et enjeux */}
        {/* <Context /> */}

        {/* Parcours universitaire/formation */}
        <Education />

        {/* Parcours d'expériences */}
        <Experience />

        {/* 3 Réalisations significatives */}
        <Achievements />

        {/* Synthèse des compétences */}
        <Skills />

        {/* Réseaux professionnels */}
        {/* <Network /> */}

        {/* Autres ressources */}
        <Resources />

        {/* Publications et communications */}
        {/* <Publications /> */}

        {/* Atouts personnels */}
        <PersonalStrengths />

        {/* Offre d'intervention */}
        {/* <ServiceOffer /> */}

        {/* Contact */}
        <Contact />

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/ayi-mawuli-amavigan-335646394"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/mawuli100dev-hue/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://wa.me/+33774749825"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
            <div className="text-center mt-4">
              <p>&copy; {new Date().getFullYear()} - Tous droits réservés</p>
            </div>
          </div>
        </footer>
      </Layout>
    </div>
  );
}
