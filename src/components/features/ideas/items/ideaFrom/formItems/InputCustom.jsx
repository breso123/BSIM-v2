import InputGR from "./InputGR";

/* eslint-disable react/prop-types */
function InputCustom({ vals, newIdea, type, isDone, selectedIdea, styles }) {
  return (
    <div className="grid grid-cols-9 items-center h-full">
      {vals.map((el, i) => {
        const arrDone = newIdea[type][i];
        const arrUnDone = newIdea[`${type}_${i}`];
        const val = isDone ? arrDone : arrUnDone;

        return (
          <InputGR
            key={i}
            value={val}
            type={type}
            disabled={isDone || selectedIdea !== type}
            el={el}
            index={i}
            styles={styles[type][0]}
          />
        );
      })}
    </div>
  );
}

export default InputCustom;
