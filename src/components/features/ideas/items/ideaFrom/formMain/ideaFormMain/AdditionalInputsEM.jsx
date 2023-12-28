/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import AdditionalInput from "./AdditionalInput";

function AdditionalInputsEM({ dbtEb, multies, nosGR }) {
  const newIdea = useSelector((state) => state.newIdea);

  return (
    <>
      {newIdea.multipleVal === "EV/EBITDA" && (
        <AdditionalInput
          vals={dbtEb}
          type="dbtEb"
          fcst={newIdea.forecastByDbtEb}
          errors={newIdea.errorDbtEb}
        />
      )}

      <AdditionalInput
        vals={multies}
        type="multi"
        fcst={newIdea.forecastByMulti}
        errors={newIdea.errorMulti}
      />
      <AdditionalInput
        vals={nosGR}
        type="shares"
        fcst={newIdea.forecastBySh}
        errors={newIdea.errorShares}
      />
    </>
  );
}

export default AdditionalInputsEM;
