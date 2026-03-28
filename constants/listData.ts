import kibbleIcon from "@/public/feeding/kibble-icon.svg"
import wetFoodIcon from "@/public/feeding/wet-icon.svg"
import waterIcon from "@/public/feeding/water-icon.svg"
import snackIcon from "@/public/feeding/snack-icon.svg"

import wetRightImg from "@/public/feeding/img2.png"
import waterRightImg from "@/public/feeding/img3.png"

import snackImg from "@/public/feeding/img4.png"

export const feedingListData = {
    'kibble': {
        title: '건식 사료',
        titleImg: kibbleIcon,
        descList: [
            '큰 그릇 중 마음에 드는 걸로 꺼내주세요.',
            '저울의 전원을 켜고 그릇을 올린 뒤 0SET 버튼을 눌러주세요.',
            '사료를 필요한 무게만큼 부어주세요.',
            '마초 밥상 위에 올려주세요.',
        ],
        coloredDescList: [
            '사료 그릇은 다 먹으면 교체해주세요. (남은 부스러기는 버리기)',
            '전 타임에 급여한 사료가 남아있으면 다 먹고 급여해주세요.',
            '밥상 앞에 앉아있어주면 밥을 잘 먹어요. (망 봐준다고 생각함)',
        ],
        image: null,
    },
    'wet-food': {
        title: '습식 사료',
        titleImg: wetFoodIcon,
        descList: [
            '낮은 그릇 중 마음에 드는 걸로 꺼내주세요.',
            '캔을 따서 티스푼으로 3-4번 떠주세요.',
            '수돗물을 쪼르륵하고 조금 넣어주세요.',
            '전자레인지에 4초 돌려주세요.',
            '티스푼으로 저어서 식혀주세요.',
            '밥상이나 마초가 있는 곳에 놓아주세요.',
        ],
        coloredDescList: [
            '남은 캔은 실리콘 덮개로 덮어서 냉장보관 해주세요.',
            '습식 그릇은 다 먹으면 바로 헹궈서 치워주세요.',
            '마초가 안 먹는다면 1시간 정도 지켜보고 치워주세요.',
            '그릇을 들고 입에 대주면 먹기도 해요.',
        ],
        image: wetRightImg
    },
    'water': {
        title: '물그릇',
        titleImg: waterIcon,
        descList: [
            '물그릇을 수거해주세요. (거실/침실)',
            '이미지의 솔로 물로만 세척해주세요.',
            '이미지와 같이 수면을 높게 채워주세요.',
        ],
        coloredDescList: [
            '물은 수돗물 찬물로 채워주면 돼요.',
            '물그릇은 하루에 한번 갈아주세요.',
            '이물질이 들어가거나 오염되면 갈아주세요.',
        ],
        image: waterRightImg
    },
    'snack': {
        title: '간식',
        titleImg: snackIcon,
        descList: ['간식은 놀이 이후 보상으로 주세요.', '작은건 멀리 던져주면 좋아해요.'],
        coloredDescList: [],
        image: snackImg
    }
}

