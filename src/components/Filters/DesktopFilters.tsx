import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger,} from "@/components/ui/dialog"
import {Button, ButtonVariant} from "@/components/Shared/Button";
import {useCallback, useState} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

const PROVINCES = ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón']

export const DesktopFilters = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const [selectedProvinces, setSelectedProvinces] = useState<string[]>([])

    const handleProvinceClick = useCallback((province: string) => {
        if (selectedProvinces.includes(province)) {
            setSelectedProvinces(selectedProvinces.filter((p) => p !== province))
        } else {
            setSelectedProvinces([...selectedProvinces, province])
        }
    }, [selectedProvinces])

    const handleSubmit = useCallback(() => {
        const params = new URLSearchParams(searchParams);
        const data = JSON.stringify({
            provinces: selectedProvinces
        })
        params.set('filters', btoa(data));
        replace(`${pathname}?${params.toString()}`);
    }, [pathname, replace, searchParams, selectedProvinces])

    return (<Dialog>
        <DialogTrigger asChild className="col-span-full">
            <button
                className="border-solid border border-primary/[0.3] text-primary/[0.7] rounded-2xl w-fit py-1 px-4 hover:border-primary/[0.1] hover:bg-primary/[0.08] h-fit">Filters
            </button>
        </DialogTrigger>
        <DialogContent className="h-fit w-[80%]">
            <DialogHeader>
                Filtros
            </DialogHeader>
            <section className="flex flex-col gap-4">
                <h3>Ubicación</h3>
                <div className="flex gap-4 flex-wrap">
                    {PROVINCES.map((province) => {
                        return <Button
                            variant={selectedProvinces.includes(province) ? ButtonVariant.primary : ButtonVariant.outline}
                            onClick={() => handleProvinceClick(province)}
                            key={province}>{province}</Button>
                    })}
                </div>
            </section>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant={ButtonVariant.secondary} onClick={handleSubmit}>Aplicar</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
