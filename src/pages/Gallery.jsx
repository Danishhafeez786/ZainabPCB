import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Images, Play } from "lucide-react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import galleryPageData from "../data/galleryPageData";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryPageData.images
      : galleryPageData.images.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24 md:py-32">

        {/* Decorative Background */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              <Images size={17} />

              {galleryPageData.hero.badge}

            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

              {galleryPageData.hero.title}

            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              {galleryPageData.hero.description}

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Training & Repair Environment

          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">

            See Our Practical Work in Action

          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">

            Every image represents our commitment to practical technical
            education, professional PCB repair, and hands-on learning.

          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="bg-slate-50 pb-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap justify-center gap-3">

            {galleryPageData.categories.map((category) => (

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
          GALLERY
      ===================================================== */}

      <section className="bg-slate-50 pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <PhotoProvider
            speed={() => 400}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {console.log(filteredImages)}
              {filteredImages.map((item, index) => (

                <PhotoView
                  key={item.id}
                  src={item.image}
                >

                  <article
                    className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      index === 0
                        ? "lg:col-span-2 lg:row-span-2"
                        : ""
                    }`}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                        index === 0
                          ? "h-130"
                          : "h-80"
                      }`}
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

                    {/* Category */}

                    <div className="absolute left-5 top-5">

                      <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur">

                        {item.category}

                      </span>

                    </div>

                    {/* Center Icon */}

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-700 shadow-2xl">

                        <Images size={27} />

                      </div>

                    </div>

                    {/* Bottom Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-xl font-bold text-white">

                        {item.title}

                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-200">

                        <Play size={15} fill="currentColor" />

                        Click to view image

                      </p>

                    </div>

                  </article>

                </PhotoView>

              ))}

            </div>

          </PhotoProvider>


          {/* No Images */}

          {filteredImages.length === 0 && (

            <div className="py-20 text-center">

              <Images
                size={50}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-700">

                No images found

              </h3>

              <p className="mt-2 text-slate-500">

                Please select another gallery category.

              </p>

            </div>

          )}

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

            Want to Learn Professional PCB Repair?

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">

            Explore our practical Hybrid Inverter and Inverter AC PCB repair
            training programs.

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

export default Gallery;