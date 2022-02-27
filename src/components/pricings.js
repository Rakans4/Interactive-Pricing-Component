import { useState, useContext, useEffect } from "react";
import { PricingContext } from "../PricingContext";

function Pricings() {
  const [pricings] = useContext(PricingContext);
  const [billingTerm, setBillingTerm] = useState("monthly");
  const [domain, setDomain] = useState({
    pageViews: "100K",
    price: 16,
    range: 3
  });

  const pricingDisplay = `${
    billingTerm === "yearly" ? domain.price * 0.75 : domain.price
  }.00 / month`;

  useEffect(() => {
    document.title = `${
      billingTerm === "yearly" ? domain.price * 0.75 : domain.price
    }.00 / month`;
    console.log("useeffect");
  }, [billingTerm, domain.price]);

  function changePrice(e) {
    e.preventDefault();
    setDomain({
      pageViews: pricings[e.target.value - 1].pageViews,
      price: pricings[e.target.value - 1].price,
      range: e.target.value,
      billingTerm: domain.billingTerm,
    });
  }

  function changeBillingTerm(e) {
    let term = billingTerm === "monthly" ? "yearly" : "monthly";
    setBillingTerm(term);
  }

  return (
    <div>
      <div>
        <span>{domain.pageViews} PAGEVIEWS</span> - {pricingDisplay}
      </div>
      <input onClick={changePrice} type="range" max="5" min="1"></input>
      <input onClick={changeBillingTerm} type="checkbox"></input>
      pricings
    </div>
  );
}

export default Pricings;
