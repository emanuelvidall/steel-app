export default function Home() {
  return (
    <div className="bg-[#111111]  min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#111111] w-3/5 min-h-screen flex justify-start">
        <div className="w-1/2 min-h-screen flex flex-col pt-[184px]">
          <div className="flex justify-between flex-col">
            <h1 className="text-[84px] font-semibold text-white">Steel</h1>
            <h2 className="text-[34px] font-semibold leading-8 mb-4 text-white">
              Smart Technology for Equipment Efficiency and Longevity
            </h2>
            <p className="text-[#95979e]">
              Steel helps you to keep your equipment in top condition. It uses
              sensors to monitor the health of your equipment and provides you
              with real-time information about its performance.
            </p>
          </div>
        </div>
        <div className="w-1/2 min-h-screen flex flex-col pt-[184px]">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[278px] object-cover rounded-3xl"
            src="/videos/steel.mp4"
          />
        </div>
      </div>
    </div>
  );
}
