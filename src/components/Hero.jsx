"use client";
import React from "react";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScreenRecording_06-26-2025%2015-24-12_1-IdiAPoQM49HvC7MD2MuQDXltlko74S.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mt-15 mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1 bg-rose/20 px-4 py-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-rose fill-rose"
                />
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-[#222222]">
              Professional Make-up Artist
              <span className="block text-primary">
                Bronzed By Talia
              </span>
            </h1>

            <p className="text-lg md:text-xl text-sage mb-8 max-w-2xl mx-auto leading-relaxed">
              Bronzed By Talia creates polished, radiant makeup looks for
              weddings, special occasions, and glam appointments with a calm,
              personalised experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white bg-secondary-hover transition-all h-10 px-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
                Book Your Appointment
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-[#D8D8D8] bg-white text-[#555555] bg-secondary-hover transition-all h-10 px-6">
                View Our Gallery
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              { number: "5*", label: "Client Reviews" },
              { number: "3", label: "Signature Services" },
              { number: "Glam", label: "Bridal & Occasion Looks" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-rose mb-2">
                  {stat.number}
                </div>
                <div className="text-sage">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
