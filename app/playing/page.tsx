import { PageTitleComponent } from "@/components/page-title-component"
import { VideoBox } from "@/components/video-box"

import fishImg from "@/public/images/playing/fishing.svg"
import soccerImg from "@/public/images/playing/soccer.svg"
import basketballImg from "@/public/images/playing/basketball.svg"
import tagImg from "@/public/images/playing/tag.svg"

const PlayingPage = () => {
    return <div>
        {PageTitleComponent('마초와 함께 즐거운 사냥시간!', '놀이 방법')}
        <div className="flex flex-col gap-8">
            <VideoBox title="사냥감에 빙의 해보자! 낚시 놀이" titleImg={fishImg} youtubeVideoId="c0SaVeiriFQ" />
            <VideoBox title="신나게 달려보자! 축구 놀이" titleImg={soccerImg} youtubeVideoId="pkg2937q5Yk" />
            <VideoBox title="마초의 최애 놀이! 던지기 놀이" titleImg={basketballImg} youtubeVideoId="ad9GiqSZOFk" />
            <VideoBox title="숨었다가 기습! 술래잡기" titleImg={tagImg} youtubeVideoId="eStdzigjM-g" />
        </div>
    </div>
}

export default PlayingPage