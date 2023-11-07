/* eslint-disable react/prop-types */
import FormMain from "./ideaFrom/FormMain";
import FormHeader from "./ideaFrom/formHeader";
import { shortFCST } from "../../../../helpers/miscFuncs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setErrors } from "../newIdeaSlice";
import IdeaOverview from "./ideaFrom/IdeaOverview";

function IdeaForm() {
  const dispatch = useDispatch();
  const newIdea = useSelector((state) => state.newIdea);
  const { statements } = useSelector((state) => state.financials);
  const { newIdeaFormActive, ideaInProgress } = useSelector(
    (state) => state.ideas
  );
  const style = {
    transform: `translate(-50%, ${newIdeaFormActive ? -50 : -250}%)`,
  };
  useEffect(() => {
    dispatch(setErrors());
  }, [dispatch]);

  const vals =
    newIdea.forecastBy === "custom"
      ? Object.entries(newIdea)
          .filter((idea) => idea[0].includes(`${newIdea.selectedIdea}_`))
          .map((idea) => +idea[1] / 100)
      : Array.from(
          { length: 9 },
          () => +newIdea[`${newIdea.selectedIdea}CAGR`] / 100
        );

  const actual = statements.cash_flow
    ?.map((st) => {
      console.log(st.fda);
      return {
        period: new Date(st.fda).getFullYear(),
        value: st.fcfl,
      };
    })
    .reverse();

  if (!actual) return;

  const allValues = [
    ...actual,
    ...shortFCST(actual[actual.length - 1], vals).map((s, i) => {
      const latest = actual[actual.length - 1];

      return {
        period: latest.period + i + 1,
        wacc: +newIdea.wacc / 100,
        value: s,
        discounted: s / Math.pow(1 + newIdea.wacc / 100, i + 1),
      };
    }),
  ];

  return (
    <>
      <div
        style={{ display: newIdeaFormActive ? "block" : "none" }}
        className="h-full w-full blur-[5px] bg-blue-950 absolute top-0 left-0 opacity-50 transition-all duration-300"
      ></div>
      <div
        style={style}
        className="h-[90%] w-[90%] flex flex-col items-center justify-center bg-white absolute top-1/2 left-1/2 rounded-xl overflow-hidden transition-all duration-300"
      >
        <FormHeader />

        {!newIdea.isSubmitting ? (
          <FormMain
            vals={vals}
            actual={actual}
            allValues={allValues}
            length={actual.length - 1}
          />
        ) : (
          <IdeaOverview
            idea={ideaInProgress}
            title={newIdea?.title}
            conetnt={newIdea?.content}
            scenario={newIdea?.selectedIdea}
            isConfirmed={false}
          />
        )}
      </div>
    </>
  );
}

export default IdeaForm;
