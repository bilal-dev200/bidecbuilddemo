"use client";

import { usePathname } from "next/navigation";
import GetInTouch from "@/components/WebsiteComponents/GetInTouch";

export default function ConditionalGetInTouch() {
    const pathname = usePathname();

    // hide GetInTouch on specific pages
    if (pathname === "/agent-registration") {
        return null;
    }

    return <GetInTouch />;
}
