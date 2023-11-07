import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  determineAction,
  determineOscillatorAction,
} from "../../../../helpers/miscFuncs";

export function useActionArray() {
  const [actionsMa, setActionsMa] = useState([]);
  const [actionsOsc, setActionsOsc] = useState([]);
  const { timeFrame, oscillators, movingAvgs } = useSelector(
    (state) => state.technicals
  );
  const { price, contentKey } = useSelector((state) => state.app);

  const chOsc = contentKey === "oscillators" || contentKey === "Oscillators";
  const chMa =
    contentKey === "Moving Averages" || contentKey === "moving_averages";

  useEffect(() => {
    const actArrMa = [];
    const actArrOsc = [];

    Object.entries(movingAvgs).forEach((d) => {
      const value = Object.values(d[1][timeFrame])[1];
      const { action: ma } = determineAction(d[0], value, price);
      actArrMa.push(ma);
    });

    Object.entries(oscillators).forEach((d) => {
      const tgtObj = d[1][timeFrame];
      const { action: osc } = determineOscillatorAction(tgtObj, d[0]);
      actArrOsc.push(osc);
    });

    setActionsMa(actArrMa);
    setActionsOsc(actArrOsc);
  }, [movingAvgs, oscillators, timeFrame, price, contentKey]);

  if (chOsc) return actionsOsc;
  if (chMa) return actionsMa;
  else return [...actionsOsc, ...actionsMa];
}
