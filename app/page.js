// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh] ">
        <div className="font-bold text-5xl flex gap-4 justify-center items-center">Buy me a Chai
          <span><img src="/tea3.gif" width={70} alt="Tea GIF" /></span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <div className="p-4">
              <img className=" bg-slate-400 rounded-full " width={150} height={150} src="/man.gif" alt="Man GIF" /></div>
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <div className="p-4">
              <img className=" bg-slate-400 rounded-full " width={88} height={88} src="/coin.gif" alt="Coin GIF" /></div>
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <div className="p-4">
              <img className=" bg-slate-400 rounded-full  " width={150} height={150} src="/group.gif" alt="Group GIF" /></div>
            <p className="font-bold">Your Fans want to help</p>
            <p className=" text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wZh0eC5CA4A?si=kPVwWj3v4t4YQzZ-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
