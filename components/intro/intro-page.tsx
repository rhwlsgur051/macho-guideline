'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const defaultFootprintList = [
    {
        className: "right-4 bottom-5 w-[100px] z-10",
        show: false,
    },
    {
        className: "left-16 top-44 w-[40px]",
        show: false,
    },
    {
        className: "top-3 right-25 w-[40px]",
        show: false,
    },
    {
        className: "top-38 right-5 w-[40px]",
        show: false,
    }
];

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const IntroPageComponent = () => {
    const router = useRouter();

    const [footprintList, setFootprintList] = useState<{ className: string, show: boolean }[]>(defaultFootprintList);

    const renderFootprint = async () => {
        for (let i = 0; i < footprintList.length; i++) {
            await sleep(500);
            footprintList[i].show = true;
            setFootprintList([...footprintList])
        }
    }

    useEffect(() => {
        renderFootprint();
    }, [])

    return <div className="bg-[#ef7d40] w-[100vw] h-[100vh] relative overflow-hidden">
        <div className="overflow-hidden relative h-[50vh]">
            <div className="absolute top-20 left-8 font-bold">
                <div className="text-white text-3xl">MACHO</div>
                <div className="text-white text-1xl">Care Guide</div>
            </div>
            <img src="/macho.png" alt="splash" className="max-w-none w-[480px] translate-x-[30px] translate-y-[-30px]" />

            {footprintList.map((footprint, index) => (
                <img key={`footprint-` + index} src="/footprint.svg" alt="footprint" className={`absolute ${footprint.className}`} style={{ display: footprint.show ? 'block' : 'none' }} />
            ))}

        </div>
        <div className="top-[-60px] w-[700px] translate-x-[-150px] h-[calc(50vh+60px)] flex justify-center relative bg-white rounded-t-[50%]">
            <div className="flex flex-col">
                <div className="pt-12 font-bold text-center text-[26px] mb-7">
                    <div>
                        Welcome!
                    </div>
                    <div>
                        The Macho's Home
                    </div>
                </div>
                <div className="text-center text-[16px] text-[#999] mb-11">
                    <div>
                        마초를 돌봐주러 온 소중한 당신에게 전하는 메세지
                    </div>
                    <div>
                        너무너무 고마워요! 편히 쉬다 가세요!
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full items-center">
                    <button
                        type="button"
                        className="bg-[#ef7d40] text-white w-[160px] h-[40px] rounded-full cursor-pointer text-[16px] hover:bg-[#fdeadb] hover:text-[#ef7d40] active:bg-[#fdeadb] active:text-[#ef7d40] focus:bg-[#fdeadb] focus:text-[#ef7d40] focus:outline-none select-none duration-200"
                        style={{ WebkitUserSelect: "none" }}
                        onClick={() => {
                            setTimeout(() => {
                                router.push("/main");
                            }, 500);
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
}
