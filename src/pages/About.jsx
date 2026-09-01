import {
  CheckCircle2,
  Target,
  Eye,
  Wrench,
  GraduationCap,
  Users,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";
import AboutInstituteImage from "../assets/images/gallery/students-practical-session.jpg";

import { Link } from "react-router-dom";
import aboutPageData from "../data/aboutPageData";

const About = () => {
  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              {aboutPageData.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {aboutPageData.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {aboutPageData.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Explore Our Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src={AboutInstituteImage}
                alt="Zainab PCB Repairing Training"
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-blue-700 p-6 text-white shadow-xl sm:right-6">

              <p className="text-3xl font-bold">
                70%
              </p>

              <p className="mt-1 text-sm text-blue-100">
                Practical Training
              </p>

            </div>

          </div>


          {/* Content */}

          <div>

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              {aboutPageData.introduction.badge}
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {aboutPageData.introduction.title}
            </h2>

            <div className="mt-7 space-y-5">

              {aboutPageData.introduction.paragraphs.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                )
              )}

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Hands-on Practical Training",
                "Real Customer Faults",
                "Component-Level Repair",
                "Professional Equipment",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-green-500"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Our Purpose
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              We are committed to practical technical education and long-term
              professional development.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {/* Mission */}

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">

                <Target size={32} />

              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {aboutPageData.mission.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                {aboutPageData.mission.description}
              </p>

            </div>


            {/* Vision */}

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">

                <Eye size={32} />

              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {aboutPageData.vision.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                {aboutPageData.vision.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING APPROACH
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Our Approach
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              From Beginner to Professional Technician
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our structured learning approach helps students build their
              skills step by step.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {aboutPageData.approach.map((step) => (

              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >

                <span className="text-5xl font-black text-blue-100 transition group-hover:text-blue-200">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROFESSIONAL EQUIPMENT
      ===================================================== */}

      <section className="bg-slate-950 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              Professional Tools
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              Training with Modern Diagnostic Equipment
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Students learn professional testing and repair techniques using
              modern electronic equipment.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {aboutPageData.equipment.map((equipment) => (

              <div
                key={equipment}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">

                  <Wrench size={23} />

                </div>

                <span className="font-medium text-slate-200">
                  {equipment}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Why Students Trust Us
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Training Built Around Your Success
            </h2>

          </div>


          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {aboutPageData.values.map((value, index) => {

              const icons = [
                GraduationCap,
                ShieldCheck,
                Users,
                Headphones,
              ];

              const Icon = icons[index];

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-blue-700 py-20">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your PCB Repair Career?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Join our practical training program and develop the skills needed
            to become a professional inverter PCB repair technician.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;