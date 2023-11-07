import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
function ErrorPar() {
  const { errors } = useSelector((state) => state.newIdea);
  const checkErr = Object.entries(errors).some((err) => err[1] !== "");
  const el1 = Object.values(errors).filter((v) => v !== "")[0];
  const style = { color: checkErr ? "red" : "green" };

  return (
    <p style={style} className={`font-sans italic tracking-wide font-semibold`}>
      {checkErr ? el1 : "All values are now filled, click 'submit' to proceed"}
    </p>
  );
}

export default ErrorPar;
