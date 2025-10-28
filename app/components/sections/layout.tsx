"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import blurData from "@/public/img/blur-data.json";

import {
  Menu,
  X,
  Code,
  BarChart2,
  Briefcase,
  FileText,
  Mail,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  Star,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#welcome");
  const sectionIds = [
    "#welcome",
    "#about",
    "#context",
    "#education",
    "#experience",
    "#achievement1",
    "#skills",
    "#network",
    "#resources",
    "#publications",
    "#personal-strengths",
    "#service-offer",
    "#contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "#welcome";
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.querySelector(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            currentActive = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Bienvenue", href: "#welcome", icon: Code },
    { name: "À propos", href: "#about", icon: Code },
    { name: "Contexte & enjeux", href: "#context", icon: Lightbulb },
    { name: "Formation", href: "#education", icon: BarChart2 },
    { name: "Expériences", href: "#experience", icon: Briefcase },
    { name: "Réalisations", href: "#achievement1", icon: Award },
    { name: "Compétences", href: "#skills", icon: BarChart2 },
    { name: "Réseaux", href: "#network", icon: Users },
    { name: "Ressources", href: "#resources", icon: BookOpen },
    { name: "Publications", href: "#publications", icon: FileText },
    { name: "Atouts", href: "#personal-strengths", icon: Star },
    { name: "Offre", href: "#service-offer", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen text-[#F5F5F5] relative">
      
      <header className="sticky top-0 z-50 w-full bg-[#11101D]/40 backdrop-blur-sm backdrop-filter">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div></div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  (activeSection === item.href
                    ? "text-[#FFAA00]"
                    : "text-[#F5F5F5]") +
                  " hover:text-[#FFAA00] transition-colors duration-200"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-[#F5F5F5]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#11101D] md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  (activeSection === item.href
                    ? "text-[#FFAA00]"
                    : "text-[#F5F5F5]") +
                  " hover:text-[#FFAA00] transition-colors duration-200 text-2xl flex items-center space-x-2"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={24} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
