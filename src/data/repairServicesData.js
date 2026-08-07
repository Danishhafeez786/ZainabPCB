import {
  Cpu,
  Wrench,
  Microscope,
  MonitorCog,
  Gauge,
  ShieldCheck,
  Hammer,
  CircuitBoard,
} from "lucide-react";

const repairServicesData = {
  badge: "Professional PCB Repair Services",

  title: "Advanced PCB Repair with Modern Diagnostic Equipment",

  description:
    "We specialize in Hybrid Single Phase Inverter PCB Repair and Inverter AC PCB Repair using advanced testing equipment and professional repair techniques. Our goal is accurate fault diagnosis and long-lasting repairs rather than unnecessary component replacement.",

  services: [
    "Hybrid Single Phase Inverter PCB Repair",
    "Inverter AC PCB Repair",
    "Component Level PCB Repair",
    "Waveform Analysis",
    "Fault Diagnosis",
    "Thermal Fault Detection",
  ],

  equipment: [
    {
      title: "Digital Oscilloscope",
      icon: MonitorCog,
    },
    {
      title: "Digital Microscope",
      icon: Microscope,
    },
    {
      title: "Hot Air Rework Station",
      icon: Hammer,
    },
    {
      title: "Precision Soldering Station",
      icon: Wrench,
    },
    {
      title: "LCR & ESR Meter",
      icon: Gauge,
    },
    {
      title: "Programmable DC Power Supply",
      icon: Cpu,
    },
    {
      title: "Circuit Analysis",
      icon: CircuitBoard,
    },
    {
      title: "Reliable Repair",
      icon: ShieldCheck,
    },
  ],
};

export default repairServicesData;