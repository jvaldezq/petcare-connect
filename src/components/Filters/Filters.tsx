"use client";

import {MobileFilters} from "@/components/Filters/MobileFilters";
import {useMediaQuery} from "@/hooks/use-media-query";
import {DesktopFilters} from "@/components/Filters/DesktopFilters";

export const Filters = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return isDesktop ? <DesktopFilters /> : <MobileFilters />
}