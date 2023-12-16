import React from "react";
import Hero from "../components/Hero";
import Saving from "../components/Saving";
import PlanYourTrip from "../components/PlanYourTrip";
import Chooseus from "../components/Chooseus";
import ClientTestimonials from "../components/ClientTestimonials";
import DownloadSection from "../components/DownloadSection";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <PlanYourTrip/>
      <Saving/>
      <Chooseus/>
      <ClientTestimonials/>
      <Faq/>
      <DownloadSection />
    </div>
  );
};

export default Home;
