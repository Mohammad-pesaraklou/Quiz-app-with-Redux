import {
  createAsyncThunk,
  createSlice,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";
import { moneyPyramid } from "../../data/dummy";

let initialState = {
  questionNumber: 1,
  selectedQuestion: null,
  isFinished: false,
  className: "answer",
  selectedAnswer: null,
  score: 0,
  rightAnswers: 0,
  wrongAnswers: false,
  timer: 30,
};


export const level = createSlice({
  name: "level",
  initialState,
  reducers: {
    selectedQuestion: (state, action) => {
      state.className = "answer active";
      state.selectedAnswer = action.payload;
      if (action.payload.correct) {
        state.className = "answer correct";
        state.rightAnswers = state.rightAnswers + 1;
        state.score = state.score + 10;
      } else {
        state.className = "answer wrong";
        state.score = state.score - 10;
        state.isFinished = true;
        state.wrongAnswers = true;
      }
    },
    nextQuestion: (state, action) => {
      state.questionNumber = state.questionNumber + 1;
      state.timer = 30;
    },
    PrevQuestion: (state, action) => {
      state.questionNumber = state.questionNumber - 1;
      state.timer = 30;
    },
    finishGame: (state) => {
      state.isFinished = true;
    },
    timerHandler: (state) => {
      state.timer = state.timer - 1;
      if (state.timer === 0) {
        state.questionNumber = state.questionNumber + 1;
        state.isFinished = true;
      }
    },
  },
 
});

export default level.reducer;
export const actionsLevel = level.actions;
