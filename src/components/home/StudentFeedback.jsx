import { Link } from "react-router-dom";
import { Play, ArrowRight, Star } from "lucide-react";
import studentFeedbackData from "../../data/studentFeedbackData";
import Container from "../common/Container";

const StudentFeedback = () => {
  return (
    <section className="py-24">
    <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Student Feedback
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Real Students, Real Success Stories
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hear directly from our students about their learning experience,
            practical training, and career growth after joining
            Zainab PCB Repairing & Training.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {studentFeedbackData.map((item) => (

            <a
              key={item.id}
              href={item.video}
              target={item.video.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative">

                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-red-600 transition group-hover:scale-110">

                    <Play
                      fill="currentColor"
                      size={36}
                    />

                  </div>

                </div>

              </div>

              <div className="p-6">

                <div className="mb-3 flex">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={18}
                      fill="gold"
                      color="gold"
                    />

                  ))}

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.country}
                </p>

              </div>

            </a>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14 text-center">

          <Link
            to="/student-feedback"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >

            View All Student Feedback

            <ArrowRight size={18} />

          </Link>

        </div>

      </Container>
    </section>
  );
};

export default StudentFeedback;