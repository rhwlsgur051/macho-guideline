'use client';

import { useRouter } from "next/navigation";

export const HomeBtn = () => {
    const router = useRouter();
    return (
        <button id="home-icon" onClick={() => router.push('/main')} className="w-13 h-13">
            <svg id="_레이어_2" data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.29 144.29">
                <defs>
                    <style>{`
                        .cls-1 {
                            fill: #fff;
                          }
                        .cls-2 {
                            fill: #acadac;
                          }
                          #home-icon:hover .cls-1 { fill: #acadac; }
                          #home-icon:hover .cls-2 { fill: #fff; }
                `}</style>
                </defs>
                <g id="_레이어_1-2" data-name="레이어 1">
                    <circle className="cls-2" cx="72.15" cy="72.15" r="72.15" />
                    <g>
                        <path className="cls-1" d="M118.18,70.22v1.19l-4.15,5.03c-.81.54-1.69.58-2.47-.07l-39.43-32.87-39.53,32.95c-.85.71-1.95.42-2.6-.28l-3.43-4.11c-.73-.87-.58-2.03.3-2.77l40.98-34.12c2.39-1.99,6.19-1.95,8.53,0l13.99,11.61.05-11.06c0-1.07.8-1.8,1.86-1.83h10.95c1.09.08,1.81.82,1.81,1.95v23.18s12.57,10.46,12.57,10.46c.17.14.45.61.57.74Z" />
                        <path className="cls-1" d="M79.46,88.67h-14.63s0,21.93,0,21.93h-21.63c-2.2.06-3.91-1.56-3.96-3.78v-27.62s32.9-27.11,32.9-27.11l32.9,27.11v27.8c-.13,1.9-1.44,3.25-3.28,3.59h-22.3s0-21.92,0-21.92Z" />
                    </g>
                </g>
            </svg>
        </button>
    );
};