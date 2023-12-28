import AccordianSVG from "../../../../../../../../ui/AccordianSVG";
import Button1 from "../../../../../../../../ui/buttons/Button1";
import { getItem } from "../../../../../helpers/tableData";

/* eslint-disable react/prop-types */
function HeaderEA({ setIsOpen, isOpen, title, idea }) {
  function handleClick(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="w-full pl-3 text-lg flex items-center text-indigo-900 font-serif">
      <Button1
        type="evaItem"
        onClick={(e) => handleClick(e)}
        additional={isOpen ? "border-y-2 px-1" : "border-x-2"}
      >
        <AccordianSVG isOpen={isOpen} />
      </Button1>
      <span>
        {title === "Free Cash Flow" ? getItem(idea.valuation) : title}
      </span>
      <span className="text-sm font-sans ml-1 italic">
        ({title === "Stock Price" ? "Close" : "USD in Bn"})
      </span>
    </header>
  );
}

export default HeaderEA;
