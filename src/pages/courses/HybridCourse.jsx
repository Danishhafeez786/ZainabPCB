import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Award,
  Wrench,
  GraduationCap,
  Users,
  Zap,
  MonitorCog,
} from "lucide-react";

const HybridCourse = () => {
  const features = [
    "70% Hands-On Practical Training",
    "Live Repair of Customer Inverters",
    "Component-Level PCB Repair",
    "Step-by-Step Fault Finding Techniques",
    "Training with Professional Test Equipment",
    "Oscilloscope-Based Signal Analysis",
    "Daily Practical Exercises",
    "Small Batches for Individual Attention",
    "Beginner to Advanced Learning Path",
    "Certificate of Completion",
    "Lifetime Technical Support",
    "Business Setup Guidance",
  ];

  const opportunities = [
    "Solar Companies",
    "Inverter Service Centers",
    "Electronics Workshops",
    "Renewable Energy Businesses",
    "Industrial Maintenance Teams",
    "Freelance Repair Services",
  ];

  const learningPoints = [
    {
      icon: Zap,
      title: "Basic Electronics",
      description:
        "Understand electronic components, circuits, voltage, current, and the fundamentals required for professional PCB repair.",
    },
    {
      icon: MonitorCog,
      title: "PCB Diagnosis",
      description:
        "Learn systematic fault diagnosis techniques for identifying problems in hybrid inverter PCBs.",
    },
    {
      icon: Wrench,
      title: "Component-Level Repair",
      description:
        "Develop practical skills for testing, removing, replacing, and repairing electronic components.",
    },
    {
      icon: Award,
      title: "Professional Skills",
      description:
        "Gain confidence through practical work on real inverter boards and customer fault cases.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        {/* Background Decoration */}

        <div className="absolute inset-0">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-700/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200">
              <GraduationCap size={17} />

              Professional Technical Training
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hybrid Single Phase
              <span className="block text-blue-400">
                Inverter Repair Training
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Build your career as a professional Hybrid Inverter Repair
              Technician with practical, hands-on training on real inverter
              PCBs and professional diagnostic equipment.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:03320967847"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-500"
              >
                <Phone size={20} />

                Call to Enroll
              </a>

              <a
                href="https://wa.me/923320967847"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-950"
              >
                <MessageCircle size={20} />

                WhatsApp Us
              </a>
            </div>

            {/* Quick Stats */}

            <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-2xl font-bold text-blue-400">
                  70%
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Practical Training
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-2xl font-bold text-blue-400">
                  Live
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  PCB Repair Practice
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-2xl font-bold text-blue-400">
                  Lifetime
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Technical Support
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          ABOUT COURSE
      ========================= */}

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

          {/* Left */}

          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About the Course
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Become a Professional Hybrid Inverter Repair Technician
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Are you searching for professional Hybrid Single Phase Inverter
              Repair Training in Lahore, Pakistan?
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Zainab PCB Repairing & Training offers a practical and advanced
              training program designed to help students, electricians,
              engineers, solar technicians, and workshop owners understand the
              complete repair process of modern hybrid solar inverters.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our mission is simple: turn beginners into confident and skilled
              repair technicians through real-world practical training.
            </p>
          </div>

          {/* Right Card */}

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
              <GraduationCap size={32} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Who Can Join This Course?
            </h3>

            <div className="mt-7 space-y-4">

              {[
                "Complete Beginners",
                "Electricians",
                "Engineers",
                "Solar Technicians",
                "Electronics Technicians",
                "Workshop Owners",
                "Anyone Interested in PCB Repair",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="text-slate-200">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          WHY LEARN
      ========================= */}

      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Career Opportunity
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Learn Hybrid Inverter Repair?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Pakistan's solar industry continues to grow, increasing the need
              for skilled technicians who can diagnose and repair modern hybrid
              inverter systems.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {opportunities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Users className="mx-auto text-blue-600" />

                <h3 className="mt-4 font-semibold text-slate-800">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          WHAT YOU WILL LEARN
      ========================= */}

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Learning Experience
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              What You Will Learn
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {learningPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================
          COURSE FEATURES
      ========================= */}

      <section className="bg-slate-900 py-16 text-white md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            <div>
              <span className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
                Practical Training
              </span>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                What Makes Our Training Different?
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We focus on practical experience instead of only classroom
                theory. Students work with real PCB faults and professional
                diagnostic equipment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <span className="text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="bg-blue-700 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Start Your Journey as a Professional Inverter Repair Technician
          </h2>

          <p className="mt-6 leading-8 text-blue-100">
            Gain practical skills, real repair experience, and the confidence
            to build your technical career or start your own repair business.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:03320967847"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              <Phone size={20} />

              Call Now
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Contact Us

              <ArrowRight size={19} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default HybridCourse;