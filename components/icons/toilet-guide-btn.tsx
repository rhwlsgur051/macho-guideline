'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ToiletGuideBtn = () => {
    useEffect(() => {

    }, [])
    const router = useRouter();
    return (
        <button id="toilet-icon" onClick={() => { router.push('/toilet') }}>
            <svg data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.88 250.88" className="w-[90px] h-[90px] mb-2">
                <defs>
                    <style>{`
                  .cls-1 {
                    fill: #fdf5e0;
                    }
                    
                    .cls-2 {
                        fill: #9d9793;
                        }
                        
                        #toilet-icon:hover .cls-1 { fill: #ef7d40 }
                        #toilet-icon:hover .cls-2 { fill: white }
                        `}</style>
                </defs>
                <g id="_레이어_1-2" data-name="레이어 1">
                    <circle className="cls-1" cx="125.44" cy="125.44" r="125.44" />
                    <g>
                        <path className="cls-2" d="M187.31,137.67l18.47-.02c1.75,0,2.95,1.65,2.87,3.38l-10.5,41.92c-.9,3.61-4.05,6.57-8.02,6.57h-123.72c-4.27.01-7.61-2.57-8.61-6.59l-10.49-41.9c-.06-1.77,1-3.37,2.96-3.37l81.13-.02c4.38,0,8.09,2.54,8.96,6.85l3.96,19.63c.22,1.11,1.53,2.13,2.66,2.4h24.88c1.31,0,2.94-1.09,3.2-2.36l3.83-19.26c.81-4.05,4.09-7.21,8.43-7.22Z" />
                        <path className="cls-2" d="M96.26,106.12c0-1.58-1.4-2.91-2.6-2.99-1.41-.09-3.14,1.12-3.13,2.83l.04,14.29c0,.53.34,1.72.47,2.39l-6.16,2.4-.13-19.14c0-1.31-1.57-2.72-2.59-2.77-1.49-.07-3.13,1.13-3.13,2.81l-.06,21.53-14.37,5.52v-32.83c-.01-4.49,3.56-8.43,8.11-8.52l9.16-.17v-40.22c0-6.68,5.53-11.69,11.8-11.54s11.3,5.4,11.29,12.07l-.05,39.72,8.73.09c4.36.05,8.5,3.46,8.52,8.07l.07,14.89-14.9,2.34c.27-3.15,2.35-15.35-3.15-13.69-.83.25-2.14,1.69-2.14,2.62l-.03,8.86c0,.94,1.39,2.33,2.27,3.08l-7.98,2.77-.04-14.39Z" />
                        <path className="cls-2" d="M149.47,160.72l-3.57-17.43c-1.33-6.48-7.13-11.35-13.89-11.37l-47.99-.13,17.42-7.05c17.67-6.27,36.71-5.91,53.97,1.53l22,9.49c-2.07,2.69-3.53,5.04-4.1,7.94l-3.38,16.99-20.46.04Z" />
                    </g>
                </g>
            </svg>
            <div className="pl-[1px]">
                <span className="font-bold text-[13px] flex items-center justify-center">
                    화장실 청소
                </span>
            </div>
        </button>
    );
};