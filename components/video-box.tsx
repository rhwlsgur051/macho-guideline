import { KNPSKKomi } from "@/public/fonts/fonts"
import Image from "next/image"
import YoutubeEmbed from "./youtube-embed"

export const VideoBox = ({ title, titleImg, youtubeVideoId, descriptionImg }: { title: string, titleImg: any, youtubeVideoId: string, descriptionImg?: any }) => {
    return (
        <div>
            <div className={`flex items-center gap-2 text-[#ef7d40] ${KNPSKKomi.className} mb-2`}>
                <Image src={titleImg} alt={title} width={50} /> {title}
            </div>
            <div className="mb-2">
                <YoutubeEmbed videoId={youtubeVideoId} />
            </div>
            {descriptionImg && <Image src={descriptionImg} alt={title} />}
        </div>
    )
}