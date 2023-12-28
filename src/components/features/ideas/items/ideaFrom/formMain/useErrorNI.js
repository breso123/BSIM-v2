import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useErrorNI() {
  const [errors, setErrors] = useState({});
  const {
    errorsInput,
    errorsDCF,
    errorCOE,
    errorShares,
    errorMulti,
    errorEBMG,
    errorDbtEb,
    errorsTC,
    valuation,
  } = useSelector((state) => state.newIdea);

  useEffect(() => {
    const errorsCOE = valuation === "DCF" ? { ...errorsDCF } : { ...errorCOE };
    const errorsPR = { ...errorsCOE, ...errorsInput };
    const errorsDC = { ...errorEBMG };
    const errorsPE = { ...errorEBMG, ...errorShares, ...errorMulti };
    const errorsPS = { ...errorShares, ...errorMulti };
    const errorsEVEB = { ...errorsPE, ...errorDbtEb };

    if (valuation === "DCF")
      setErrors({ ...errorsPR, ...errorsDC, ...errorsTC });
    if (valuation === "P/E")
      setErrors({ ...errorsPR, ...errorsPE, ...errorsTC });
    if (valuation === "P/S")
      setErrors({ ...errorsPR, ...errorsPS, ...errorsTC });
    if (valuation === "EV/EBITDA")
      setErrors({ ...errorsPR, ...errorsEVEB, ...errorsTC });
  }, [
    errorCOE,
    errorDbtEb,
    errorEBMG,
    errorMulti,
    errorShares,
    errorsDCF,
    errorsInput,
    errorsTC,
    valuation,
  ]);

  return errors;
}

export default useErrorNI;
