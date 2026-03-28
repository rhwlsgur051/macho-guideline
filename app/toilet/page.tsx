import { PageTitleComponent } from "@/components/page-title-component"
import toiletImg from "@/public/images/toilet/toilet.svg"
import toiletDescriptionImg from "@/public/images/toilet/toilet-description.png"
import { VideoBox } from "@/components/video-box"

const ToiletPage = () => {
    return <div>
        {PageTitleComponent('마초의 똥간을 챙겨줘', '화장실 청소')}
        <div className="flex flex-col gap-8">
            <VideoBox title="감자와 맛동산을 캐보자!" titleImg={toiletImg} descriptionImg={toiletDescriptionImg} youtubeVideoId="AwqzBB2mgsU" />
        </div>
    </div>
}

export default ToiletPage