import {
    Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import {MenuIcon} from "@/assets/icons/MenuIcon";

export const Menu = () => {
    return (<Sheet>
            <SheetTrigger asChild>
                <MenuIcon className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    Body
                </div>
                <SheetFooter>
                    Footer
                </SheetFooter>
            </SheetContent>
        </Sheet>)
}
