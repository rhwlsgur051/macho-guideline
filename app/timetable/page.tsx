import { PageTitleComponent } from "@/components/page-title-component";

const TimetablePage = () => {
    return <div className="mb-[60px]">
        {PageTitleComponent('마초의 하루일과', '시간표')}
        <img src="/timetable-img.svg" alt="timetable" className="w-full h-full" />
    </div>
}

export default TimetablePage;