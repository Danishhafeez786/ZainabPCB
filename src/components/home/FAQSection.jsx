import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import faqData from "../../data/faqData";

const FAQSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Find answers to the most common questions about our professional PCB repair training.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqData.map((item) => (

            <Disclosure key={item.id}>

              {({ open }) => (

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition">

                  <DisclosureButton className="flex w-full items-center justify-between px-6 py-5 text-left">

                    <span className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180 text-blue-700" : ""
                      }`}
                    />

                  </DisclosureButton>

                  <DisclosurePanel className="border-t text-sm text-left border-slate-100 px-6 pb-6 pt-4 leading-7 text-slate-600">

                    {item.answer}

                  </DisclosurePanel>

                </div>

              )}

            </Disclosure>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;