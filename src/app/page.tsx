import {Filters} from "@/components/Filters/Filters";
import {VetCard} from "@/components/VetCard";

export default function Home() {
    return (<main className="max-w-screen-2xl mx-auto px-4 py-6">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    <Filters />
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                    <VetCard/>
                </div>
                <section className="hidden lg:flex">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi doloremque earum explicabo in
                    ipsam magnam non odio provident quaerat totam velit, veritatis voluptatum. Aut distinctio dolores in
                    officiis voluptatem?
                </section>
            </section>
        </main>);
}
