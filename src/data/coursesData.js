import HybridInverter from "../assets/images/courses/HybridSolarInverterRepairTraining.jpeg";
import acCourse from "../assets/images/courses/InverterACPCBRepairingTraining.jpeg";

const coursesData = [
  {
    id: 1,
    title: "Hybrid Single Phase Inverter Repair Training",

    image: HybridInverter,

    duration: "Professional Course",

    level: "Beginner to Advanced",

    description:
      "Learn complete Hybrid Single Phase Inverter PCB Repair with practical hands-on training, real customer fault diagnosis, oscilloscope testing, and component-level PCB repairing.",

    features: [
      "90% Practical Training",
      "Live Customer PCB Repair",
      "Oscilloscope Training",
      "Certificate Included",
    ],

    button: "View Course",

    link: "/courses/hybrid-inverter",
  },

  {
    id: 2,

    title: "Inverter AC PCB Repair Training",

    image: acCourse,

    duration: "Professional Course",

    level: "Beginner to Advanced",

    description:
      "Master Inverter AC PCB Repair using modern diagnostic equipment, real PCB fault finding, SMD component replacement, and professional repair techniques.",

    features: [
      "Small Batch Training",
      "Real PCB Repair",
      "Latest Equipment",
      "Lifetime Support",
    ],

    button: "View Course",

    link: "/courses/inverter-ac",
  },
];

export default coursesData;