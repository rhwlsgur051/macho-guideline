import { PageTitleComponent } from "@/components/page-title-component"
import { KNPSKKomi } from "@/public/fonts/fonts"

import Image from "next/image"
import machoImg from "@/public/images/fna/macho-3.png"
import machoImg2 from "@/public/images/fna/macho-4.png"

const FnaPage = () => {
    return <div className="mb-[60px]">
        {PageTitleComponent('알아두면 쓸모있는 마초상식!', '마초 최애인간 공략집')}

        <div className="flex justify-between">
            <div>
                <p className={`${KNPSKKomi.className} text-[#ef7d40] text-[20px] font-bold`}>마초와 처음 마주친 순간!</p>
                <ul className="list-disc list-inside text-[11px] font-bold">
                    <li>고양이는 조용하고 차분한 사람을 좋아해요.</li>
                    <li>처음에는 다가가지 말고 거리를 두고 인사해주세요.</li>
                    <li>몸을 낮추고 코에 손가락을 대고 냄새를 맡게 해주세요.</li>
                    <li>마초에게 관심없는 사람처럼 있으면 점점 다가올거에요.</li>
                </ul>
            </div>
            <div>
                <Image src={machoImg} alt="fna" width={90} />
            </div>
        </div>

        <div className="relative mt-[-30px] mb-[20px]">
            <p className={`${KNPSKKomi.className} text-[#ef7d40] text-[20px] font-bold`}>마초가 뭐라고 하는 거지?</p>
            <ul className="list-disc list-inside text-[11px] font-bold">
                <li>다가와서 울기 시작하면 일어나서 따라가보세요.</li>
                <li>옷방 문앞에서 울면 &gt; 놀고 싶어 or 옷방에 들어가고 싶어</li>
                <li>밥상 이나 부엌에서 울면 &gt; 배고파 밥줘</li>
                <li className="mb-[4px]">아침에 침대 근처에서 울면 &gt; 일어나 or 밥줘</li>
                <li className="text-[#295771]">꼬리를 탁, 탁 내려치면 탐탁치 않다는 뜻이에요.</li>
                <li className="text-[#295771]">얼굴을 당신에게 부딪히며 비비면 애교 부리는 거에요.</li>
                <li className="text-[#295771]">갑자기 달려와서 발을 살짝 공격하면 기습놀이 하는거에요.</li>
                <li className="text-[#295771]">멀리서 계속 감시한다면 관심 있어서 지켜보는거에요.</li>
            </ul>
        </div>

        <div className="mb-[8px]">
            <p className={`${KNPSKKomi.className} text-[#ef7d40] text-[20px] font-bold`}>마초의 TV시청</p>
            <ul className="list-disc list-inside text-[11px] font-bold">
                <li>고양이들이 창밖을 바라보는 것은 사람이 TV보는거와 같아요.</li>
                <li>햇살이 들어오는 낮시간에 창문을 열어주면 좋아해요.</li>
                <li>가장 좋아하는 곳은 옷방 창문이에요. 눈을 떼면 행거로 들어가버리니<br />
                    <span className="pl-[15px]">
                        옷방에서 잠깐 같이 있어주면서 창틀에 있게 해주면 좋아요.
                    </span>
                </li>
            </ul>
        </div>

        <div className="mb-[40px]">
            <Image src={machoImg2} alt="fna" />
        </div>

        <div className={`text-[#df4442] ${KNPSKKomi.className} text-[16px]`}>
            <p>사실은.. 이 모든 것들은 중요하지 않아요.</p>
            <p>당신이 마초를 위해 와줬다는 것만으로도 당신은 마초의 최애인간!!!</p>
            <p>마초의 기분이나 놀이는 전혀 중요하지 않아요. 와서 같이 있어주고</p>
            <p>밥, 화장실만 챙겨줘도 당신은 완벽한 돌보미입니다..★</p>
        </div>
    </div>
}

export default FnaPage