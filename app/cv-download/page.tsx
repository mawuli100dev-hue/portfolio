// "use client";
// import { useEffect, useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { useRouter } from "next/navigation";

// function CVDownload() {
//   const cvRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const generateAndDownloadPDF = async () => {
//       if (!cvRef.current) return;

//       try {
//         // Créer un canvas avec un scale très bas pour éviter les problèmes
//         const canvas = await html2canvas(cvRef.current, {
//           scale: 1.2, // Scale encore plus bas
//           useCORS: true,
//           logging: false,
//           allowTaint: false,
//           backgroundColor: "#ffffff",
//           imageTimeout: 0,
//           removeContainer: true,
//         });

//         // Obtenir les dimensions
//         const imgData = canvas.toDataURL("image/JPEG", 0.8); // Qualité réduite

//         // Créer le PDF avec des unités en px pour plus de précision
//         const pdf = new jsPDF({
//           orientation: "portrait",
//           unit: "px",
//           format: "a4",
//         });

//         // Obtenir les dimensions de la page en px
//         const pageWidth = pdf.internal.pageSize.getWidth();
//         const pageHeight = pdf.internal.pageSize.getHeight();

//         // Redimensionner l'image pour qu'elle tienne dans la page
//         let imgWidth = canvas.width;
//         let imgHeight = canvas.height;
//         const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

//         imgWidth = imgWidth * ratio * 0.95; // 95% de la largeur pour laisser des marges
//         imgHeight = imgHeight * ratio * 0.95;

//         // Centrer l'image sur la page
//         const x = (pageWidth - imgWidth) / 2;
//         const y = (pageHeight - imgHeight) / 2;

//         // Ajouter l'image avec compression
//         pdf.addImage(
//           imgData,
//           "JPEG",
//           x,
//           y,
//           imgWidth,
//           imgHeight,
//           undefined,
//           "FAST",
//         );

//         // Télécharger le PDF
//         pdf.save("CV_Henoc_Amavigan.pdf");

//         // Rediriger vers la page CV après un court délai
//         setTimeout(() => {
//           router.push("/cv");
//         }, 500);
//       } catch (error) {
//         console.error("Erreur lors de la génération du PDF:", error);
//         router.push("/cv");
//       }
//     };

//     generateAndDownloadPDF();
//   }, [router]);

//   const experiences = [
//     {
//       title:
//         'DÉVELOPPEMENT D\'UN MOTEUR DE CLASSIFICATION NLP "FROM SCRATCH" : DÉTECTION DE SPAM',
//       tasks: [
//         "Implémenter le nettoyage et la vectorisation textuelle (NLP)",
//         "Programmer la régression logistique via NumPy",
//         "Optimiser par validation croisée",
//         "Analyser les performances via PCA et courbes ROC",
//       ],
//     },
//     {
//       title:
//         "ANALYSE ET PRÉVISION DE DONNÉES TEMPORELLES DE SANTÉ: MALADIES PULMONAIRES",
//       tasks: [
//         "Analyser et visualiser les séries temporelles de décès pulmonaires",
//         "Tester la stationnarité et identifier les composantes saisonnières",
//         "Développer des modèles de prévision: ARIMA, SARIMA, lissage exponentiel",
//         "Évaluer la performance des modèles prédictifs",
//       ],
//     },
//     {
//       title: "INTÉGRATION ET GESTION DES DONNÉES: SÉRIE TV - BREAKING BAD",
//       tasks: [
//         "Concevoir le MCD avec Looping et le modèle en flocons",
//         "Extraire et nettoyer les données sur Breaking Bad depuis le web",
//         "Implémenter les processus ETL avec FME et Python",
//         "Créer la base de données PostgreSQL avec dimension temporelle",
//       ],
//     },
//     {
//       title:
//         "ANALYSE STATISTIQUE SUR LA CONSTRUCTION DES IDENTITÉS ET L'INTÉGRATION SOCIALE EN FRANCE",
//       tasks: [
//         'Analyser et nettoyer le jeu de données "Histoire de vie"',
//         "Implémenter divers plans d'échantillonnage: PESR, stratifié",
//         "Concevoir et déployer un questionnaire de collecte de données",
//         "Évaluer la précision des estimateurs par simulations Monte Carlo",
//         "Comparer les méthodes de redressement d'échantillon",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         <p className="text-gray-600 text-center mb-4">
//           Génération du PDF en cours...
//         </p>
//       </div>

