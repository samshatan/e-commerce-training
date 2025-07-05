import { assets } from "@/assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange Policy" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">No hassle free exchange</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Return Policy" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We Provide 7 days free return Policy</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Customer Support" />
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-400">24/7 Customer Support</p>
      </div>
    </div>
  );
}
export default OurPolicy;