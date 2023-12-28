/* eslint-disable react/prop-types */
import DetailsItem from "./DetailsItem";

function DetailsBox({ cs }) {
  if (!cs) return;

  const chPts = cs.total.points < 0;
  const styles = {
    border: `1px solid ${chPts ? "red" : "blue"}`,
    boxShadow: ` 1px 1px 10px ${chPts ? "red" : "blue"}`,
  };

  return (
    <div
      style={styles}
      className={`w-full border rounded-xl relative py-1 px-2`}
    >
      <DetailsItem
        item="item"
        value="value"
        points={cs.total.points}
        type="head"
      />
      {Object.values(cs).map((itm, i) => (
        <DetailsItem
          key={i}
          item={itm.item}
          value={itm.value}
          points={itm.points}
          type={itm.type}
          bord={itm.bord}
        />
      ))}
    </div>
  );
}

export default DetailsBox;
