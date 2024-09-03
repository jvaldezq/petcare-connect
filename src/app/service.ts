import {Vet} from "@/lib/definitions";
import {serverApi} from "@/lib/serverApi";

interface FiltersProps {
    provinces: string[];
}

export const fetchVets = async (searchParams: {
    filters: string;
}): Promise<Vet[]> => {
    try {
        const params = searchParams.filters ? atob(searchParams.filters) : '{}';
        const response = await serverApi({
            method: 'GET', path: '/vets', params: JSON.parse(params)
        });
        return response as Vet[];
    } catch (error) {
        console.error("Error parsing filters:", error);
        return [];
    }
};