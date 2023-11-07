import ExecutiveBox from "./ExecutiveBox";
import { useSelector } from "react-redux";

function Executives() {
  const executives = useSelector((state) => state.insiders.executives);
  return (
    <div className="w-full grid grid-cols-4 gap-y-8 items-center justify-items-center h-[38rem] overflow-scroll py-1">
      {executives?.map((ex, i) => {
        const type = `${
          i === 0
            ? "ceo"
            : `${[1, 2].some((n) => n === i) ? "cfocoo" : "others"}`
        }`;

        return <ExecutiveBox key={i} type={type} ex={ex} />;
      })}
    </div>
  );
}

export default Executives;
