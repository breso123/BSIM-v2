import { useDispatch, useSelector } from "react-redux";
import { unsetIsSubmitting } from "../../../../newIdeaSlice";
import { useNavigate } from "react-router-dom";
import { emptyIdeaObj, fetchIdeas } from "../../../../ideasSlice";
import { updateUser } from "../../../../../../../pages/services/apiLobby";

function Confirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ideaInProgress } = useSelector((state) => state.ideas);
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedUser = { ...user, ideas: [...user.ideas, ideaInProgress.id] };

  const addIdeaToUser = async () => await updateUser(user.id, updatedUser);
  const handlePostRequest = async () => {
    try {
      const res = await fetch("http://localhost:8000/ideas", {
        method: "POST",
        body: JSON.stringify(ideaInProgress),
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

  return (
    <div className="w-[50%] flex flex-col items-center shadow-statPrice rounded-lg p-3 bg-indigo-200/50">
      <p className="w-full text-center text-md text-indigo-800 font-semibold drop-shadow-gridderInd font-sans mb-8">
        You are about to publish your idea so everyone else can see it. Do you
        want to proceed?
      </p>
      <div className="flex items-center gap-4">
        <button
          className="h-8 w-24 font-mono text-blue-950 hover:italic"
          onClick={() => dispatch(unsetIsSubmitting())}
        >
          Modify
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          className="h-8 w-24 shadow-hoverFins rounded-full text-blue-950 font-semibold text-sm hover:font-serif bg-lime-300 hover:shadow-watchList"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
