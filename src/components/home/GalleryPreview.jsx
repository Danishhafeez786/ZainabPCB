import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import galleryData from "../../data/galleryData";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const GalleryPreview = () => {
  return (
    <section className="py-24">
    <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <SectionHeading
            badge="Gallery"
            title=" Explore Our Training & Repair Laboratory"
            description=" See our practical training sessions, repair laboratory,
            professional equipment, and successful students."
          />

        </div>

        {/* Gallery Grid */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Large Image */}

          <div className="overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2">

            <img
              src={galleryData[0].image}
              alt={galleryData[0].title}
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />

          </div>

          {/* Remaining Images */}

          {galleryData.slice(1).map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14 text-center">

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >

            View Complete Gallery

            <ArrowRight size={18} />

          </Link>

        </div>

      </Container>
    </section>
  );
};

export default GalleryPreview;