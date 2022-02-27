import { createContext } from "react";
import { PricingContext, PricingProvider } from "../PricingContext";
import Pricings from "./pricings";

function card() {
  return (
    <PricingProvider>
      <div className="w-96 h-44 border-2 border-blue-300">
        My card <Pricings />
      </div>
    </PricingProvider>
  );
}

export default card;
