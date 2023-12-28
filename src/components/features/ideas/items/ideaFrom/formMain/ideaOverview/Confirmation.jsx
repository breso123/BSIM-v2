import { useDispatch, useSelector } from "react-redux";
import { unsetIsSubmitting } from "../../../../newIdeaSlice";
import { useNavigate, useParams } from "react-router-dom";
import { emptyIdeaObj, fetchIdeas } from "../../../../ideasSlice";
import { updateUser } from "../../../../../../../pages/services/apiLobby";
import Button1 from "../../../../../../../ui/buttons/Button1";

function Confirmation() {
  const { ideasKey } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ideaInProgress, itemsDCF, itemsMulti } = useSelector(
    (state) => state.ideas
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedUser = { ...user, ideas: [...user.ideas, ideaInProgress.id] };
  const tgtIdea =
    ideasKey === "discounted_cf"
      ? { ...ideaInProgress, ...itemsDCF }
      : { ...ideaInProgress, ...itemsMulti };

  const addIdeaToUser = async () => await updateUser(user.id, updatedUser);
  const handlePostRequest = async () => {
    try {
      const res = await fetch("http://localhost:8000/ideas", {
        method: "POST",
        body: JSON.stringify(tgtIdea),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw Error("Failed creating new idea. Try Again");
      }

      const data = await res.json();
      return data;
    } catch (err) {
      alert(err.message);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(updatedUser));
    handlePostRequest();
    addIdeaToUser();
    navigate(-1);
    dispatch(unsetIsSubmitting());
    dispatch(emptyIdeaObj());
    dispatch(fetchIdeas());
  }

  function handleModify(e) {
    e.preventDefault();
    dispatch(unsetIsSubmitting());
  }

  return (
    <div className="w-[50%] mt-10 flex flex-col items-center shadow-statPrice rounded-lg p-3 bg-indigo-200/50">
      <p className="w-full text-center text-md text-indigo-800 font-semibold drop-shadow-gridderInd font-sans mb-8">
        You are about to publish your idea so everyone else can see it. Do you
        want to proceed?
      </p>
      <div className="flex items-center gap-4">
        <Button1 type="modifyIdea" onClick={(e) => handleModify(e)}>
          Modify
        </Button1>
        <Button1 type="submitIdea" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button1>
      </div>
    </div>
  );
}

export default Confirmation;