//       {/* Conteneur caché pour la génération du PDF */}
//       <div ref={cvRef} className="fixed -left-[9999px] top-0">
//         <div className="w-[800px] bg-white p-8">
//           {" "}
//           {/* Largeur fixe en pixels */}
//           <div className="grid grid-cols-3 gap-6">
//             {/* Colonne gauche */}
//             <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white col-span-1 p-6">
//               <div className="mb-6 flex justify-center">
//                 <img
//                   src="/img/profil.png"
//                   alt="Profil"
//                   className="w-32 h-32 rounded-full object-cover border-4 border-slate-600"
//                 />
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-lg font-bold mb-3 border-b-2 border-slate-600 pb-2">
//                   CONTACT
//                 </h2>
//                 <div className="space-y-2 text-xs">
//                   <div>amaviganhenoc@gmail.com</div>
//                   <div>+33 7 74 74 98 25</div>
//                   <div>Carcassonne, 11000</div>
//                   <div className="break-all text-xs">
//                     portfolioamavigan.vercel.app
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-lg font-bold mb-3 border-b-2 border-slate-600 pb-2">
//                   ÉDUCATION
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-xs text-slate-300 mb-1">
//                       2025 - en cours
//                     </p>
//                     <h3 className="font-bold text-xs mb-1">
//                       UNIVERSITÉ PERPIGNAN
//                     </h3>
//                     <p className="text-xs text-slate-200">
//                       BUT 2 Science de données
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-300 mb-1">2022-2025</p>
//                     <h3 className="font-bold text-xs mb-1">
//                       ÉCOLE POLYTECHNIQUE DE LOMÉ
//                     </h3>
//                     <p className="text-xs text-slate-200">
//                       Licence ingénierie logicielle
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-lg font-bold mb-3 border-b-2 border-slate-600 pb-2">
//                   COMPÉTENCES
//                 </h2>
//                 <ul className="space-y-1 text-xs">
//                   {[
//                     "Esprit analytique",
//                     "Créativité technique",
//                     "Leadership",
//                     "Travail d'équipe",
//                     "Communication",
//                     "Permis B",
//                     "Goethe B2",
//                   ].map((skill, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-lg font-bold mb-3 border-b-2 border-slate-600 pb-2">
//                   LANGUES
//                 </h2>
//                 <ul className="space-y-1 text-xs">
//                   <li className="flex items-center gap-2">
//                     <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
//                     Anglais: B2
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
//                     Allemand: B2
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-lg font-bold mb-3 border-b-2 border-slate-600 pb-2">
//                   TECHNIQUES
//                 </h2>
//                 <p className="text-xs">Python, R, Java, TS, C, C++</p>
//                 <p className="text-xs mt-2">N8N</p>
//               </div>
//             </div>

//             {/* Colonne droite */}
//             <div className="col-span-2 p-6">
//               <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-slate-800 mb-1">
//                   HÉNOC AMAVIGAN
//                 </h1>
//                 <p className="text-sm text-slate-600">21 ans</p>
//                 <p className="text-sm text-slate-700 font-semibold mt-2">
//                   STAGE SCIENCE DES DONNÉES
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-xl font-bold text-slate-800 mb-3 border-b-2 border-slate-300 pb-1">
//                   EXPÉRIENCES
//                 </h2>
//                 <div className="space-y-4">
//                   {experiences.map((exp, idx) => (
//                     <div key={idx} className="border-l-4 border-blue-500 pl-3">
//                       <h3 className="font-bold text-slate-800 text-xs mb-1">
//                         {exp.title}
//                       </h3>
//                       <ul className="space-y-1">
//                         {exp.tasks.slice(0, 3).map(
//                           (
//                             task,
//                             taskIdx, // Limiter à 3 tâches
//                           ) => (
//                             <li
//                               key={taskIdx}
//                               className="flex items-start gap-2 text-xs text-slate-600"
//                             >
//                               <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
//                               <span>{task.substring(0, 60)}...</span>{" "}
//                               {/* Tronquer */}
//                             </li>
//                           ),
//                         )}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h2 className="text-xl font-bold text-slate-800 mb-2 border-b-2 border-slate-300 pb-1">
//                   COMPÉTENCES TECHNIQUES
//                 </h2>
//                 <div className="flex flex-wrap gap-1">
//                   {[
//                     "PostgreSQL",
//                     "MySQL",
//                     "Docker",
//                     "Git",
//                     "Power BI",
//                     "Next.js",
//                     "Flask",
//                     "NumPy",
//                     "Pandas",
//                   ].map((tool, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold text-slate-800 mb-3 border-b-2 border-slate-300 pb-1">
//                   RÉALISATIONS
//                 </h2>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="bg-blue-50 p-3 rounded">
//                     <p className="text-xs font-bold text-blue-800">2025</p>
//                     <h3 className="font-bold text-slate-800 text-xs">
//                       Tournoi de l'Amitié
//                     </h3>
//                     <p className="text-xs text-slate-600 mt-1">
//                       Plateforme web football
//                     </p>
//                   </div>
//                   <div className="bg-slate-50 p-3 rounded">
//                     <p className="text-xs font-bold text-slate-700">2024</p>
//                     <h3 className="font-bold text-slate-800 text-xs">
//                       Extase-Home
//                     </h3>
//                     <p className="text-xs text-slate-600 mt-1">
//                       Gestion locative
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CVDownload;
