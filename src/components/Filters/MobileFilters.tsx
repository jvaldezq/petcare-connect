import {
    Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger
} from "@/components/ui/drawer"

export const MobileFilters = () => {
    return (<Drawer>
        <DrawerTrigger asChild className="col-span-full">
            <button
                className="border-solid border border-primary/[0.3] text-primary/[0.7] rounded-2xl w-fit py-1 px-4">Filters
            </button>
        </DrawerTrigger>
        <DrawerContent className="h-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa cumque laudantium, libero
            non perspiciatis reiciendis unde. Ad aspernatur blanditiis eius fuga, fugit nobis odit possimus quasi
            qui reprehenderit. Quis.
            <DrawerFooter>
                <DrawerClose asChild>
                    <button>Cancel</button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>)
}
