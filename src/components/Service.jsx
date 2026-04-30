"use client";
import React from "react";
import {
  Users,
  Star,
  Award,
 Sparkles,
  Clock,
  Shield,
} from "lucide-react";

export default function ServicesSection() {
  const stats = [
    { icon: <Users />, value: "Bridal", label: "Wedding Ready Looks" },
    { icon: <Star />, value: "5.0", label: "Average Rating" },
    { icon: <Award />, value: "Glam", label: "Special Occasion Makeup" },
  ];

  const treatments = [
    {
      image: "/logo.png",
      icon: <Sparkles className="h-8 w-8 text-rose" />,
      title: "Bridal Makeup",
      description:
        "Elegant bridal makeup designed to look timeless, radiant, and flawless from aisle to evening.",
      badges: [
        { icon: <Clock className="h-3 w-3 mr-1" />, text: "90 mins" },
        { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Wedding Glam" },
      ],
      list: [
        "Beautiful, photo-ready finish",
        "Tailored to your dress and features",
        "Long-lasting bridal wear",
        "Calm and professional experience",
      ],
    },
    {
      image: "/logo.png",
      icon: <Sparkles className="h-8 w-8 text-rose" />,
      title: "Soft Glam Makeup",
      description:
        "A polished soft glam look that enhances your natural beauty with radiant skin and refined detail.",
      badges: [
        { icon: <Clock className="h-3 w-3 mr-1" />, text: "75 mins" },
        { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Signature Glow" },
      ],
      list: [
        "Fresh, glowing complexion",
        "Defined yet natural finish",
        "Perfect for dinners and events",
        "Customised to your style",
      ],
    },
    {
      image: "/logo.png",
      icon: <Sparkles className="h-8 w-8 text-rose" />,
      title: "Occasion Makeup",
      description:
        "Full event makeup for birthdays, parties, and special plans when you want to look confidently glam.",
      badges: [
        { icon: <Clock className="h-3 w-3 mr-1" />, text: "60 mins" },
        { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Event Ready" },
      ],
      list: [
        "Bold or soft glam options",
        "Perfect for celebrations",
        "Flattering finish for photos",
        "Long-wear polished result",
      ],
    },
  ];

  const infoCards = [
    {
      icon: <Shield className="h-6 w-6 text-rose" />,
      title: "Professional Makeup Artistry",
      text: "Every look is applied with care, precision, and a focus on enhancing your natural beauty.",
    },
    {
      icon: <Clock className="h-6 w-6 text-sage" />,
      title: "Tailored Appointments",
      text: "From bridal mornings to evening glam, each service is personalised to your event and style.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Bronzed By Talia service logo"
              className="h-16 mx-auto bg-[#3C3C3B]"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            Bronzed By Talia Services
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Signature makeup services for brides, events, and clients who want
            a polished, radiant finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {treatments.map((treatment, i) => (
            <TreatmentCard key={i} {...treatment} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {infoCards.map((info, i) => (
            <InfoCard key={i} {...info} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 rounded-md bg-primary text-white font-medium text-sm shadow hover:bg-[#2d2d2c] transition-all">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl border border-[#EAEAEA] shadow-sm py-8">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-[#666]">{label}</div>
    </div>
  );
}

function TreatmentCard({ image, icon, title, description, badges, list }) {
  return (
    <div className="rounded-xl border border-[#EAEAEA] shadow-sm bg-white overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-primary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C3C3B]/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          {icon}
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#555] text-base mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center text-xs bg-[#EFE9E4] text-[#4A403B] rounded-md px-2 py-1"
            >
              {b.icon}
              {b.text}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-4">
          {list.map((item, i) => (
            <li key={i} className="flex items-center space-x-2 text-sm">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span className="text-[#555]">{item}</span>
            </li>
          ))}
        </ul>

        <button className="w-full py-2 border border-gray-200 text-white rounded-md text-sm bg-primary hover:bg-[#2d2d2c] transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm border border-[#EAEAEA] rounded-xl p-6 shadow-sm">
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold text-[#333] mb-1">{title}</h3>
        <p className="text-[#666] text-sm">{text}</p>
      </div>
    </div>
  );
}
