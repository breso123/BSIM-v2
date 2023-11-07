import { useSelector } from "react-redux";
import AppSpinnerCircle from "./AppSpinnerCircle";

function AppSpinner() {
  const logo = useSelector((state) => state.app.logo);

  return (
    <div className="absolute top-[-11.5%] left-[-8%] z-50 h-[150px] w-[150px] flex items-center justify-center">
      <svg
        className="h-[150px] w-[150px] animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="75"
          cy="75"
          r="40"
          stroke="midnightblue"
          strokeWidth="1"
          strokeDasharray="360"
          fill="white"
        />
        <AppSpinnerCircle />
      </svg>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img className="rounded-full" src={logo} style={{ height: "50px" }} />
      </div>
    </div>
  );
}

export default AppSpinner;
