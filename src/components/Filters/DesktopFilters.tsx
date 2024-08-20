import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"

export const DesktopFilters = () => {
    return (<Dialog>
        <DialogTrigger asChild className="col-span-full">
            <button className="border-solid border border-primary/[0.3] text-primary/[0.7] rounded-2xl w-fit py-1 px-4 hover:border-primary/[0.1] hover:bg-primary/[0.08]">Filters</button>
        </DialogTrigger>
        <DialogContent className="h-[90%] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa cumque laudantium, libero
            non perspiciatis reiciendis unde. Ad aspernatur blanditiis eius fuga, fugit nobis odit possimus quasi
            qui reprehenderit. Quis.
            <DialogFooter>
                <DialogClose asChild>
                    <button>Cancel</button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>)
}
