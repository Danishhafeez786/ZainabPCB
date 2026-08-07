import Trainer from "./../assets/images/hero/trainer.png";
import Workshop from "./../assets/images/hero/workshop.jpg";

const heroData = {
  badge: "Pakistan's Leading PCB Repair Training Institute",

  title: {
    line1: "Become a Professional",
    line2: "Hybrid Inverter",
    line3: "& Inverter AC PCB",
    line4: "Repair Technician",
  },

  description:
    "Learn Hybrid Single Phase Inverter Repair and Inverter AC PCB Repair through practical hands-on training using real customer PCBs, advanced diagnostic equipment, and industry-standard repair techniques. Build the confidence to start your own repair business or grow your technical career.",

  buttons: {
    primary: {
      text: "Enroll Now",
      link: "/contact",
    },
    secondary: {
      text: "Call Now",
      link: "tel:03320967847",
    },
  },

  features: [
    {
      title: "90% Practical Training",
      icon: "practical",
    },
    {
      title: "Live PCB Repair",
      icon: "repair",
    },
    {
      title: "Certificate Included",
      icon: "certificate",
    },
    {
      title: "Lifetime Technical Support",
      icon: "support",
    },
    {
      title: "Component Level PCB Repair",
      icon: "pcb",
    },
    {
      title: "Business Setup Guidance",
      icon: "business",
    },
  ],

  statistics: [
    {
      value: "500+",
      label: "Students Trained",
    },
    {
      value: "1000+",
      label: "PCB Repairs",
    },
    {
      value: "90%",
      label: "Practical Learning",
    },
    {
      value: "24/7",
      label: "Technical Support",
    },
  ],

  highlights: [
    "Hybrid Single Phase Inverter Repair",
    "Inverter AC PCB Repair",
    "Oscilloscope Training",
    "Real Customer Fault Diagnosis",
    "Professional Repair Lab",
  ],

  image: {
    trainer: Trainer,
    workshop: Workshop,
    alt: "Zainab PCB Repairing & Training",
  },

  experience: {
    title: "Professional Practical Training",
    subtitle: "Learn with Real Customer PCBs",
  },

  contact: {
    phone: "0332-0967847",
    whatsapp: "923320967847",
    location: "Lahore, Pakistan",
  },
};

export default heroData;