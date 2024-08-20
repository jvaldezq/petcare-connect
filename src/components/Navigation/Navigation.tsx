import Image from "next/image";
import PetcareConnectLogo from "@/assets/petcare-connect.webp";
import {Menu} from "@/components/Navigation/Menu";

export const Navigation = () => {
    return (
        <nav className="max-w-screen-2xl mx-auto p-4 flex justify-between">
            <Image src={PetcareConnectLogo} alt="Petcare Connect Logo" width={220} height={26} className="aspect-auto object-contain" />
            <Menu />
        </nav>
    )
};