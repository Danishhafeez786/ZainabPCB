import {
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import ctaData from "../../data/ctaData";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 py-24">

      {/* Decorative Circles */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

            {ctaData.badge}

          </span>

          {/* Title */}

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">

            {ctaData.title}

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

            {ctaData.description}

          </p>

          {/* Features */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {ctaData.features.map((feature, index) => (

              <div
                key={index}
                className="flex items-center text-sm gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur"
              >

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                <span>{feature}</span>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href={`tel:${ctaData.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              <Phone size={20} />

              Call Now
            </a>

            <a
              href={`https://wa.me/${ctaData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <MessageCircle size={20} />

              WhatsApp
            </a>

          </div>

          {/* Contact Info */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 text-blue-100 md:flex-row">

            <div className="flex items-center gap-2">

              <Phone size={18} />

              <span>{ctaData.phone}</span>

            </div>

            <div className="hidden h-6 w-px bg-white/30 md:block"></div>

            <div className="flex items-center gap-2">

              <MapPin size={18} />

              <span>{ctaData.location}</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;