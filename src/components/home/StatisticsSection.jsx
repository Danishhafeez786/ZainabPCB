import AnimatedCounter from "../AnimatedCounter";
import { Users, Cpu, Wrench, Headphones } from "lucide-react";
import statisticsData from "../../data/statisticsData";
import Container from "../common/Container";

const icons = {
  1: Users,
  2: Cpu,
  3: Wrench,
  4: Headphones,
};

const StatisticsSection = () => {
  return (
    <section className="py-24">
    <Container>
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Trusted by Hundreds of Students
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Our Achievements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We provide practical inverter repair training with real customer
            repair experience and professional laboratory equipment.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {statisticsData.map((item) => {
            const Icon = icons[item.id];

            return (
              <div
                key={item.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-5xl font-bold text-blue-700">
                  <AnimatedCounter end={item.number} suffix={item.suffix} />
                </h3>

                <h4 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
