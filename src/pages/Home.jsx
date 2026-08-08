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
import FadeIn from "../components/common/FadeIn";

export default function Home() {
  return (
    <div className="pb-20 text-center text-4xl font-bold">
      <FadeIn delay={0.1}>
      <FeaturedCourses />
      </FadeIn>
      <FadeIn delay={0.1}>        
      <GalleryPreview />
      </FadeIn>
      <FadeIn delay={0.1}>
      <HeroSection />
      </FadeIn>
      <FadeIn delay={0.1}>
      <StatisticsSection />
      </FadeIn>
      <FadeIn delay={0.1}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={0.1}>
      <WhyChooseSection />
      </FadeIn>
      <FadeIn delay={0.1}>
      <TrainingProcess />
      </FadeIn>
      <FadeIn delay={0.1}>
      <RepairServices />
      </FadeIn>
      <FadeIn delay={0.1}>
      <StudentFeedback />
      </FadeIn>
      <FadeIn delay={0.1}>
      <FAQSection />
      </FadeIn>
      <FadeIn delay={0.1}>
      <CTASection />
      </FadeIn>
    </div>
  );
}
