import { assets } from "@/assets/frontend_assets/assets";

function Footer(){
  return(
    <div className="bg-[#232F3E]">
      <div className="flex flex-col justify-around sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 m-40 text-sm">
        <div>
          <img loading="lazy" src={assets.logo} className="mb-5 w-32" alt="E-Commerce Logo" />
          <p className="w-full md:2/3 text-white">Subscribe to our newsletter for the latest updates</p>
        </div>
        <div>
          <p className="text-xl text-white font-medium mb-5">Company </p>
          <ul className="flex flex-col gap-1 text-[#DDD]">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

          </ul>
        </div>
        <div>
          <p className="text-xl text-white font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-[#DDD]">
            <li>+9145678456</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <div>
          <hr/>
          <p className="py-5 text-sm text-center text-white">CopyRight</p>
        </div>
    </div>
  )
}
export default Footer;