import { PageTitleComponent } from "@/components/page-title-component"
import Image from "next/image"

import homeGuideImg from "@/public/home-guide/home-guide-img.png"

const HomeGuidePage = () => {
    return <div className="mb-[60px]">
        {PageTitleComponent('내집이다~ 생각하고 사용해줘요!', '우리집 사용설명서')}
        <div className="flex flex-col gap-4 mb-4">
            <GuideBox title={'부천시 하우로 260 상우파크빌라 4층'} titleColor="#ef7d40">
                <p className="font-semibold text-[14px]">현관 비밀번호 : 별도 안내</p>
                <div className="text-[12px]">
                    <p>* 현관문이 헐거워요. 열고 닫을때 문을 밀었다 소리가 나면 작동해주세요.</p>
                    <p>* 내부 신발장은 사용하지 않아요. 문 밖에서 신발을 벗어주세요.</p>
                    <p>* 마초는 현관문이 열리면 뒷걸음질 치거나 도망가지만, 나가지 않게 주의!</p>
                    <p>* 유사 시를 위해 빌라 1층 진입 시 공동 현관문을 닫고 올라가요!</p>
                </div>
            </GuideBox>

            <GuideBox title="마초 금지 구역" titleColor="#df4442">
                <p className="font-semibold text-[14px]">화장실 / 옷방 베란다</p>
                <div className="text-[12px]">
                    <p><b>&#183; 항상 문을 닫아 주세요. 출입시에 마초가 빈틈을 노리고 있으니 주의!</b></p>
                    <p><b>&#183; 급히 닫다 마초가 끼이는것 보다 들어가게 두고 데리고 나오는게 좋아요.</b></p>
                    <p>* 옷방은 동행 하에 같이 들어가는건 괜찮아요. (옷방을 아주 좋아함)<br />
                        <span className="pl-[9px]">행거 안쪽이나 먼지가 많은 곳으로만 못가게 해주세요.<br />
                            <span className="pl-[9px]">창문 열어주면 좋아해요.</span></span>
                    </p>
                </div>
            </GuideBox>

            <GuideBox title="물 / 식사 / 간식" titleColor="#00a93a">
                <div className="text-[12px]">
                    <p><b>&#183; 물 : 브리타 윗뚜껑 열고 수돗물 받으면 식수로 걸러져요.</b></p>
                    <p><b>&#183; 식사 : 라면, 컵반, 냉장고에 있는건 먹으라고 사둔거니 먹어주세요.</b></p>
                    <p><b>&#183; 간식 : 상부장 찬장에 있는 간식들도 먹으라고 사둔거에요. 먹어요!!</b></p>
                    <p>* 마초는 사람 음식엔 관심이 없지만 혹시 모르니 바로 헹궈주세요.</p>
                </div>
            </GuideBox>

            <GuideBox title="쓰레기 배출" titleColor="#6e52a0">
                <div className="text-[12px]">
                    <p><b>&#183; 일반 쓰레기 : 쓰레기통이 꽉차면 다른 비닐봉투에 넣어서 베란다에 두기</b></p>
                    <p><b>&#183; 재활용 쓰레기 : 헹궈서 베란다에 반투명 비닐에 넣어두기</b></p>
                    <p><b>&#183; 음식물 쓰레기 : 싱크대 배수구가 꽉차면 노란색 음식물 쓰레기 봉투에 넣기</b></p>
                    <p>* 쓰레기통이나 음식물 쓰레기는 꽉차면 봉투에 넣으면 되고<br />
                        <span className="pl-[9px]">아니라면 그대로 두고 가세요!</span></p>
                </div>
            </GuideBox>

            <GuideBox title="화장실 사용" titleColor="#4884a7">
                <div className="text-[12px]">
                    <p><b>&#183; 휴지는 옷방 서랍 위, 물티슈는 화장실 거울 찬장에 있어요.</b></p>
                    <p><b>&#183; 물기를 없애고 싶으면 환풍기를 틀어두면 됩니다.</b></p>
                    <p><b>&#183; 라벨없는 네모난 통이 샴푸입니다.</b></p>
                    <p>* 들어오고 나갈때 마초가 엄청 들어오고 싶어할거에요.<br />
                        <span className="pl-[9px]">발로 가슴을 밀면서 쓰읍! 하면 쳇, 하고 갑니다.</span></p>
                </div>
            </GuideBox>

            <GuideBox title="침실 사용" titleColor="#005470">
                <div className="text-[12px]">
                    <p><b>&#183; 보일러는 항상 켜둬요. 덥거나 추우면 화살표로 온도만 조절하면 됩니다.</b></p>
                    <p><b>&#183; 침대 옆 바테이블 위에 온수매트가 있어요. 켜면 8시간 지속됩니다.</b></p>
                    <p><b>&#183; TV리모컨, 플스/닌텐도 컨트롤러 협탁에 있어요</b></p>
                </div>
            </GuideBox>
        </div>
        <Image src={homeGuideImg} alt="home-guide" />
    </div>
}

const GuideBox = ({ title, titleColor, children }: { title: string, titleColor: string, children: React.ReactNode }) => {
    return <div>
        <div className={`font-semibold text-[16px] mb-1`} style={{ color: titleColor }}>
            <div>{title}</div>
        </div>
        {children}
    </div>
}

export default HomeGuidePage