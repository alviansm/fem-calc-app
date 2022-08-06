import Head from "next/head";
import BtnPrimary from "../components/BtnPrimary";
import BtnPrimaryWide from "../components/BtnPrimaryWide";
import BtnWarning from "../components/BtnWarning";
import BtnWarningWide from "../components/BtnWarningWide";

export default function Home() {
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
          <div className="rounded-md pt-[40px] pb-[40px] pr-[32px] pl-[32px] bg-indigo-800 mb-[23px]">
            <p className="text-right text-white font-extrabold text-4xl">
              399,981
            </p>
          </div>
          {/* Buttons */}
          <div className="rounded-md p-[32px] bg-indigo-700 mb-[100px]">
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimary value={7} />
              <BtnPrimary value={8} />
              <BtnPrimary value={9} />
              <BtnWarning value={"DEL"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimary value={4} />
              <BtnPrimary value={5} />
              <BtnPrimary value={6} />
              <BtnPrimary value={"+"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimary value={1} />
              <BtnPrimary value={2} />
              <BtnPrimary value={3} />
              <BtnPrimary value={"-"} />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[24px]">
              <BtnPrimary value={"."} />
              <BtnPrimary value={0} />
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
