import { PageTitleComponent } from "@/components/page-title-component"
import YoutubeEmbed from "@/components/youtube-embed"
import { KNPSKKomi } from "@/public/fonts/fonts"

import potatoImg from "@/public/potato.svg"
import potatoDescriptionImg from "@/public/potato-description.svg"
import matdongsan from "@/public/matdongsan.svg"
import matdongsandescriptionImg from "@/public/matdongsan-description.svg"
import Image from "next/image"

const ToiletPage = () => {
    return <div>
        {PageTitleComponent('마초의 똥간을 챙겨줘', '화장실 청소')}
        <div className="flex flex-col gap-8">
            <ToiletBox title="감자를 캐보자!" titleImg={potatoImg} descriptionImg={potatoDescriptionImg} youtubeVideoId="lv8loCUPev0" />
            <ToiletBox title="맛동산을 캐보자!" titleImg={matdongsan} descriptionImg={matdongsandescriptionImg} youtubeVideoId="AwqzBB2mgsU" />
        </div>
    </div>
}

const ToiletBox = ({ title, titleImg, descriptionImg, youtubeVideoId }: { title: string, titleImg: any, descriptionImg: any, youtubeVideoId: string }) => {
    return <div>
        <div className={`flex items-center gap-2 text-[#ef7d40] ${KNPSKKomi.className} mb-2`}>
            <Image src={titleImg} alt={title} width={50} /> {title}
        </div>
        <div className="mb-2">
            <YoutubeEmbed videoId={youtubeVideoId} />
        </div>
        <Image src={descriptionImg} alt={title} />
    </div >
}

export default ToiletPage