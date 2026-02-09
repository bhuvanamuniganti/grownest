import { useLocation, useNavigate } from "react-router-dom";
import "./Practice.css";

const STORAGE_KEY = "grownest_child_profile";

function Practice() {
  const location = useLocation();
  const navigate = useNavigate();

  
  const state =
    location.state ||
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  const openSection = (section) => {
    navigate(`/practice/${section}`, {
      state: state
    });
  };

  return (
    <div className="practice-page">
      <div className="practice-header">
        <button className="back-btn" onClick={() => navigate("/", { state })}>
          ← Back
        </button>
        <h2>Assist Your Child</h2>
      </div>

      <div className="child-info">
        <p><b>Age:</b> {state?.age}</p>
        <p><b>Class:</b> {state?.classLevel}</p>
        {state?.interest && <p><b>Interest:</b> {state.interest}</p>}
      </div>

      <div className="section-grid">

          <div
          className="practice-card"
          onClick={() => openSection("translator")}
        >
          <h3>🎧 Audio Books</h3>
          <p>
            Learn concepts by listening to clear audio explanations.
            Makes learning engaging and easy to follow.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("confident-speaker")}
        >
          <h3>🗣 Confident Speaker</h3>
          <p>
            Help your child express ideas clearly and confidently.
            Guided practice builds clarity and comfort in speaking.
          </p>
        </div>


        <div
          className="practice-card"
          onClick={() => openSection("maths")}
        >
          <h3>➕ Maths Practice</h3>
          <p>
            Practice maths using step-by-step school-aligned methods.
            Strengthens understanding through guided problem solving.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("oral-written")}
        >
          <h3>✍ Oral & Written Practice</h3>
          <p>
            Practice speaking and writing answers across subjects.
            Improves clarity, structure, and accuracy over time.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("homework-helper")}
        >
          <h3>📘 Homework Helper</h3>
          <p>
            Get step-by-step guidance to understand and complete homework.
            Focuses on correct approach, not just answers.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("concept-clarity")}
        >
          <h3>🧠 Concept Clarity</h3>
          <p>
            Understand the “why” behind concepts with simple explanations.
            Helps build strong foundations across subjects.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("focus-practice")}
        >
          <h3>🎯 Focus Practice</h3>
          <p>
            Activities designed to improve attention and thinking skills.
            Supports better learning and problem-solving.
          </p>
        </div>

        <div
          className="practice-card highlight-card"
          onClick={() => openSection("daily-practice")}
        >
          <h3>📅 Daily Practice</h3>
          <p>
            Short, focused activities designed for daily learning.
            Builds strong habits with just a few minutes of practice.
          </p>
        </div>

        <div
          className="practice-card"
          onClick={() => openSection("progress")}
        >
          <h3>🌱 Learning Progress</h3>
          <p>
            Track learning activity and improvement over time.
            Encourages progress without pressure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Practice;
