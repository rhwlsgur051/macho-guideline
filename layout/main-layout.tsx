'use client';

import { usePathname, useRouter } from "next/navigation";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isDetailPage = pathname !== '/' && pathname !== '/main';

    return <div className="relative">
        {children}
        {isDetailPage &&
            <button type="button" onClick={() => router.push('/main')} className="fixed top-8 right-6">
                <img src="/home-icon.svg" alt="home" className="w-13 h-13" />
            </button>
        }
    </div>
}