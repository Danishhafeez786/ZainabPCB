import HybridSolarInverterRepairTraining from "../assets/images/courses/HybridSolarInverterRepairTraining.jpeg";
import InverterRepairTraining from "../assets/images/courses/InverterACPCBRepairingTraining.jpeg";

const servicesPageData = {
  hero: {
    badge: "Professional PCB Repair Services",
    title: "Advanced Inverter PCB Repair Services in Lahore",
    description:
      "Zainab PCB Repairing provides professional Hybrid Single Phase Inverter PCB Repair and Inverter AC PCB Repair using modern diagnostic equipment and component-level repair techniques.",
  },

  services: [
    {
      id: 1,
      title: "Hybrid Solar Inverter PCB Repair",
      shortDescription:
        "Professional diagnosis and component-level repair for single phase hybrid solar inverter PCBs.",
      description:
        "We diagnose and repair faults in Hybrid Single Phase Inverter PCBs using systematic testing methods and professional diagnostic equipment. Our approach focuses on finding the actual cause of the fault instead of simply replacing components.",
      image: HybridSolarInverterRepairTraining,
      features: [
        "PCB fault diagnosis",
        "Component-level troubleshooting",
        "Power section diagnosis",
        "Control circuit testing",
        "Signal and waveform testing",
        "Component replacement",
      ],
    },

    {
      id: 2,
      title: "Inverter AC PCB Repair",
      shortDescription:
        "Professional repair and diagnosis of modern Inverter AC control and power PCBs.",
      description:
        "Our Inverter AC PCB repair service focuses on accurate fault diagnosis and reliable component-level repair. We use professional testing equipment to identify damaged components and circuit faults.",
      image: InverterRepairTraining,
      features: [
        "PCB fault diagnosis",
        "Power circuit testing",
        "Control circuit troubleshooting",
        "Component-level repair",
        "SMD component replacement",
        "Professional testing",
      ],
    },
  ],

  laboratory: {
    badge: "Our Repair Laboratory",
    title: "Professional Diagnostic & Repair Equipment",
    description:
      "Our repair laboratory is equipped with modern electronic testing and repair equipment that helps us diagnose complex PCB faults accurately.",
    equipment: [
      {
        title: "Digital Oscilloscope",
        description:
          "Waveform and signal analysis for advanced circuit diagnosis.",
      },
      {
        title: "Professional Multimeter",
        description:
          "Accurate voltage, resistance, continuity, and component testing.",
      },
      {
        title: "Hot Air Rework Station",
        description:
          "Professional SMD component removal and replacement.",
      },
      {
        title: "Soldering Station",
        description:
          "Precision soldering for component-level PCB repair.",
      },
      {
        title: "Digital Microscope",
        description:
          "Detailed inspection of PCB tracks, solder joints, and components.",
      },
      {
        title: "ESR & LCR Meter",
        description:
          "Testing capacitors, inductors, resistors, and other components.",
      },
      {
        title: "DC Power Supply",
        description:
          "Controlled power testing during PCB diagnosis and repair.",
      },
      {
        title: "Thermal Fault Detection",
        description:
          "Helps identify abnormal heating and potential faulty components.",
      },
    ],
  },

  process: [
    {
      number: "01",
      title: "Initial Inspection",
      description:
        "We inspect the PCB and identify visible damage, burnt components, damaged tracks, and other abnormalities.",
    },
    {
      number: "02",
      title: "Fault Diagnosis",
      description:
        "Professional testing equipment is used to identify the actual source of the fault.",
    },
    {
      number: "03",
      title: "Component-Level Repair",
      description:
        "Faulty components are repaired or replaced using professional PCB repair techniques.",
    },
    {
      number: "04",
      title: "Testing & Verification",
      description:
        "The repaired PCB is tested carefully to verify its operation and performance.",
    },
  ],

  benefits: [
    "Root-cause fault diagnosis",
    "Component-level repair",
    "Professional diagnostic equipment",
    "Experienced repair technicians",
    "Reduced unnecessary component replacement",
    "Focus on reliable repair",
  ],
};

export default servicesPageData;