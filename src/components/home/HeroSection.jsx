import {ArrowRight,Phone,CheckCircle2,MapPin,Award,} from "lucide-react";
import heroData from "../../data/heroData";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-70"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid min-h-[90vh] items-center gap-16 py-20 lg:grid-cols-2">

          {/* ========================= LEFT CONTENT ========================= */}

          <div>

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

              <Award size={18} />

              {heroData.badge}

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl xl:text-6xl">

              {heroData.title.line1}

              <span className="mt-2 block text-blue-700">
                {heroData.title.line2}
              </span>

              <span className="block">
                {heroData.title.line3}
              </span>

              <span className="block text-green-600">
                {heroData.title.line4}
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">

              {heroData.description}

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {heroData.features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <span className="font-medium text-slate-700 text-sm">
                    {item.title}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={heroData.buttons.primary.link}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                {heroData.buttons.primary.text}

                <ArrowRight size={20} />
              </a>

              <a
                href={heroData.buttons.secondary.link}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-700 px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <Phone size={20} />

                {heroData.buttons.secondary.text}
              </a>

            </div>

            {/* Contact */}

            <div className="mt-10 flex flex-wrap items-center gap-8 text-slate-600">

              <div className="flex items-center gap-2">

                <Phone
                  size={18}
                  className="text-blue-700"
                />

                <span>{heroData.contact.phone}</span>

              </div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={18}
                  className="text-blue-700"
                />

                <span>{heroData.contact.location}</span>

              </div>

            </div>

          </div>

          {/* ========================= RIGHT CONTENT ========================= */}

          <div className="relative">
                        {/* Main Image Card */}

            <div className="relative mx-auto max-w-xl">

              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">

                <img
                  src={heroData.image.workshop}
                  alt={heroData.image.alt}
                  className="h-[550px] w-full rounded-2xl object-cover"
                />

              </div>

              {/* Top Left Card */}

              <div className="absolute -left-8 top-8 hidden w-56 rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-blue-700">
                  {heroData.statistics[0].value}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  {heroData.statistics[0].label}
                </p>

              </div>

              {/* Bottom Right Card */}

              <div className="absolute -right-8 bottom-10 hidden w-56 rounded-2xl bg-white p-5 shadow-xl lg:block">

                <h3 className="text-3xl font-bold text-green-600">
                  {heroData.statistics[2].value}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  {heroData.statistics[2].label}
                </p>

              </div>

              {/* Bottom Information */}

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">

                <h3 className="text-xl font-bold text-slate-900">
                  {heroData.experience.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {heroData.experience.subtitle}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">

                  {heroData.statistics.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                    >

                      <h4 className="text-2xl font-bold text-blue-700">
                        {item.value}
                      </h4>

                      <p className="mt-1 text-sm text-slate-600">
                        {item.label}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;