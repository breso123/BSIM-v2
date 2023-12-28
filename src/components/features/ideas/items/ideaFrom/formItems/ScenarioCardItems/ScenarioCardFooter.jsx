import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
function ScenarioCardFooter({ cp, ivps }) {
  const { ivpsDisplay } = useSelector((state) => state.newIdea);

  return (
    <p
      className={`w-full h-[10%] text-center font-semibold font-sans uppercase text-sm ${
        cp > ivps ? "text-orange-800" : "text-blue-800"
      } opacity-${ivpsDisplay === "Diff" ? "100" : "0"}`}
    >
      {cp > ivps ? "Premium" : "Discount"}
    </p>
  );
}

export default ScenarioCardFooter;
