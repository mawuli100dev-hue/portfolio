"use client";

import {
  Target,
  Award,
  TrendingUp,
  Zap,
  BarChart3,
  DollarSign,
  Mail,
  Home,
  ImageIcon,
  ChevronRight,
  ChevronLeft,
  X,
  Eye,
} from "lucide-react";
import React, { useState } from "react";
import { achievementsData } from "./Achiv.data";
import Image from "next/image";

// Fonctions pour harmoniser les couleurs des icônes
const getIconBgColor = (color: string) => {
  switch (color) {
    case "blue":
      return "from-blue-100 to-blue-50";
    case "green":
      return "from-green-100 to-green-50";
    case "purple":
      return "from-purple-100 to-purple-50";
    case "orange":
      return "from-orange-100 to-orange-50";
    default:
      return "from-gray-100 to-gray-50";
  }
};

const getIconBorderColor = (color: string) => {
  switch (color) {
    case "blue":
      return "border-blue-200";
    case "green":
      return "border-green-200";
    case "purple":
      return "border-purple-200";
    case "orange":
      return "border-orange-200";
    default:
      return "border-gray-200";
  }
};

const getIconTextColor = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-600";
    case "green":
      return "text-green-600";
    case "purple":
      return "text-purple-600";
    case "orange":
      return "text-orange-600";
    default:
      return "text-gray-600";
  }
};

// Composant réutilisable
export default function AchievementDetail({
  achievementId,
}: {
  achievementId: number;
}) {
  const achievement = achievementsData.find((a) => a.id === achievementId);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  if (!achievement) {
    return <div>Réalisation non trouvée</div>;
  }

  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-white",
      border: "border-blue-100",
      text: "text-blue-500",
    },
    green: {
      bg: "from-green-50 to-white",
      border: "border-green-100",
      text: "text-green-500",
    },
    purple: {
      bg: "from-purple-50 to-white",
      border: "border-purple-100",
      text: "text-purple-500",
    },
    orange: {
      bg: "from-orange-50 to-white",
      border: "border-orange-100",
      text: "text-orange-500",
    },
    red: {
      bg: "from-red-50 to-white",
      border: "border-red-100",
      text: "text-red-500",
    },
  };

  return (
    <section id="achievements" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          {achievement.title}
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Cartes Contexte et Objectifs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </span>
                Contexte
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {achievement.contexte}
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100 transform transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-[#11101D] mb-2">Enjeux :</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {achievement.enjeuxEconomiques.map((enjeu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FFAA00] mr-2">•</span>
                      {enjeu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  {React.cloneElement(achievement.icon, {
                    className: "w-6 h-6 text-white",
                  })}
                </span>
                Objectifs de la mission
              </h3>
              <ul className="space-y-3 text-gray-700">
                {achievement.objectifs.map((objectif, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFAA00] mr-2">•</span>
                    {objectif}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carte Déroulement du projet */}
          <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-[#11101D] flex items-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-2 mr-3 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </span>
              Déroulement du projet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievement.phases.map((phase, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    colorClasses[phase.couleur as keyof typeof colorClasses].bg
                  } rounded-lg p-4 border ${
                    colorClasses[phase.couleur as keyof typeof colorClasses]
                      .border
                  } transform transition-all duration-300 hover:shadow-lg`}
                >
                  <h4 className="font-semibold text-[#11101D] mb-3 flex items-center">
                    <span
                      className={`bg-gradient-to-br ${getIconBgColor(
                        phase.couleur
                      )} rounded-full p-2 mr-3 shadow-lg border ${getIconBorderColor(
                        phase.couleur
                      )}`}
                    >
                      <Zap
                        className={`w-4 h-4 ${getIconTextColor(phase.couleur)}`}
                      />
                    </span>
                    {phase.nom}
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {phase.taches.map((tache, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`${
                            colorClasses[
                              phase.couleur as keyof typeof colorClasses
                            ].text
                          } mr-2`}
                        >
                          •
                        </span>
                        {tache}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold">
                      {phase.duree}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes Résultats */}
          <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-[#11101D] flex items-center">
              <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </span>
              Résultats obtenus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Carte Performance - Vert */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-br from-green-100 to-green-50 rounded-full p-3 mr-3 shadow-lg border border-green-200">
                    <Zap className="w-4 h-4 text-green-600" />
                  </span>
                  <h4 className="font-semibold text-green-800">Performance</h4>
                </div>
                <ul className="text-sm text-green-700 space-y-2">
                  {achievement.resultats.performance.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carte Business - Bleu */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-3 mr-3 shadow-lg border border-blue-200">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                  </span>
                  <h4 className="font-semibold text-blue-800">Résultats</h4>
                </div>
                <ul className="text-sm text-blue-700 space-y-2">
                  {achievement.resultats.business.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carte Technique - Violet */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-100 transform transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full p-3 mr-3 shadow-lg border border-purple-200">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </span>
                  <h4 className="font-semibold text-purple-800">Technique</h4>
                </div>
                <ul className="text-sm text-purple-700 space-y-2">
                  {achievement.resultats.technique.map((resultat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {resultat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cartes Impacts et Galerie */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Impacts et valeur ajoutée
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Impacts quantifiés :
                  </h4>
                  <ul className="text-[#11101D] space-y-2">
                    {achievement.impacts.quantifies.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-white mr-2">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Reconnaissance :
                  </h4>
                  <ul className="text-[#11101D] space-y-2">
                    {achievement.impacts.reconnaissance.map(
                      (reconnaissance, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          {reconnaissance}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#11101D] flex items-center">
                <span className="bg-gradient-to-br from-[#FFAA00] to-[#FFB84D] rounded-full p-3 mr-4 shadow-lg">
                  <ImageIcon className="w-6 h-6 text-white" />
                </span>
                Galerie du projet
              </h3>
              <div className="space-y-4">
                {/* Galerie de photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievement.images?.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-full p-2">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                      {image.caption && (
                        <p className="text-xs text-gray-600 mt-2 text-center">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Informations du projet */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#11101D] mb-2">
                    {achievement.contact.poste}
                  </h4>
                  <p className="text-sm text-gray-700">
                    Durée : {achievement.duree}
                  </p>
                  <p className="text-sm text-gray-700">
                    Statut : {achievement.contact.nom}
                  </p>
                  {achievement.contact.projectLink && (
                    <p className="text-sm text-gray-700">
                      Lien du projet :{" "}
                      <a
                        href={achievement.contact.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFAA00] hover:underline font-medium"
                      >
                        {achievement.contact.projectLink}
                      </a>
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {achievement.contact.recommandation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#FFAA00] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image principale */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={achievement.images![selectedImageIndex].url}
                alt={achievement.images![selectedImageIndex].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Légende */}
            {achievement.images![selectedImageIndex].caption && (
              <div className="text-white text-center mt-4">
                <p className="text-lg">
                  {achievement.images![selectedImageIndex].caption}
                </p>
              </div>
            )}

            {/* Navigation si plusieurs images */}
            {achievement.images!.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(
                      selectedImageIndex === 0
                        ? achievement.images!.length - 1
                        : selectedImageIndex - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFAA00] transition-colors bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(
                      selectedImageIndex === achievement.images!.length - 1
                        ? 0
                        : selectedImageIndex + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFAA00] transition-colors bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Indicateur de position */}
            {achievement.images!.length > 1 && (
              <div className="text-white text-center mt-4">
                {selectedImageIndex + 1} / {achievement.images!.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
