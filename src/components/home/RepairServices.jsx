import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import repairServicesData from "../../data/repairServicesData";
import RepairLabImage from "../../assets/images/services/repair-lab.png";
import Container from "../common/Container";

const RepairServices = () => {
  return (
    <section className="py-24">
    <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            {repairServicesData.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            {repairServicesData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {repairServicesData.description}
          </p>

        </div>

        {/* Main Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <img
              src={RepairLabImage}
              alt="Repair Lab"
              className="rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">

              <h3 className="text-3xl font-bold text-blue-700">
                Professional
              </h3>

              <p className="text-slate-600">
                PCB Repair Laboratory
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Our Repair Services
            </h3>

            <div className="mt-8 space-y-5">

              {repairServicesData.services.map((service, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <span className="text-lg">
                    {service}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Contact For Repair
              </a>

              <a
                href="tel:03320967847"
                className="flex items-center gap-2 rounded-xl border border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <Phone size={18} />

                Call Now
              </a>

            </div>

          </div>

        </div>

        {/* Equipment */}

        <div className="mt-24">

          <div className="mb-12 text-center">

            <h3 className="text-3xl font-bold text-slate-900">
              Modern Repair Equipment
            </h3>

            <p className="mt-4 text-slate-600 text-3xl">
              We use professional electronic diagnostic tools for accurate
              PCB repair.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {repairServicesData.equipment.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">

                    <Icon size={30} />

                  </div>

                  <h4 className="font-semibold text-sm text-slate-800">
                    {item.title}
                  </h4>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default RepairServices;