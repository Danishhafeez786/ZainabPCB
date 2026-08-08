import { CheckCircle2, ArrowRight, Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import coursesData from "../../data/coursesData";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FadeIn from "../common/FadeIn";

const FeaturedCourses = () => {
  return (
    <section className="pb-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionHeading
            badge="Our Courses"
            title="Professional PCB Repair Training Courses"
            description="Our courses are designed to provide practical knowledge, real repair
            experience, and professional skills to help you become a successful
            PCB repair technician."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {coursesData.map((course, index) => (
            <FadeIn delay={index * 0.1}>
              <div
                key={course.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                      <Clock size={16} />

                      {course.duration}
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                      <GraduationCap size={16} />

                      {course.level}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-5 leading-7 text-xl text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-green-500" />

                        <span className="text-lg font-medium text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={course.link}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    {course.button}

                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
