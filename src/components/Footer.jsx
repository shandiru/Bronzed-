"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bronzed By Talia</h3>
            <p className="text-white/80 leading-relaxed">
              Bronzed By Talia is a professional make-up artist brand offering
              bridal, occasion, and soft glam makeup with polished, radiant
              results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-white/80">
              {[
                "Bridal Makeup",
                "Soft Glam Makeup",
                "Occasion Makeup",
                "Make-up Artist",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-white hover:text-[#F3F3F3] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector("#services");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <a href="tel:+447847486548" className="text-white hover:text-[#F3F3F3] transition-colors">
                  +44 7847 486548
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <a
                  href="mailto:bronzedbytalia@gmail.com"
                  className="text-white hover:text-[#F3F3F3] transition-colors"
                >
                  bronzedbytalia@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white/90">Bronzed By Talia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 my-6"></div>

        <p className="text-center text-white/70">
          © 2026 Bronzed By Talia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
