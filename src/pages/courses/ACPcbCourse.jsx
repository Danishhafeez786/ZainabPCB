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
  Cpu,
  Microscope,
} from "lucide-react";

const ACPcbCourse = () => {
  const features = [
    "Professional Inverter AC PCB Repair Training",
    "Limited Class Strength",
    "Personalized Attention",
    "Hands-On Practical Learning",
    "One-on-One Guidance",
    "Real PCB Fault Diagnosis",
    "Component-Level Repair Techniques",
    "Training with Latest Professional Tools",
    "Industry-Standard Repair Methods",
    "Practical Repair Experience",
    "Certificate of Completion",
    "Lifetime Technical Support",
  ];

  const learningPoints = [
    {
      icon: Cpu,
      title: "AC PCB Understanding",
      description:
        "Understand the important sections and electronic components used in modern inverter AC PCBs.",
    },
    {
      icon: Microscope,
      title: "Fault Diagnosis",
      description:
        "Learn professional methods for testing and identifying faults in inverter AC electronic boards.",
    },
    {
      icon: Wrench,
      title: "PCB Repair",
      description:
        "Practice component testing, replacement, soldering, and professional PCB repair techniques.",
    },
    {
      icon: Award,
      title: "Practical Confidence",
      description:
        "Gain real repair experience and confidence through hands-on practical training.",
    },
  ];

  const benefits = [
    "Personalized learning environment",
    "Individual attention from the instructor",
    "Practical work with professional equipment",
    "Real-world fault finding experience",
    "Suitable for beginners and technicians",
    "Career and technical guidance",
  ];

  return (
    <main className="overflow-hidden">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pb-28 md:pt-44">

        {/* Background Decoration */}

        <div className="absolute inset-0">

          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200">
              <GraduationCap size={17} />

              Advanced Practical Training
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Inverter AC PCB
              <span className="block text-cyan-400">
                Repair Training
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn professional Inverter AC PCB diagnosis and repair through
              hands-on practical sessions, personalized guidance, and
              industry-standard repair techniques.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="tel:03320967847"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
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

            {/* Highlights */}

            <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-bold text-cyan-400">
                  Limited
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Class Strength
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-bold text-cyan-400">
                  Practical
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Hands-On Training
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-bold text-cyan-400">
                  One-on-One
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Personal Guidance
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

          <div>

            <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              About the Course
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Professional Inverter AC PCB Repair Training
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Zainab PCB Repairing & Training provides professional Inverter AC
              PCB Repair Training for students and technicians who want to
              develop practical electronic repair skills.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our limited class strength ensures that every student receives
              personalized attention and sufficient practical experience.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The training focuses on real repair techniques, fault diagnosis,
              component testing, and professional use of modern diagnostic
              equipment.
            </p>

          </div>

          {/* Training Card */}

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl sm:p-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-slate-950">
              <Users size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Personalized Learning Experience
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              Our small batch system allows each trainee to receive individual
              guidance and gain deeper practical knowledge.
            </p>

            <div className="mt-7 space-y-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-cyan-400"
                  />

                  <span className="text-slate-200">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          WHY CHOOSE TRAINING
      ========================= */}

      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Learn Through Real Practical Experience
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our training is designed to give students the confidence needed
              to diagnose and repair modern Inverter AC PCBs professionally.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Limited Class Size",
                description:
                  "Small batches provide better interaction and individual attention.",
              },
              {
                title: "Practical Training",
                description:
                  "Students learn by working directly with electronic PCBs and components.",
              },
              {
                title: "Professional Tools",
                description:
                  "Training includes the use of industry-standard diagnostic equipment.",
              },
              {
                title: "Real Fault Diagnosis",
                description:
                  "Learn systematic methods for identifying and troubleshooting PCB faults.",
              },
              {
                title: "One-on-One Guidance",
                description:
                  "Get personal support and guidance throughout your learning journey.",
              },
              {
                title: "Technical Support",
                description:
                  "Continue receiving technical guidance after completing the training.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <CheckCircle2 size={23} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

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

            <span className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Course Learning
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
                  className="rounded-3xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
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
          FEATURES
      ========================= */}

      <section className="bg-slate-900 py-16 text-white md:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <span className="inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Training Features
              </span>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Complete Practical Learning Experience
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Our course combines technical knowledge with practical repair
                experience to help students develop professional skills.
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
                    className="mt-0.5 shrink-0 text-cyan-400"
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
          CTA
      ========================= */}

      <section className="bg-cyan-500 py-16 text-slate-950 md:py-20">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Start Learning Professional Inverter AC PCB Repair
          </h2>

          <p className="mt-6 leading-8 text-slate-800">
            Join our practical training program and develop the skills and
            confidence needed to diagnose and repair modern Inverter AC PCBs.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:03320967847"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-4 font-semibold text-white transition hover:scale-105"
            >
              <Phone size={20} />

              Call Now
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-950 px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
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

export default ACPcbCourse;