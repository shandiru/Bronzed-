"use client";
import React from "react";
import {
  Shield,
  Award,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-sage max-w-2xl mx-auto leading-relaxed">
            Ready to book your glam appointment? Contact Bronzed By Talia for
            bridal, occasion, and soft glam makeup bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Shield className="h-6 w-6 text-primary" />,
              title: "Professional Artist",
              desc: "Makeup tailored to enhance your features beautifully",
            },
            {
              icon: <Award className="h-6 w-6 text-primary" />,
              title: "5-Star Service",
              desc: "Trusted by bridal and occasion makeup clients",
            },
            {
              icon: <MessageCircle className="h-6 w-6 text-primary" />,
              title: "Personalised Looks",
              desc: "Every appointment is shaped around your style and event",
            },
            {
              icon: <Calendar className="h-6 w-6 text-primary" />,
              title: "Flexible Booking",
              desc: "Available for weddings, events, and glam sessions",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-[#EAEAEA] bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#333] mb-1 text-sm">
                {f.title}
              </h3>
              <p className="text-xs text-[#666]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="rounded-xl border border-[#EAEAEA] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-[#333]">Contact Information</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Phone</p>
                    <a href="tel:+447847486548" className="text-[#666] hover:text-[#222] transition-colors">
                      +44 7847 486548
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Email</p>
                    <a
                      href="mailto:bronzedbytalia@gmail.com"
                      className="text-[#666] hover:text-[#222] transition-colors"
                    >
                      bronzedbytalia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Business</p>
                    <p className="text-[#666]">Bronzed By Talia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F3F1EF]">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-[#222]">Role</p>
                    <p className="text-[#666]">Make-up artist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#EAEAEA] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#333]">
                    Why Choose us?
                  </h3>
                  <span className="inline-block text-xs bg-primary text-white rounded-md px-2 py-0.5 mt-1">
                    Trusted Make-up Artist
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#555]">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Bridal, glam, and occasion makeup
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Looks tailored to your features and style
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Calm and professional appointments
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Photo-ready flawless finishes
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  5-star client experience
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#EAEAEA] overflow-hidden shadow-sm">
              <div className="relative h-52">
                <img
                  src="/modern-medical-clinic-interior-aesthetic-treatment.jpg"
                  alt="Bronzed By Talia makeup setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#EAEAEA] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5  text-primary" />
              <h3 className="font-semibold text-[#333]">Book Your Appointment</h3>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#444] mb-1 block">
                    First Name
                  </label>
                  <input
                    className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-1 focus-ring outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#444] mb-1 block">
                    Last Name
                  </label>
                  <input
                    className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Service Interest
                </label>
                <input
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none"
                  placeholder="e.g., Bridal Makeup, Soft Glam Makeup, Occasion Makeup"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#444] mb-1 block">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-[#EAEAEA] rounded-md px-3 py-2 text-sm focus:ring-2 focus-ring outline-none resize-none"
                  placeholder="Tell us about your event date, desired look, and booking details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary bg-secondary-hover text-white rounded-md py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
