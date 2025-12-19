"use client";

import { HeroCard } from "@/components/home/HeroCard";
import TopCategories from "@/components/home/TopCategories";
import { FeatureCard } from "@/components/home/FeatureCard";
import { jobs } from "@/data/jobs";
import JobCategories from "@/components/home/JobCategories";
import HomeCTA from "@/components/home/HomeCTA";
import FeaturedJobs from "@/components/featured/FeaturedJobs";
import Testimonials from "@/components/testimonials/Testimonials";
import BlogSection from "@/components/blogs/BlogSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <>
      <HeroCard />
      <TopCategories />
      {/* <FeatureCard jobs={featuredJobs} /> */}
      <JobCategories />
      <HomeCTA />
      <FeaturedJobs/>
      <Testimonials/>
      <BlogSection/>
      <Footer/>
    </>
  );
}
