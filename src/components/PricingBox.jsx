/* eslint-disable react/prop-types */
import Button1 from "../ui/buttons/Button1";
import PricingIcon from "./icons/PricingIcon";

function PricingBox({ name, price, allFeatures, included }) {
  return (
    <div className="w-96 py-2 px-1 ease-in duration-300 text-white flex flex-col items-center hover:translate-y-[-0.75rem] bg-purple-900/40 shadow-priceBox">
      <header className="mb-10">
        <p className="text-center uppercase text-2xl py-2 text-sky-200 font-semibold">
          {name}
        </p>
        <p className="text-xl italic text-center text-pink-200">
          <span>USD </span>
          {price}
          <span>/ mo</span>
        </p>
      </header>
      <ul className="flex flex-col items-start justify-center gap-3 list-none ml-3 mb-5">
        {allFeatures.map((f, i) => {
          const isIncluded = included.includes(f);
          return (
            <li key={i} className="text-xs">
              <p className="flex items-center gap-8">
                <span>{<PricingIcon isAvailable={isIncluded} />}</span>
                <strong>{f}</strong>
              </p>
            </li>
          );
        })}
      </ul>
      <Button1 type="addToCart">Add To Cart</Button1>
    </div>
  );
}

export default PricingBox;
