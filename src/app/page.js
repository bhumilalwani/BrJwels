
import StaticNav from "./components/StaticNav";
import DynamicNav from "./components/DynamicNav";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Birthdays from "./components/Birthdays";
import MostLoved from "./components/MostLoved";
import Collections from "./components/Collections";
import FeaturedIn from "./components/FeaturedIn";
import LeftRightSec from "./components/LeftRightSec";
import BottomSign from "./components/BottomSign";
import Awards from "./components/Awards";
import LastFooter from "./components/LastFooter";
import FooterLastestStrip from "./components/FooterLastestStrip";
import ReasonsToShop from "./components/ReasonsToShop";
import Gifts from "./components/Gifts";
import CustomerReview from "./components/CustomerReview";
import Edit from "./components/Edit";
import Login from "./components/Login";


export default function Home() {
  return (
   <div className="overflow-x-hidden">
        <StaticNav></StaticNav>
        <DynamicNav></DynamicNav>
        <HeroSection></HeroSection>
        <HeroSection2></HeroSection2>
        <Birthdays></Birthdays>
        <Gifts></Gifts>
        <MostLoved></MostLoved>
        <Collections></Collections>
        <FeaturedIn></FeaturedIn>
        <LeftRightSec></LeftRightSec>
        {/* keep up with br */}
        <ReasonsToShop></ReasonsToShop>
        <Edit></Edit>
        <CustomerReview></CustomerReview>
        <BottomSign></BottomSign>
        <div className="sm:h-[10vh] h-[2vh]"></div>
        <Awards></Awards>
        <LastFooter></LastFooter>
        <FooterLastestStrip></FooterLastestStrip>
        
   </div>
  );
}
