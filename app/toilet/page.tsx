import { PageTitleComponent } from "@/components/page-title-component"
import potatoImg from "@/public/potato.svg"
import potatoDescriptionImg from "@/public/potato-description.svg"
import matdongsan from "@/public/matdongsan.svg"
import matdongsandescriptionImg from "@/public/matdongsan-description.svg"
import { VideoBox } from "@/components/video-box"

const ToiletPage = () => {
    return <div>
        {PageTitleComponent('마초의 똥간을 챙겨줘', '화장실 청소')}
        <div className="flex flex-col gap-8">
            <VideoBox title="감자를 캐보자!" titleImg={potatoImg} descriptionImg={potatoDescriptionImg} youtubeVideoId="lv8loCUPev0" />
            <VideoBox title="맛동산을 캐보자!" titleImg={matdongsan} descriptionImg={matdongsandescriptionImg} youtubeVideoId="AwqzBB2mgsU" />
        </div>
    </div>
}

export default ToiletPage