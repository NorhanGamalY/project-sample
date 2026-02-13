import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="min-h-screen flex flex-wrap items-end justify-center w-[100%] bg-[url('/slider1bgr.jpg')]">
        <div className="w-[100%] px-3 lg:px-0 order-2 flex flex-col items-start justify-start mb-10 gap-6 lg:order-1 lg:w-[43%] ">
          <button className="py-3 px-8 rounded-3xl text-white text-[14px] bg-[linear-gradient(135deg,#D4A5B4,#745DB0)] hover:bg-[linear-gradient(135deg,#745DB0,#D4A5B4)]">WELCOME TO SALEPUSH</button>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] text-[rgb(34, 31, 63)] font-[700] ">
            The Experts in Optimizing Your Site!
          </h1>
          <p className="text-gray-500">On a broad scale, I see SEO becoming a normalized marketing tactic, the same way TV, radio, and print are traditionally thought of as marketing tactics</p>
          <button className="py-3 mb-15 px-12 rounded-3xl text-white text-[14px] bg-[#221F3F] hover:bg-[#d07e49]">Free SEO Analysis</button>
        </div>
        <div className="relative order-1 lg:order-2 w-[100%] lg:w-[57%] bg-no-repeat min-h-125 mt-20 lg:mt-0 lg:min-h-198">
          <img
            src="slider11.png"
            alt="Background"
            className="absolute right-0 top-0 h-125 lg:h-full w-auto z-0"
          />
          <img
            src="Slider12.png"
            alt="left border"
            className="absolute right-0 top-0 h-full w-auto z-10"
          />
          <img
            src="Slider13.png"
            alt="orange circl"
            className="absolute left-0 bottom-0 h-[90%] lg:h-full w-auto scale-then-fade "
          />
          <img src="Slider14.png" className="absolute bottom-0" alt="Tow Girls laughing" />
          <img
            src="slider1-item1.png"
            alt="Arrow icon"
            className="absolute left-[2%] bottom-[42%] w-[75px] lg:w-auto z-10 scale"
          />
          <img
            src="slider1-item2.png"
            alt="Cylender icon"
            className="absolute left-[12%] bottom-[7.5%] w-[80px] lg:w-auto z-10 scale"
          />
          <img
            src="slider1-item3.png"
            alt="circle icon"
            className="absolute right-[28%] -bottom-[5%] w-[95px] lg:w-auto z-10 scale"
          />
          <img
            src="slider1-item4.png"
            alt="Dollar icon"
            className="absolute right-[18%] bottom-[25%] w-[50px] lg:w-auto z-10 scale"
          />
          <img
            src="slider1-item5.png"
            alt="Google icon"
            className="absolute right-[17%] top-[35%] w-[40px] lg:w-auto z-10 scale-google"
          />
          <img
            src="slider1-item6.png"
            alt="Message icon"
            className="absolute left-[30%] top-[20%] w-[70px] lg:w-auto z-10 fromtop-float"
          />


        </div>
      </section>
    </main>
  );
}
