/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setScenarioArray } from "../../../newIdeaSlice";
import InputCustom from "./InputCustom";
import InputCagr from "./InputCagr";

function ScenarioForm({ type, onClick }) {
  const [isDone, setIsDone] = useState(false);
  const newIdea = useSelector((state) => state.newIdea);
  const fcstBy = newIdea.forecastBy;
  const dispatch = useDispatch();
  const vals = Object.entries(newIdea)
    .filter((idea) => idea[0].includes(`${type}_`))
    .map((idea) => +idea[1] / 100);

  const styles = {
    optimistic: ["text-blue-800", "text-sky-200"],
    realistic: ["text-stone-700", "text-white"],
    pessimistic: ["text-orange-800", "text-orange-200"],
  };
  if (!newIdea) return;

  function handleDone(e) {
    e.preventDefault();
    setIsDone((isDone) => !isDone);
    dispatch(setScenarioArray(type));
  }

  function handleClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <Form
      onClick={(e) => handleClick(e)}
      disabled={newIdea.selectedIdea !== type}
      name="optimistic"
      className={`w-full h-8 px-6 grid grid-cols-3 items-center mb-2 ${
        newIdea.selectedIdea === type ? "bg-blue-800/20" : ""
      }`}
      style={{ gridTemplateColumns: "1fr 4fr 0.5fr" }}
    >
      <label
        className={`font-semibold italic font-sans text-sm tracking-wide ${styles[type][0]}`}
      >
        {type[0].toUpperCase() + type.slice(1)}
      </label>
      {fcstBy === "custom" ? (
        <InputCustom
          vals={vals}
          newIdea={newIdea}
          type={type}
          isDone={isDone}
          selectedIdea={newIdea.selectedIdea}
          styles={styles}
        />
      ) : (
        <InputCagr styles={styles} type={type} value={newIdea[`${type}CAGR`]} />
      )}

      {fcstBy === "custom" && (
        <button
          onClick={(e) => handleDone(e)}
          disabled={newIdea.selectedIdea !== type}
          className={`h-6 w-16 font-sans text-sm italic shadow-hoverFins rounded-full ml-6 ${
            isDone ? "bg-lime-300 text-blue-800" : "text-blue-950"
          }`}
        >
          {isDone ? "Undo" : "Done"}
        </button>
      )}
    </Form>
  );
}

export default ScenarioForm;
