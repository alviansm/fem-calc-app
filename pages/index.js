// Library
import Head from "next/head";
import { useReducer } from "react";
// Components
import BtnPrimary from "../components/BtnPrimary";
import BtnPrimaryWide from "../components/BtnPrimaryWide";
import BtnWarning from "../components/BtnWarning";
import BtnWarningWide from "../components/BtnWarningWide";
import BtnPrimaryDigit from "../components/BtnPrimaryDigit";
import BtnPrimaryWideDigit from "../components/BtnPrimaryWideDigit";
// Utils
import { formatOperand } from "../utils/formatOperand";
import { ACTIONS } from "../utils/actions";

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case "choose_operation":
      return state;
    case "clear":
      return state;
    case "delete_digit":
      return state;
    case "evaluate":
      return state;
    default:
      return state;
  }
}

function handleKeyDownInput(e, dispatch) {
  switch (e.key) {
    case "1":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } });
      break;
    case "2":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } });
      break;
    case "3":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } });
      break;
    case "4":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } });
      break;
    case "5":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } });
      break;
    case "6":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } });
      break;
    case "7":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } });
      break;
    case "8":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } });
      break;
    case "9":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } });
      break;
    case "0":
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } });
      break;
  }
  // dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})
}

export default function Home() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div>
      <Head>
        <title>Calculator App</title>
        <meta
          name="description"
          content="Calculator app challange completion by frontendmentor.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center bg-indigo-600">
        {/* The calculator app container */}
        <div className="w-full max-w-[540px] mt-[109px]">
          {/* App header */}
          <div className="w-full flex items-center justify-between mb-[25px]">
            <p className="font-bold text-white text-2xl">calc</p>
            <div className="flex items-center justify-between">
              <p className="text-white text-xs mr-[25px]">THEME</p>
              <div className="cursor-pointer w-[70px] h-[25px] rounded-xl bg-indigo-800">
                <span className="w-[20px] h-[20px] bg-orange-600"></span>
              </div>
            </div>
          </div>
          {/* Display */}
          <div className="rounded-md bg-indigo-800 mb-[23px] py-[40px] px-[32px]">
            <input
              type={"text"}
              className="text-right text-white font-extrabold text-4xl bg-transparent p-0 m-0 w-full outline-none"
              value={formatOperand(currentOperand)}
              onKeyDown={(e) => handleKeyDownInput(e, dispatch)}
            />
          </div>
          {/* Buttons */}
          <div className="rounded-md p-[32px] bg-indigo-700 mb-[100px]">
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimaryDigit digit="7" dispatch={dispatch} />
              <BtnPrimaryDigit digit="8" dispatch={dispatch} />
              <BtnPrimaryDigit digit="9" dispatch={dispatch} />
              <BtnWarning value={"DEL"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimaryDigit digit="4" dispatch={dispatch} />
              <BtnPrimaryDigit digit="5" dispatch={dispatch} />
              <BtnPrimaryDigit digit="6" dispatch={dispatch} />
              <BtnPrimary value={"+"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimaryDigit digit="1" dispatch={dispatch} />
              <BtnPrimaryDigit digit="2" dispatch={dispatch} />
              <BtnPrimaryDigit digit="3" dispatch={dispatch} />
              <BtnPrimary value={"-"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimary value={"."} />
              <BtnPrimaryDigit digit="0" dispatch={dispatch} />
              <BtnPrimary value={"/"} />
              <BtnPrimary value={"x"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <BtnPrimaryWide value={"RESET"} />
              <BtnWarningWide value={"="} />
            </div>
          </div>
          {/* Footers */}
        </div>
      </div>
    </div>
  );
}
