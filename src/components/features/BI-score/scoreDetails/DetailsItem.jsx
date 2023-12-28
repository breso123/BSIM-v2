/* eslint-disable react/prop-types */
function DetailsItem({ item, value, points, type, bord = false }) {
  const chPts = points < 0;
  const ct = type === "head" || type === "total";

  const styles = {
    head: `w-[97%] text-sm italic absolute top-[-20%]`,
    main: `w-full font-semibold rounded-xl py-2 text-sm`,
    perc: `w-full rounded-xl py-2 text-sm italic`,
    total: `w-full py-2 rounded-xl font-semibold`,
  };

  const style = {
    gridTemplateColumns: "2fr 1fr",
    borderBottom: `${bord ? `2px solid ${chPts ? "red" : "blue"}` : "none"}`,
    textShadow: `${ct ? `3px 3px 15px ${chPts ? "red" : "blue"}` : "none"}`,
    color: `${
      chPts ? `${ct ? "#7f1d1d" : "#b91c1c"}` : `${ct ? "#1e3a8a" : "#1d4ed8"}`
    }`,
  };

  return (
    <div style={style} className={`grid grid-cols-2 px-3 ${styles[type]}`}>
      <p>{item}</p>
      <div className="grid grid-cols-2">
        <p className="w-full text-center">{type !== "total" ? value : ""}</p>
        <p className={`w-full text-center`}>
          {type === "head"
            ? "BI-points"
            : `${chPts ? "-" : "+"} ${Math.abs(points)}`}
        </p>
      </div>
    </div>
  );
}

export default DetailsItem;
