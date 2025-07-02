import BestSeller from "@/components/BestSeller";
import HeroSection from "@/components/HeroSection";
import LatestCollection from "@/components/LatestCollection";

function Home(){
  return(
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}
export default Home;