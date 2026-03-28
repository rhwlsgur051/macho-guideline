import { PageTitleComponent } from "@/components/page-title-component"

const FeedingPage = () => {
    return <div className="p-6">
        {PageTitleComponent('마초의 식사를 챙겨줘', '사료 / 간식 / 물')}
        <div className="flex flex-col gap-4">
            <FeedingBox title="건식 사료" description={'마초의 주식 1'} bgColor="pink">
                <div></div>
            </FeedingBox>

            <FeedingBox title="습식 사료" description={'마초의 주식2'} bgColor="yellow">
                <div></div>
            </FeedingBox>

            <FeedingBox title="물" description={'마초의 수분'} bgColor="skyblue">
                <div></div>
            </FeedingBox>
        </div>
    </div>
}

const FeedingBox = ({ title, description, bgColor, children }: { title: string, description: string, bgColor: string, children: React.ReactNode }) => {
    return <div style={{ backgroundColor: bgColor }} className="p-4 rounded-[14px]">
        <div className="flex flex-col">
            <div className="text-[20px] font-bold">{title}</div>
            <div className="text-[14px]">{description}</div>
        </div>
        {children}
    </div>
}

export default FeedingPage