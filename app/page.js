import AboutUs from "@/components/about";
import HappyClients from "@/components/clients";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HappyClients/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
