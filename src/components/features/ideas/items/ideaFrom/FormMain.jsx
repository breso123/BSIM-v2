/* eslint-disable react/prop-types */
import IdeaFormMain from "./formMain/IdeaFormMain";

function FormMain({ vals, actual, nosGR, multies, margins, dbtEb }) {
  return (
    <div
      className={`w-[90%] h-[90%] overflow-scroll py-7 flex flex-col items-center justify-center gap-2 relative`}
    >
      <IdeaFormMain
        vals={vals}
        actual={actual}
        nosGR={nosGR}
        multies={multies}
        margins={margins}
        dbtEb={dbtEb}
      />
    </div>
  );
}

export default FormMain;
