import useErrorNI from "../formMain/useErrorNI";

/* eslint-disable react/prop-types */
function ErrorPar() {
  const errors = useErrorNI();
  const checkErr = Object.entries(errors).some((err) => err[1] !== "");
  const style = { color: checkErr ? "red" : "green" };

  return (
    <p
      style={style}
      className={`font-sans italic tracking-wide font-semibold text-sm`}
    >
      {checkErr
        ? "Please fill all values properly"
        : "You are good to go, click 'Submit' to proceed"}
    </p>
  );
}

export default ErrorPar;
