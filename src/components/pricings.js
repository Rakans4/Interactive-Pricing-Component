import React from "react";
import { useState, useEffect } from "react";
import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Divider,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

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
  });

  const [pricingDisplay, setPricingDisplay] = useState(
    `${
      billingTerm === "yearly"
        ? selectedPricing.price * 0.75
        : selectedPricing.price
    }.00`
  );

  useEffect(() => {
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
    });
  }

  function changeBillingTerm() {
    let term = billingTerm === "monthly" ? "yearly" : "monthly";
    setBillingTerm(term);
  }

  return (
    <div>
      <div className="p-12">
        <div className="flex flex-wrap">
          <div className="text-GrayishBlue w-1/2 flex items-center tracking-widest font-semibold">
            {selectedPricing.pageViews} PAGEVIEWS
          </div>
          <div className="text-DarkDesaturatedBlue text-4xl font-semibold w-1/2 flex items-center justify-end">
            ${pricingDisplay}{" "}
            <span className="text-GrayishBlue text-base align-middle">
              {" "}
              &nbsp;&nbsp;/ month
            </span>
          </div>
          <div className="my-4 w-full">
            <input
              className="slider"
              onClick={changePrice}
              type="range"
              max={pricings.length}
              min="1"
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-end mt-6">
          <div className="text-GrayishBlue">Monthly Billing</div>
          <Switch className="mx-4" onChange={changeBillingTerm} />
          <div className="text-GrayishBlue">Yearly Billing</div>
          <div className="bg-LightGrayishRed text-LightRed px-2 rounded-lg text-xs font-semibold ml-2">
            25% <span>discount</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-12">
        <div>
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
          <div class="flex items-center">
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
          <div class="flex items-center">
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
        <button className="h-10 w-40 rounded-full text-PaleBlue bg-DarkDesaturatedBlue hover:text-white">
          Start my trial
        </button>
      </div>
    </div>
  );
}

export default Pricings;
