import React from "react";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LocationIcon from "./icons/LocationIcon";

const UtilityNavbar: React.FC = () => {
  return (
    <div
      className="
        main-layout 
        flex justify-between 
        bg-primary text-white 
        text-[7px] md:text-xs lg:text-lg 
        py-2
      "
    >
      <div className="flex-1 flex items-center justify-between md:justify-start md:gap-1 lg:gap-5">
        <div className="flex items-center gap-1 md:gap-3">
          <PhoneIcon className="h-2 w-2 md:h-4 md:w-4" />
          <span>+(1600) 456 7890</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <EmailIcon className="h-2 w-2 md:h-4 md:w-4" />
          <span>yourid@example.com</span>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          {/* contoh ikon alamat */}
          <LocationIcon className="h-2 w-2 md:h-4 md:w-4" />
          <span>123 Fifth Avenue, New York</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <GoogleIcon width={20} height={20} />
        <FacebookIcon width={20} height={20} />
        <TwitterIcon width={20} height={20} />
        <LinkedinIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default UtilityNavbar;
