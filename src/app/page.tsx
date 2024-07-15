import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MacbookScroll from "@/components/macbookScroll";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer"
import Globe from "@/components/Globe";

export default function Home(){
  return(
    <main className="h-auto bg-black/[0.96] antialiased overflow-hidden">
      <HeroSection/>
      <Globe/>
      <FeaturedCourses/>
      <MacbookScroll/>
      <TestimonialCard/>
      <Instructors/>
      <Footer/>
    </main>
  )
}