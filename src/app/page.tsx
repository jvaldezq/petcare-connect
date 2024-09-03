import {Filters} from "@/components/Filters/Filters";
import {VetCard} from "@/components/VetCard";
import {fetchVets} from "@/app/service";
import {Map} from "@/components/Map/Map";

export default async function Home({
    searchParams
                                   }: { searchParams: {
                                       filters: string;
    } }) {
    const data = await fetchVets(searchParams);
    console.log('Server Response', data);
    return (<main className="max-w-screen-2xl mx-auto px-4 py-6">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 justify-start items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    <Filters />
                    {
                        data?.map((vet) => <VetCard key={vet.id} {...vet} />)
                    }
                </div>
                <section className="hidden lg:flex">
                    <Map />
                </section>
            </section>
        </main>);
}
