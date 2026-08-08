import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  MessageSquareQuote,
  Play,
  X,
  Users,
  Star,
} from "lucide-react";

import feedbackPageData from "../data/feedbackPageData";

const Feedback = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos =
    activeCategory === "All"
      ? feedbackPageData.videos
      : feedbackPageData.videos.filter(
          (video) => video.category === activeCategory
        );

  useEffect(() => {
    if (!selectedVideo) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo]);

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
              <MessageSquareQuote size={17} />

              {feedbackPageData.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {feedbackPageData.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {feedbackPageData.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
                <Users className="text-blue-400" size={20} />

                <span className="text-sm font-medium text-slate-300">
                  Student Experiences
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
                <Globe2 className="text-cyan-400" size={20} />

                <span className="text-sm font-medium text-slate-300">
                  Local & International
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Students Are Our Greatest Achievement
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            What Our Students Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our students share their experiences after completing practical
            inverter PCB repair training. Their feedback reflects the
            hands-on learning environment and technical skills developed
            during training.
          </p>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <MessageSquareQuote size={23} />
            </div>

            <div className="mt-4 text-3xl font-black text-slate-900">
              {feedbackPageData.videos.length}+
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Student Feedback Videos
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <Globe2 size={23} />
            </div>

            <div className="mt-4 text-3xl font-black text-slate-900">
              3+
            </div>

            <p className="mt-1 text-sm text-slate-500">
              International Locations
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <Star size={23} />
            </div>

            <div className="mt-4 text-3xl font-black text-slate-900">
              Practical
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Hands-on Training Approach
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="bg-slate-50 pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {feedbackPageData.categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-slate-600 shadow-sm hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO GRID
      ===================================================== */}

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Student Experiences
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {activeCategory === "All"
                  ? "All Student Feedback"
                  : activeCategory}
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {filteredVideos.length} feedback videos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Thumbnail */}

                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="relative block aspect-video w-full overflow-hidden bg-slate-900 text-left"
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/40" />

                  {/* Play */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-700 shadow-2xl transition duration-300 group-hover:scale-110">
                      <Play
                        size={25}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </span>
                  </div>

                  {/* Country */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {video.country}
                    </span>
                  </div>
                </button>

                {/* Content */}

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {video.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-7 text-slate-900">
                    {video.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
                  >
                    Watch Feedback
                    <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNATIONAL SECTION
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Globe2 size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Students From Around the World
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Our student feedback includes experiences from learners outside
            Pakistan, showing the reach of practical inverter PCB repair
            training beyond local students.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Sri Lanka", "Nigeria", "Saudi Arabia"].map((country) => (
              <span
                key={country}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                {country}
              </span>
            ))}
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
            Ready to Build Your PCB Repair Skills?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Learn practical Hybrid Inverter and Inverter AC PCB repair
            techniques with hands-on training.
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

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Student feedback video"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute -right-1 -top-14 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:bg-slate-200 sm:-right-12 sm:top-0"
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            {/* Video */}

            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Modal Info */}

            <div className="mt-4">
              <p className="text-sm font-semibold text-blue-300">
                {selectedVideo.country}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Feedback;