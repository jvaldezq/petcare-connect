import Image from "next/image";
import {LocationIcon} from "@/assets/icons/LocationIcon";
import {WhatsappIcon} from "@/assets/icons/WhatsappIcon";

export const VetCard = () => {
    return <article
        className="border-secondary/[0.2] border border-solid rounded-md py-5 px-3 grid grid-cols-1 lg:grid-cols-[160px,_1fr] gap-4 lg:flex-row lg:items-center">
        <Image src="https://petshop2gocr.com/wp-content/uploads/cropped-cropped-Diseno-sin-titulo-5-3-1.png" alt="Logo"
               width={150} height={150} className="aspect-auto object-cover rounded-md self-center"/>
        <div className="flex flex-col gap-2 w-full lg:w-auto">
            <h1 className="text-base font-bold">Petshop 2 go (Abierto)</h1>
            <div className="flex gap-1 flex-wrap">
                <h2 className="text-sm bg-secondary/[0.1] text-primary px-2 py-0.5 rounded-md">
                    Veterinaria General
                </h2>
                <h2 className="text-sm bg-secondary/[0.1] text-primary px-2 py-0.5 rounded-md">
                    Cardiología
                </h2>
            </div>
            <h2 className="text-sm flex gap-1 items-center">
                <LocationIcon/>
                Heredia, San Joaquin
            </h2>
        </div>
        <div className="col-span-full justify-self-end">
            <a className="flex gap-2 justify-center items-center border-solid border border-primary/[0.3] text-primary/[0.8] rounded-2xl w-fit py-1 px-4 cursor-pointer hover:border-secondary/[0.1] hover:bg-secondary/[0.08]">
                <WhatsappIcon/>
                8302-8732
            </a>
        </div>
    </article>
}