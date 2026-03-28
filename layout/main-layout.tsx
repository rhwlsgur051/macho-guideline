'use client';

import { HomeBtn } from "@/components/icons/home-icon";
import { usePathname } from "next/navigation";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isDetailPage = pathname !== '/' && pathname !== '/main';

    return <div className={`relative ${isDetailPage && 'p-6'}`}>
        {children}
        {isDetailPage && (
            <div className="fixed top-8 right-6">
                <HomeBtn />
            </div>
        )}
    </div>
}