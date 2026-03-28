import { PageTitleComponent } from "@/components/page-title-component"
import matdongsan from "@/public/images/toilet/matdongsan.svg"
import matdongsandescriptionImg from "@/public/images/toilet/matdongsan-description.svg"
import { VideoBox } from "@/components/video-box"

const ToiletPage = () => {
    return <div>
        {PageTitleComponent('마초의 똥간을 챙겨줘', '화장실 청소')}
        <div className="flex flex-col gap-8">
            <VideoBox title="감자와 맛동산을 캐보자!" titleImg={matdongsan} descriptionImg={matdongsandescriptionImg} youtubeVideoId="AwqzBB2mgsU" />
        </div>
    </div>
}

export default ToiletPage