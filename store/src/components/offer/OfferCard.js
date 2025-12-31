import React from "react";

//internal import
import Coupon from "@components/coupon/Coupon";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const OfferCard = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <div className="w-full group">
      <div className="bg-black h-full border-2 border-[#D9AA34] transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
        <div className="bg-[#D9AA34] text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
          <h3 className="text-base font-serif font-medium ">
            {showingTranslateValue(
              storeCustomizationSetting?.home?.discount_title
            )}
          </h3>
        </div>
        <div className="overflow-hidden">
          <Coupon couponInHome />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
