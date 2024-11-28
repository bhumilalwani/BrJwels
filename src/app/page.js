import Image from "next/image";
import StaticNav from "./components/StaticNav";
import DynamicNav from "./components/DynamicNav";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Birthdays from "./components/Birthdays";



export default function Home() {
  return (
   <div className="">
        <StaticNav></StaticNav>
        <DynamicNav></DynamicNav>
        <HeroSection></HeroSection>
        <HeroSection2></HeroSection2>
        <Birthdays></Birthdays>
   </div>
  );
}
