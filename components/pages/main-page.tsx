'use client';
import { useRouter } from "next/navigation";
import { FeedingGuideBtn } from "../icons/feeding-guide-btn";
import { ToiletGuideBtn } from "../icons/toilet-guide-btn";
import { PlayGuideBtn } from "../icons/play-guide-btn";

export const MainPageComponent = () => {
  const routner = useRouter();

  return <div className="flex flex-col gap-5 mt-6 px-6">
    <MainHeader />

    {/* 우리집 사용설명서 */}
    <div className="bg-[#aaa] p-4 pl-7 rounded-[14px] flex gap-4">
      <img src="/home-w.svg" alt="macho-timetable" className="w-[60px]" />
      <div className="flex flex-col justify-center mr-10">
        <div className="font-bold text-[14px] text-[#444] mb-1">우리집 사용설명서</div>
        <div className="text-[10px] text-[#444]">지내는 동안 집에 관련된 정보들</div>
      </div>
      <button
        className="bg-[#444] text-white rounded-full w-[40px] h-[40px] flex self-center items-center justify-center active:bg-[#ef7d40]"
        onClick={() => routner.push('/home-guide')}>
        <img src="/right-arrow-w.svg" alt="right-arrow" className="w-[12px] h-[12px]" />
      </button>
    </div>


    {/* 시간표 */}
    <div className="relative">
      <img src="/macho-timetable.svg" alt="macho-timetable" className="w-[100%]" />
      <button className="bg-white active:bg-[#666] active:text-white rounded-full absolute bottom-4 left-7 w-[76px] h-[34px] text-[12px] font-bold" onClick={() => routner.push('/timetable')}>
        보러가기
      </button>
    </div>

    {/* 동그라미 버튼 목록 */}
    <div className="flex justify-between">
      <FeedingGuideBtn />
      <ToiletGuideBtn />
      <PlayGuideBtn />
    </div>

    {/* 마초상식 */}
    <div className="flex items-center p-[8px] bg-[#fff7e1] gap-2 rounded-[10px]">
      <img src="/macho-2.svg" alt="macho-timetable" className="w-[100px]" />
      <div>
        <p className="font-bold text-[14px] mb-1">알아두면 쓸모있는 마초상식!</p>
        <p className="text-[11px] mb-2">마초가 무슨 말을 하고 있는 걸까?<br />
          마초가 옆으로 왔으면 좋겠어...</p>
        <p className="text-[11px] font-bold text-[#eb6530]">마초의 최애 인간이 되고 싶나요? 터치!</p>
      </div>
      <button
        className="bg-[#ef7d40] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center active:bg-[#ef7d40]"
        onClick={() => routner.push('/fna')}>
        <img src="/right-arrow-w.svg" alt="right-arrow" className="w-[12px] h-[12px]" />
      </button>
    </div>
  </div>
}

const MainHeader = () => {
  return <div className="flex justify-between mb-2">
    <div className="text-[20px]">
      <p><b>안녕, 창수 삼촌.</b></p>
      <p>우리집을 소개할게요!</p>
    </div>
    <div>
      <img src="/chang-su.svg" alt="guest" className="w-[60px]" />
    </div>
  </div>
}