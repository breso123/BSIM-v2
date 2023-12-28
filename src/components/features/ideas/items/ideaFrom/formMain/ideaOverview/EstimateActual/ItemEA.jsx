/* eslint-disable react/prop-types */
import { useState } from "react";
import HeaderEA from "./HeaderEA";
import MainEA from "./MainEA";
import { useSelector } from "react-redux";
import {
  getTgtScenarioPers,
  isReleased,
} from "../../../../../helpers/newIdeaMisc";

function ItemEA({ item, idea, title, val }) {
  const { statements } = useSelector((state) => state.financials);
  const [isOpen, setIsOpen] = useState(false);
  const { realistic, optimistic, pessimistic } = idea;

  const tgtOptimistic = getTgtScenarioPers(optimistic, val);
  const tgtRealistic = getTgtScenarioPers(realistic, val);
  const tgtPessimistic = getTgtScenarioPers(pessimistic, val);
  const act = isReleased(item, tgtRealistic, statements, val);

  return (
    <div className="w-full flex flex-col gap-2">
      <HeaderEA
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={title}
        idea={idea}
      />
      <MainEA
        title={title}
        isOpen={isOpen}
        idea={idea}
        o={tgtOptimistic}
        r={tgtRealistic}
        p={tgtPessimistic}
        act={act}
      />
    </div>
  );
}

export default ItemEA;
