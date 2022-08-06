function BtnWarningWide(props) {
  return (
    <div>
      <button className="w-full max-w-[240px] h-full max-h-[66px] p-[12px] rounded-md border-b-4 active:border-b-2 border-orange-800 flex items-center justify-center text-indigo-900 font-extrabold text-3xl bg-orange-400 hover:bg-orange-500">
        {props.value}
      </button>
    </div>
  );
}
export default BtnWarningWide;
