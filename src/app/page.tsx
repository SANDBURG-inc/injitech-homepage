import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import MainBusiness from "@/components/MainBusiness";
import OurClients from "@/components/OurClients";
import UseCases from "@/components/UseCases";
import Results from "@/components/Results";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompanyIntro />
      <MainBusiness />
      <OurClients />
      <UseCases />
      <Results />
      <Inquiry />
      <Footer />
    </main>
  );
}
