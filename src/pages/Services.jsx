import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Microscope,
  Wrench,
  Search,
  Settings,
  TestTube2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import HybridSolarInverterRepairTraining from "../assets/images/courses/HybridSolarInverterRepairTraining.jpeg";
import InverterRepairTraining from "../assets/images/courses/InverterACPCBRepairingTraining.jpeg";

import { Link } from "react-router-dom";
import servicesPageData from "../data/servicesPageData";

const Services = () => {
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
              {servicesPageData.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {servicesPageData.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {servicesPageData.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:03320967847"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Contact for Repair
                <ArrowRight size={18} />
              </a>

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
          INTRO
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Repair Services
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Accurate Diagnosis. Professional Repair.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We specialize in professional inverter PCB repair with a focus on
            identifying the root cause of faults. Our repair process combines
            technical experience, systematic testing, and modern diagnostic
            equipment.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-slate-50 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              What We Repair
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Specialized PCB Repair Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Professional repair solutions for modern inverter electronics.
            </p>

          </div>


          <div className="grid gap-10 lg:grid-cols-2">

            {servicesPageData.services.map((service) => (

              <article
                key={service.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg">
                    <CircuitBoard size={24} />
                  </div>

                </div>


                {/* Content */}

                <div className="p-7 md:p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>


                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    {service.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={19}
                          className="mt-1 shrink-0 text-green-500"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>


                  <a
                    href="tel:03320967847"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-3"
                  >
                    Discuss Your Repair
                    <ArrowRight size={18} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LABORATORY
      ===================================================== */}

      <section className="bg-slate-950 py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              {servicesPageData.laboratory.badge}
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              {servicesPageData.laboratory.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              {servicesPageData.laboratory.description}
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {servicesPageData.laboratory.equipment.map(
              (equipment, index) => {

                const icons = [
                  Microscope,
                  Zap,
                  Wrench,
                  Settings,
                  Microscope,
                  TestTube2,
                  Zap,
                  ShieldCheck,
                ];

                const Icon = icons[index];

                return (
                  <div
                    key={equipment.title}
                    className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">

                      <Icon size={26} />

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {equipment.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {equipment.description}
                    </p>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          REPAIR PROCESS
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Our Process
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              How Our PCB Repair Process Works
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We follow a systematic process to identify faults and perform
              reliable PCB repairs.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {servicesPageData.process.map((step, index) => {

              const icons = [
                Search,
                Settings,
                Wrench,
                TestTube2,
              ];

              const Icon = icons[index];

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={25} />
                    </div>

                    <span className="text-4xl font-black text-blue-100">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-slate-50 py-20 md:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Why Choose Our Repair Service
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              We Diagnose the Problem Before Replacing Components
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our objective is to identify the actual source of a PCB fault.
              Professional testing allows us to reduce unnecessary component
              replacement and approach repairs systematically.
            </p>

            <div className="mt-8 space-y-4">

              {servicesPageData.benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-green-500"
                  />

                  <span className="font-medium text-slate-700">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src={HybridSolarInverterRepairTraining}
                alt="PCB repair laboratory"
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />

            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <ShieldCheck size={25} />
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    Professional Repair Approach
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Systematic testing and component-level troubleshooting.
                  </p>

                </div>

              </div>

            </div>

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
            Need Professional PCB Repair?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Contact Zainab PCB Repairing to discuss your Hybrid Inverter or
            Inverter AC PCB repair requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:03320967847"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Call 0332-0967847
              <ArrowRight size={18} />
            </a>

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

export default Services;