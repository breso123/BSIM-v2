/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdditionalInput from "./AdditionalInput";
import AdditionalInputsEM from "./AdditionalInputsEM";
import MainInputs from "./MainInputs";

function CustomInputs({ vals, nosGR, multies, margins, dbtEb }) {
  const { ideasKey } = useParams();
  const newIdea = useSelector((state) => state.newIdea);

  return (
    <div className="w-full grid grid-cols-1 gap-y-4 mb-4">
      <MainInputs vals={vals} newIdea={newIdea} />
      {newIdea.multipleVal !== "P/S" && (
        <AdditionalInput
          vals={margins}
          type="ebmg"
          fcst={newIdea.forecastByEbmg}
          errors={newIdea.errorEBMG}
        />
      )}
      {ideasKey === "exit_multiple" && (
        <AdditionalInputsEM dbtEb={dbtEb} multies={multies} nosGR={nosGR} />
      )}
    </div>
  );
}

export default CustomInputs;
