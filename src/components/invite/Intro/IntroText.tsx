export default function IntroText() {
  return (
    <div className="flex flex-col items-center gap-3 my-6 border rounded-xl py-10 mx-10">
      <div className="flex gap-2 justify-center items-center text-[1.6rem] text-amber-500 text-opacity-60">
        <p className=" font-serif">KWANWOO</p>
        <p className=" font-serif">&</p>
        <p className=" font-serif">SERAN</p>
      </div>
      <div className=" w-[10vh] h-[2px] bg-gray-950 opacity-20"></div>
      <div className="text-center text-gray-950 text-opacity-60">
        <p className="text-md font-bold ">2025. 05. 17. Sat, 12:50 PM</p>
        <br></br>
        <p className=" text-md font-bold ">호텔수성 수성스퀘어</p>
        <p className=" text-md font-bold ">3층 피오니홀</p>
      </div>
    </div>
  );
}
