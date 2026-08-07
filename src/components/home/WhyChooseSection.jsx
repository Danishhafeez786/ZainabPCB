import whyChooseData from "../../data/whyChooseData";
import Container from "../common/Container";

const WhyChooseSection = () => {
  return (
    <section className="py-24">
    <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Learn from Pakistan's Professional PCB Repair Institute
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We focus on practical learning, real customer repair experience,
            and professional diagnostic techniques to prepare you for a
            successful technical career.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {whyChooseData.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">

                  <Icon size={34} />

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

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

export default WhyChooseSection;