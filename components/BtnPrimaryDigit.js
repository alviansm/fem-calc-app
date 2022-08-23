import { ACTIONS } from "../utils/actions";

function BtnPrimaryDigit({ dispatch, digit }) {
  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
        className="w-full max-w-[104px] h-full max-h-[66px] p-[12px] rounded-md border-b-4 active:border-b-2 border-orange-200 flex items-center justify-center text-indigo-900 font-extrabold text-3xl bg-orange-50 hover:bg-white"
      >
        {digit}
      </button>
    </div>
  );
}

export default BtnPrimaryDigit;
