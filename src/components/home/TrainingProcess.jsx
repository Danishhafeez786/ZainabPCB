import trainingProcessData from "../../data/trainingProcessData";
import Container from "../common/Container";

const TrainingProcess = () => {
  return (
    <section className="py-24">
    <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Training Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Learn Step by Step Like a Professional Technician
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our practical learning system is designed to transform beginners
            into confident PCB repair technicians through structured,
            real-world training.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Horizontal Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-blue-100 lg:block"></div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">

            {trainingProcessData.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.id}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                >

                  {/* Step Number */}

                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white">

                    {step.id}

                  </div>

                  {/* Icon */}

                  <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">

                    <Icon size={36} />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 text-sm">
                    {step.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default TrainingProcess;