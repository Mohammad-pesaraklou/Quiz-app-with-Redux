import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Hero from "./components/Hero";
// data
import { moneyPyramid } from "./data/dummy";
// icon
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { actionsLevel } from "./Redux/Slices/level";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";
// action
const { PrevQuestion, nextQuestion } = actionsLevel;

function App() {
  const [earned, setEarned] = useState("$ 0");
  const level = useSelector((state) => state.level);
  const dispatch = useDispatch();

  useEffect(() => {
    level.questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((m) => m.id === level.questionNumber - 1).amount
      );
  }, [level.questionNumber, moneyPyramid]);

  return (
    <div className="app">
      <>
        <div className="main">
          {level.isFinished ? (
            <div className="endText">
              <h1 className="text">
                You Earned :<span style={{ color: "#c10c15" }}>{earned}</span>
              </h1>
              <div className="text">
                Your Right Answer:
                <span style={{ color: "#c10c15" }}>{level.rightAnswers}</span>
              </div>
              <div className="text">
                Your Score:
                <span style={{ color: "#c10c15" }}>{level.score}</span>
              </div>
            </div>
          ) : (
            <>
              <div className="top">
                <div className="timeCont">
                  <div
                    className="cont"
                    onClick={() => dispatch(PrevQuestion())}
                  >
                    Prev Question
                    <GrLinkPrevious className="arrow" />
                  </div>
                  <div className="timer">
                    <Timer />
                  </div>
                  <div className="cont">
                    <GrLinkNext
                      className="arrow"
                      onClick={() => dispatch(nextQuestion())}
                    />
                    Next Question
                  </div>
                </div>
              </div>
              <div className="bottom">
                <Hero />
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m, index) => (
              <li
                className={
                  level.questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
                key={index}
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
}

export default App;
