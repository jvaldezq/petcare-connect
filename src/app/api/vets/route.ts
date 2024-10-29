import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
import {NextResponse} from 'next/server';

// @ts-ignore
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const provincesParam = searchParams.get('userId');
    const citiesParam = searchParams.get('city');

    const provinces = provincesParam ? {
        province: {
            in: provincesParam.split(',')
        }
    } : undefined;
    const cities = citiesParam ? {
        city: {
            in: citiesParam.split(',')
        }
    } : undefined;


    try {
        const vets = await prisma.vet.findMany({
            select: {
                id: true,
                name: true,
                phone: true,
                locations: true,
                vetSpecialties: true
            },
            where: {
                locations: {
                    some: {
                        ...cities,
                        ...provinces
                    }
                }
            },
        });

        const vetsWithSingleLocation = vets.map(vet => ({
            ...vet,
            location: vet.locations[0] || null
        }));

        return NextResponse.json(vetsWithSingleLocation, {status: 200});
    } catch (error) {
        console.log('Error fetching vets', error);
        return NextResponse.json({error}, {status: 500});
    }
}