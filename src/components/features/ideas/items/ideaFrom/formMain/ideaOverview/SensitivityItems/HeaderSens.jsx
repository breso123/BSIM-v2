/* eslint-disable react/prop-types */

import HeaderSensUpper from "./HeaderSensUpper";
import SensBar from "./SensBar";

function HeaderSens({ coe, rangeVal, setRangeVal, idea }) {
  return (
    <header className="flex items-center justify-center mb-4  relative">
      <SensBar item={coe} idea={idea} type="coe" />
      <HeaderSensUpper
        rangeVal={rangeVal}
        setRangeVal={setRangeVal}
        idea={idea}
      />
    </header>
  );
}

export default HeaderSens;
