import { PageTitleComponent } from "@/components/page-title-component"
import Image from "next/image"
import img1 from "@/public/feeding/img1.png"
import { feedingListData } from "@/constants/listData"
import { KNPSKKomi } from "@/public/fonts/fonts"

const FeedingPage = () => {
    return <div className="mb-[60px]">
        {PageTitleComponent('마초의 식사를 챙겨줘', '사료 / 간식 / 물')}
        <div className="flex flex-col justify-center gap-8">
            <div>
                <Image src={img1} alt="feeding" />
            </div>
            <FoodBox keyName="kibble" />
            <FoodBox keyName="wet-food" />
            <FoodBox keyName="water" />
            <SnackBox />
        </div>
    </div>
}

const BoxTitle = ({ keyName }: { keyName: keyof typeof feedingListData }) => {
    return <div className={`flex items-center gap-3 mb-3 ${keyName === 'water' ? 'mb-[-40px]' : 'mb-3'}`}>
        <Image
            src={feedingListData[keyName].titleImg}
            alt={feedingListData[keyName].title}
            className="w-[45px]"
        />
        <div className={`${KNPSKKomi.className} text-[24px] font-bold`}>{feedingListData[keyName].title}</div>
    </div>
}

const FoodBox = ({ keyName }: { keyName: keyof typeof feedingListData }) => {
    return <div>
        {/* 타이틀 영역 */}
        <BoxTitle keyName={keyName} />

        {/* 예시이미지 영역 */}
        {
            feedingListData[keyName].image && (
                <div className='w-full mb-4'>
                    <Image
                        key={keyName + '-image'}
                        className="w-full"
                        src={feedingListData[keyName].image}
                        alt={feedingListData[keyName].title} />
                </div>
            )
        }

        {/* 내용 리스트 영역 */}
        <div className="w-full flex justify-between">
            <div>
                <ul className="text-[13px] mb-2">
                    {feedingListData[keyName].descList.map((line, i) => (
                        <li key={i} className="font-semibold">
                            <span className="mr-2">
                                {String.fromCharCode(65 + i)}.
                            </span>
                            <span>
                                {line}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className={`text-[15px] text-[#ef7d40] ${KNPSKKomi.className}`}>
                    {feedingListData[keyName].coloredDescList.map((line, i) => (
                        <p key={i} className="m-0 pl-0">
                            <span aria-hidden className="mr-1">*</span>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

const SnackBox = () => {
    return <div>
        <div className="flex gap-10">
            <BoxTitle keyName='snack' />
            <ul className="text-[13px]">
                {feedingListData.snack.descList.map((line, i) => (
                    <li key={i} className="font-bold">
                        <span className="mr-2">
                            {String.fromCharCode(65 + i)}.
                        </span>
                        <span>
                            {line}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <Image src={feedingListData.snack.image} alt={feedingListData.snack.title} />
        </div>
    </div>
}

export default FeedingPage