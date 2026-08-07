import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import FeaturedCourses from "../components/home/FeaturedCourses";
import TrainingProcess from "../components/home/TrainingProcess";
import RepairServices from "../components/home/RepairServices";
import GalleryPreview from "../components/home/GalleryPreview";
import StudentFeedback from "../components/home/StudentFeedback";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div className="pb-20 text-center text-4xl font-bold">
      <FeaturedCourses />
      <GalleryPreview />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <WhyChooseSection />
      <TrainingProcess />
      <RepairServices />
      <StudentFeedback />
      <FAQSection />
      <CTASection />
    </div>
  );
}
