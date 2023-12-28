import InputGR from "./InputGR";
import { stylesSF } from "../../../../helpers/tableStyles";

/* eslint-disable react/prop-types */
function InputCustom({ type, newIdea }) {
  const vals = Object.entries(newIdea)
    .filter((idea) => idea[0].includes(`${type}_`))
    .map((idea) => +idea[1] / 100);

  return (
    <div className="grid grid-cols-9 items-center h-full">
      {vals.map((el, i) => {
        return (
          <InputGR
            key={i}
            value={newIdea[`${type}_${i}`]}
            type={type}
            el={el}
            index={i}
            styles={stylesSF[type][0]}
          />
        );
      })}
    </div>
  );
}

export default InputCustom;
