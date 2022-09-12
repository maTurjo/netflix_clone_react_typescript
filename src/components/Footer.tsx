import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto my-5 md:my-0">
      <div className=" flex flex-col  items-start  text-neutral-500 w-full text-lg px-4 sm:px-10 md:px-10">
        <div className="my-3">
          <h3 className="text-start text-2xl">Questions? Contact us.</h3>
        </div>
        <div className="flex flex-wrap w-full  justify-between my-3">
          <div className="min-w-[120px] mx-1 md:mx-0">
            <ul>
              <li className="my-2">FAQ</li>
              <li className="my-2">Investor Relations</li>
              <li className="my-2">Privacy</li>
              <li className="my-2">Speed Test</li>
            </ul>
          </div>
          <div className="min-w-[120px] mx-1 md:mx-0">
            <ul>
              <li className="my-2">Help Center</li>
              <li className="my-2">Jobs</li>
              <li className="my-2">Cookie Preferences</li>
              <li className="my-2">Legal notices</li>
            </ul>
          </div>
          <div className="min-w-[120px] mx-1 md:mx-0">
            <ul>
              <li className="my-2">Account</li>
              <li className="my-2">Way To Watch</li>
              <li className="my-2">Corporate Information</li>
              <li className="my-2">Only on Netflix</li>
            </ul>
          </div>
          <div className="min-w-[120px] mx-1 md:mx-0">
            <ul>
              <li className="my-2">Media Center</li>
              <li className="my-2">Terms of Use</li>
              <li className="my-2">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <h3 className="text-2xl">Netflix Bangladesh</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
