import {Vet} from "@/lib/definitions";

interface FiltersProps {
    provinces: string[];
}

export const fetchVets = async (searchParams: {
    filters: string;
}): Promise<Vet[]> => {
    try {
        const params = searchParams.filters ? atob(searchParams.filters) : '{}';
        const test = JSON.parse(params) as FiltersProps;

        const vets = (test.provinces || []).map((province: string) => ({
            id: 1
        }));

        return vets as Vet[];
    } catch (error) {
        console.error("Error parsing filters:", error);
        return [];
    }
};