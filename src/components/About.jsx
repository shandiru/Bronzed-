"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet Bronzed By Talia
            </h2>
            <p className="text-sage mb-6 leading-relaxed">
              Welcome to <strong>Bronzed By Talia</strong> - a professional
              makeup artist service focused on soft glam, bridal beauty, and
              confidence-boosting looks tailored to each client.
            </p>

            <p className="text-gray mb-8 leading-relaxed">
              Whether you are getting ready for your wedding day, a special
              event, or a full glam session, every appointment is designed to
              feel relaxed, polished, and beautifully personalised from start to
              finish.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Professional makeup artistry",
                "Bridal, glam, and occasion bookings",
                "Calm and personalised appointments",
                "Radiant, camera-ready finishes",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-rose" />
                  <span className="text-sage">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="Professional Care" />
              <Badge icon={<Award />} text="5-Star Service" />
              <Badge icon={<Calendar />} text="Make-up Artist" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Bronzed By Talia logo"
                  className="object-contain w-135 h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Bridal Beauty"
                text="Elegant makeup tailored for your most important moments"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Soft Glam Looks"
                text="Refined glam that enhances your natural features"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Special Events"
                text="Perfect for parties, shoots, and evening occasions"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Flawless Finish"
                text="Beautiful makeup with lasting, polished results"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from happy clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sophie M.",
              service: "Soft Glam Appointment",
              review:
                "Talia absolutely nailed my makeup. It looked fresh, glowy, and still felt like me. I had so many compliments all evening and it lasted perfectly.",
            },
            {
              name: "Chloe R.",
              service: "Bridal Makeup",
              review:
                "Bronzed By Talia was amazing on my wedding morning. Talia kept everything calm, listened to exactly what I wanted, and my makeup looked flawless in every photo.",
            },
            {
              name: "Megan L.",
              service: "Occasion Glam",
              review:
                "I booked Talia for event makeup and loved the whole experience. She was professional, friendly, and created such a beautiful bronzed look that stayed put all night.",
            },
          ].map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      <p className="text-sm text-[#555] italic mb-4">"{review}"</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
