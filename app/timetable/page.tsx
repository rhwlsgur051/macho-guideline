import { PageTitleComponent } from "@/components/page-title-component";

import timetableImg from "@/public/images/timetable/timetable-img.png"
import Image from "next/image";

const TimetablePage = () => {
    return <div className="mb-[60px]">
        {PageTitleComponent('마초의 하루일과', '시간표')}
        <Image src={timetableImg} alt="timetable" className="w-full h-full" />
    </div>
}

export default TimetablePage;