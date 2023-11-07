/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Step2Input from "../../formItems/Step2Input";
import { setErrors, typeContent, typeTitle } from "../../../../newIdeaSlice";

function TitleContent() {
  const { title, content } = useSelector((state) => state.newIdea);
  const dispatch = useDispatch();

  function handleChangeTitle(e) {
    e.preventDefault();
    dispatch(typeTitle(e.target.value));
    dispatch(setErrors());
  }

  function handleChangeContent(e) {
    e.preventDefault();
    dispatch(typeContent(e.target.value));
    dispatch(setErrors());
  }

  return (
    <>
      {[title, content].map((item, i) => (
        <Step2Input
          key={i}
          onChange={(e) =>
            i === 0 ? handleChangeTitle(e) : handleChangeContent(e)
          }
          value={item}
          height={i === 0 ? 6 : 12}
          pl={
            i === 0
              ? "Your Idea's Title"
              : "Explain your idea in 5-10 sentences"
          }
        />
      ))}
    </>
  );
}

export default TitleContent;
