import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutData from "../../data/aboutData";
import Trainer from "../../assets/images/hero/trainer.png";
import Container from "../common/Container";

const AboutSection = () => {
  return (
    <section className="py-24">
    <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-xl bg-emerald-300">

              <img
                src={Trainer}
                alt="Training"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

              <h3 className="text-4xl font-bold text-blue-700">
                50+
              </h3>

              <p className="text-gray-600">
                Students Trained
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              {aboutData.badge}
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              {aboutData.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutData.description}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {aboutData.description2}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {aboutData.features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <span className="font-medium text-slate-700 text-sm">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <Link
              to={aboutData.buttonLink}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              {aboutData.buttonText}

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default AboutSection;