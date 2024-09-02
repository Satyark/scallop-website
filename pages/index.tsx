import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedIn from "@/components/FeaturedIn";
import WhyScallop from "@/components/WhyScallop";
import KeyFeature from "@/components/KeyFeature";
import ScallopEarn from "@/components/ScallopEarn";
import ScallopNFT from "@/components/ScallopNFT";
import ScallopExchange from "@/components/ScallopExchange";
import ScallopCoin from "@/components/ScallopCoin";
import ScallopAccount from "@/components/ScallopAccount";
import ScallopCards from "@/components/ScallopCards";
import ScallopPayments from "@/components/ScallopPayments";
import ScallopHardware from "@/components/ScallopHardware";
import ScallopGuarantee from "@/components/ScallopGuarantee";
import ScallopChain from "@/components/ScallopChain";
import GlobalAccount from "@/components/GlobalAccount";
import RoadMap from "@/components/RoadMap";
import Team from "@/components/Team";
import Exchanges from "@/components/Exchanges";
import BackedBy from "@/components/BackedBy";
import FAQs from "@/components/FAQs";
import Footer1 from "@/components/Footer1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="relative bg-[#FFFFFF] flex justify-center items-center flex-col overflow-hidden mx-auto"
    >
      <Navbar/>
      <Hero />
      {/* Carousel */}
      <FeaturedIn/>
      <WhyScallop/>
      <KeyFeature/>
      <ScallopEarn/>
      <ScallopNFT/>
      <ScallopExchange/>
      <ScallopCoin/>
      <ScallopAccount/>
      <ScallopCards />
      <ScallopPayments/>
      <ScallopHardware/>
      <ScallopGuarantee/>
      <ScallopChain/>
      <GlobalAccount/>
      <RoadMap/>
      <Team/>
      <Exchanges/>
      <BackedBy />
      <FAQs/>
      <Footer1/>
    </main>
  );
}
