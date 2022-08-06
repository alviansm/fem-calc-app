function BtnPrimaryWide(props) {
  return (
    <div>
      <button className="w-full max-w-[240px] h-full max-h-[66px] p-[12px] rounded-md border-b-4 active:border-b-2 border-orange-200 flex items-center justify-center text-indigo-900 font-extrabold text-3xl bg-orange-50 hover:bg-white">
        {props.value}
      </button>
    </div>
  );
}

export default BtnPrimaryWide;
