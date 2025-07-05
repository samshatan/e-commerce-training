import BestSeller from "@/components/BestSeller";
import HeroSection from "@/components/HeroSection";
import LatestCollection from "@/components/LatestCollection";
import NewsLetterBox from "@/components/NewsLetterBox";
import OurPolicy from "@/components/OurPolicy";

function Home(){
  return(
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}
export default Home;