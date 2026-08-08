import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

import contactPageData from "../data/contactPageData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Zainab PCB Repairing & Training,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/923320967847?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              <MessageCircle size={17} />

              {contactPageData.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {contactPageData.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {contactPageData.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:03320967847"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                <Phone size={18} />

                Call 0332-0967847
              </a>

              <a
                href="https://wa.me/923320967847"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/50 bg-green-500/10 px-7 py-4 font-semibold text-green-300 transition hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}

      <section className="bg-slate-50 py-16 md:py-20">

        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

          {contactPageData.contactInfo.map((item) => {

            const icons = {
              Phone,
              WhatsApp: MessageCircle,
              Location: MapPin,
              Training: GraduationCap,
            };

            const Icon = icons[item.type] || MessageCircle;

            const isExternal =
              item.href.startsWith("http");

            return (
              <a
                key={item.id}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">

                  <Icon size={23} />

                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-blue-700">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

              </a>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section
        id="contact-form"
        className="bg-white py-20 md:py-24"
      >

        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">

          {/* LEFT */}

          <div className="lg:col-span-2">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Contact Us
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Let&apos;s Talk About Your Training or Repair Requirement
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you want to join our practical training program or need
              professional PCB repair, send us your details and we&apos;ll
              help you with your enquiry.
            </p>


            {/* Quick Points */}

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">

                <CheckCircle2
                  className="mt-1 shrink-0 text-green-500"
                  size={21}
                />

                <p className="text-slate-700">
                  Practical inverter PCB repair training
                </p>

              </div>

              <div className="flex gap-3">

                <CheckCircle2
                  className="mt-1 shrink-0 text-green-500"
                  size={21}
                />

                <p className="text-slate-700">
                  Hybrid Single Phase Inverter PCB repair
                </p>

              </div>

              <div className="flex gap-3">

                <CheckCircle2
                  className="mt-1 shrink-0 text-green-500"
                  size={21}
                />

                <p className="text-slate-700">
                  Inverter AC PCB repair and training
                </p>

              </div>

              <div className="flex gap-3">

                <CheckCircle2
                  className="mt-1 shrink-0 text-green-500"
                  size={21}
                />

                <p className="text-slate-700">
                  Technical guidance for students
                </p>

              </div>

            </div>


            {/* Phone Card */}

            <div className="mt-10 rounded-2xl bg-slate-950 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Phone size={22} />
                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Call us directly
                  </p>

                  <a
                    href="tel:03320967847"
                    className="mt-1 block text-xl font-bold text-white hover:text-blue-300"
                  >
                    0332-0967847
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

              <div className="mb-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the form below. Your enquiry will open in WhatsApp
                  so you can contact us directly.
                </p>

              </div>


              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">

                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-600"
                    size={20}
                  />

                  <div>

                    <p className="font-semibold text-green-800">
                      Your enquiry is ready!
                    </p>

                    <p className="mt-1 text-sm text-green-700">
                      WhatsApp has been opened with your message.
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="ml-auto text-green-700"
                    aria-label="Close notification"
                  >
                    <X size={18} />
                  </button>

                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Phone */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX-XXXXXXX"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>


                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>


                {/* Subject */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Enquiry Type
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  >

                    <option value="">
                      Select enquiry type
                    </option>

                    {contactPageData.subjects.map((subject) => (
                      <option
                        key={subject}
                        value={subject}
                      >
                        {subject}
                      </option>
                    ))}

                  </select>

                </div>


                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                >

                  <Send size={18} />

                  Send Enquiry on WhatsApp

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING COURSES
      ===================================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Training Enquiries
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Interested in Learning PCB Repair?
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Contact us about our practical inverter repair training programs.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {contactPageData.courses.map((course, index) => (

              <div
                key={course}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">

                    {index === 0 ? (
                      <Wrench size={25} />
                    ) : (
                      <GraduationCap size={25} />
                    )}

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {course}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Contact us to learn more about practical training,
                      course details, and admission information.
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKING HOURS + LOCATION
      ===================================================== */}

      <section
        id="location"
        className="bg-white py-20"
      >

        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Hours */}

          <div className="rounded-3xl bg-slate-950 p-8 md:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Clock3 size={27} />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-white">
              Contact & Visit Information
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              Please contact us before visiting so we can provide the latest
              schedule and location details.
            </p>


            <div className="mt-8 space-y-4">

              {contactPageData.workingHours.map((item) => (

                <div
                  key={item.day}
                  className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0"
                >

                  <span className="font-medium text-slate-300">
                    {item.day}
                  </span>

                  <span className="text-sm text-blue-300">
                    {item.time}
                  </span>

                </div>

              ))}

            </div>


            <a
              href="tel:03320967847"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-blue-300"
            >
              <Phone size={18} />

              0332-0967847

            </a>

          </div>


          {/* Location */}

          <div className="relative overflow-hidden rounded-3xl bg-slate-100">

            <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

                <MapPin size={30} />

              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Zainab PCB Repairing & Training
              </h2>

              <p className="mt-3 text-lg font-semibold text-blue-700">
                Lahore, Pakistan
              </p>

              <p className="mt-4 max-w-md leading-7 text-slate-600">
                Contact us directly for the exact training location and
                appointment details.
              </p>

              <a
                href="tel:03320967847"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800"
              >
                <Phone size={18} />

                Get Location Details

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-blue-700 py-20">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">

            <ShieldCheck size={31} />

          </div>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Have Questions? We&apos;re Here to Help.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Call or WhatsApp us today for information about training,
            admissions, or PCB repair services.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:03320967847"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <Phone size={18} />

              Call Now

            </a>

            <a
              href="https://wa.me/923320967847"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >

              <MessageCircle size={18} />

              WhatsApp

            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;