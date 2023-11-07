/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import ReusableImage from "../reusableImages/ReusableImage";

function HeaderTitle() {
  const contentKey = useSelector((state) => state.app.contentKey);
  const image = useSelector((state) => state.app.image);

  return (
    <div className="flex items-center justify-start gap-3 pl-8">
      <ReusableImage src={image} additionalStyles="h-16 w-16" />
      <p className="text-xl text-blue-900 font-semibold tracking-wide italic">
        {contentKey
          .split("_")
          .map((k) => k[0].toUpperCase() + k.slice(1))
          .join(" ")}
      </p>
    </div>
  );
}

export default HeaderTitle;
