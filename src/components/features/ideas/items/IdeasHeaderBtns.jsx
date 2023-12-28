import { useDispatch } from "react-redux";
import FilterSVG from "../../../../ui/FilterSVG";
import { useNavigate } from "react-router-dom";
import { showNewIdeaForm } from "../ideasSlice";
import Button1 from "../../../../ui/buttons/Button1";

function IdeasHeaderBtns() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    dispatch(showNewIdeaForm());
    navigate("newIdea");
  }

  return (
    <div className="flex items-center justify-center gap-2 absolute top-7 left-1/2 translate-x-[-50%]">
      <Button1 type="newIdea" onClick={(e) => handleClick(e)}>
        Write a new idea
      </Button1>
      <Button1 type="ideaFilter">
        <FilterSVG />
      </Button1>
    </div>
  );
}

export default IdeasHeaderBtns;
