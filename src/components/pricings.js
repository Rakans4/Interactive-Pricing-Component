import React from "react";
import { useState, useEffect } from "react";
import {
  Switch,
  Divider,
} from "@chakra-ui/react";

function Pricings() {
  const [pricings] = useState([
    {
      pageViews: "10K",
      price: 8,
    },
    {
      pageViews: "50K",
      price: 12,
    },
    {
      pageViews: "100K",
      price: 16,
    },
    {
      pageViews: "500K",
      price: 24,
    },
    {
      pageViews: "1M",
      price: 36,
    },
  ]);
  const [billingTerm, setBillingTerm] = useState("monthly");
  const [selectedPricing, setSelectedPricing] = useState({
    pageViews: "100K",
    price: 16,
    range: 3
  });

  const [pricingDisplay, setPricingDisplay] = useState(
    `${
      billingTerm === "yearly"
        ? selectedPricing.price * 0.75
        : selectedPricing.price
    }.00`
  );

  useEffect(() => {
    console.log('range '+selectedPricing.range)
    setPricingDisplay(
      `${
        billingTerm === "yearly"
          ? selectedPricing.price * 0.75
          : selectedPricing.price
      }.00`
    );
  }, [billingTerm, selectedPricing.price]);

  function changePrice(e) {
    const min = e.target.min;
    const max = e.target.max;
    const val = e.target.value;

    e.target.style.backgroundSize =
      ((val - min) * 100) / (max - min) + "% 100%";
    setSelectedPricing({
      pageViews: pricings[e.target.value - 1].pageViews,
      price: pricings[e.target.value - 1].price,
      range: e.target.value
    });
  }

  function changeBillingTerm() {
    let term = billingTerm === "monthly" ? "yearly" : "monthly";
    setBillingTerm(term);
  }

  return (
    <div>
      <div className="p-12 mobile:p-8">
        <div className="flex flex-wrap mobile:justify-center">
          <div className="text-GrayishBlue w-1/2 flex items-center tracking-widest font-semibold mobile:order-1 mobile:justify-center mobile:w-full">
            {selectedPricing.pageViews} PAGEVIEWS
          </div>
          <div className="text-DarkDesaturatedBlue text-4xl font-semibold w-1/2 mobile:w-2/3 flex items-center mobile:justify-center justify-end mobile:order-3">
            ${pricingDisplay}
            <span className="text-GrayishBlue text-base align-middle">
              &nbsp;&nbsp;/ month
            </span>
          </div>
          <div className="my-4 w-full mobile:order-2">
            <input
              className="slider"
              onChange={changePrice}
              type="range"
              max={pricings.length}
              min="1"
              value={selectedPricing.range}
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 mobile:text-[0.85rem]">
          <div className="text-GrayishBlue">Monthly Billing</div>
          <Switch colorScheme='cyan' className="mx-4" onChange={changeBillingTerm} />
          <div className="text-GrayishBlue">Yearly Billing</div>
          <div className="bg-LightGrayishRed text-LightRed px-2 rounded-lg text-xs font-semibold ml-2">
            25% <span className="mobile:hidden">discount</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex mobile:flex-col mobile:justify-between mobile:p-8 justify-between items-center p-12">
        <div className="flex flex-col items-center justify-center">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                stroke-width="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>
            <span className="ml-4">Unlimited websites</span>
          </div>
          <div class="flex items-center mobile:mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                stroke-width="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>
            <span className="ml-4">100% data ownership</span>
          </div>
          <div class="flex items-center mobile:mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                stroke-width="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>
            <span className="ml-4">Email reports</span>
          </div>
        </div>
        <button className="h-10 w-40 rounded-full mobile:mt-8 text-PaleBlue bg-DarkDesaturatedBlue hover:text-white">
          Start my trial
        </button>
      </div>
    </div>
  );
}

export default Pricings;
