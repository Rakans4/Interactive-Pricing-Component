import { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = (props) => {
  const [pricings, setPricings] = useState([
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

  return (
    <PricingContext.Provider value={[pricings, setPricings]}>
      {props.children}
    </PricingContext.Provider>
  );
};
