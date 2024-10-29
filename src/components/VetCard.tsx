import Image from "next/image";
import {LocationIcon} from "@/assets/icons/LocationIcon";
import {WhatsappIcon} from "@/assets/icons/WhatsappIcon";
import {useMemo} from "react";
import {Vet} from "@/lib/definitions";
import Link from "next/link";

export const VetCard = (props: Vet) => {
    const {name, phone, location, id} = props;

    const openOrClose = useMemo(() => {
        return <p className="absolute top-2 right-0 text-xs text-white bg-success py-1 px-2 rounded-l-lg font-semibold">Abierto</p>
        // return <p className="absolute top-2 right-0 text-xs text-white bg-error py-1 px-2 rounded-l-lg font-semibold">Cerrado</p>
    }, []);

    return <article
        className="border-secondary/[0.2] border border-solid rounded-lg py-5 px-3 grid grid-cols-1 lg:grid-cols-[160px,_1fr] gap-4 lg:flex-row lg:items-center h-fit relative hover:shadow-sm hover:cursor-pointer">
        <Image src="https://petshop2gocr.com/wp-content/uploads/cropped-cropped-Diseno-sin-titulo-5-3-1.png" alt="Logo"
               width={150} height={150} className="aspect-auto object-cover rounded-md self-center justify-self-center"/>
        <div className="flex flex-col gap-2 w-full lg:w-auto">
            <h1 className="text-base font-semibold">{name}</h1>
            <div className="flex gap-1 flex-wrap">
                <h2 className="text-sm bg-secondary/[0.1] text-primary px-2 py-0.5 rounded-md">
                    Veterinaria General
                </h2>
                <h2 className="text-sm bg-secondary/[0.1] text-primary px-2 py-0.5 rounded-md">
                    Cardiología
                </h2>
            </div>
            <h2 className="text-sm flex gap-1 items-center">
                {location?.province}, {location?.city}
            </h2>
            <div className="flex gap-4 flex-wrap justify-end mt-2">
                <a target="_blank" href={`https://api.whatsapp.com/send?phone=506${phone}&text=Petcare%20Connect.`}
                   className="flex gap-2 justify-center items-center border-solid border border-primary/[0.3] text-primary/[0.8] rounded-2xl w-fit py-1 px-4 cursor-pointer hover:border-secondary/[0.1] hover:bg-secondary/[0.08]">
                    <WhatsappIcon/>
                    Whatsapp
                </a>
                <Link key="how" href={`/${id}`} className="flex gap-2 justify-center items-center border-solid border border-primary/[0.3] text-primary/[0.8] rounded-2xl w-fit py-1 px-4 cursor-pointer hover:border-secondary/[0.1] hover:bg-secondary/[0.08]">
                    Ver más
                </Link>
            </div>
        </div>
        {openOrClose}
    </article>
}