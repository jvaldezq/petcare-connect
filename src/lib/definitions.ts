export interface Vet {
    id: number,
    name: string,
    email: string,
    phone: string,
    permissionNumber: string,
    isAlwaysOpen: boolean,
    locations: Location[],
    schedules: Schedule[],
    closedDates: ClosedDate[],
    vetDoctors: VetDoctor[],
    vetSpecialties: VetSpecialty[],
    createdAt: string,
    updatedAt: string
}

export interface Location {
    id: number,
    vetId: number,
    country: string,
    province: string,
    city: string,
    street: string,
    googleMapsUrl: string,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string
}

export interface Specialty {
    id: number,
    name: string,
    vetSpecialties: VetSpecialty[],
    doctorSpecialties: DoctorSpecialty[],
    createdAt: string,
    updatedAt: string
}

export interface Doctor {
    id: number,
    name: string,
    identificationNumber: string,
    uniqueDoctorId: string,
    email: string,
    phone: string,
    vetDoctors: VetDoctor[],
    doctorSpecialties: DoctorSpecialty[],
    createdAt: string,
    updatedAt: string
}

export interface Schedule {
    id: number,
    vetId: number,
    isClosed: boolean,
    isAlwaysOpen: boolean,
    sundayOpen: string,
    sundayClose: string,
    mondayOpen: string,
    mondayClose: string,
    tuesdayOpen: string,
    tuesdayClose: string,
    wednesdayOpen: string,
    wednesdayClose: string,
    thursdayOpen: string,
    thursdayClose: string,
    fridayOpen: string,
    fridayClose: string,
    saturdayOpen: string,
    saturdayClose: string,
    createdAt: string,
    updatedAt: string
    vet: Vet
}

export interface ClosedDate {
    id: number,
    vetId: number,
    closedDate: string,
    createdAt: string,
    updatedAt: string
    vet: Vet
}

export interface VetDoctor {
    id: number,
    vetId: number,
    doctorId: number,
    createdAt: string,
    updatedAt: string
    vet: Vet,
    doctor: Doctor
}

export interface VetSpecialty {
    id: number,
    vetId: number,
    specialtyId: number,
    createdAt: string,
    updatedAt: string
    vet: Vet,
    specialty: Specialty
}

export interface DoctorSpecialty {
    id: number,
    doctorId: number,
    specialtyId: number,
    createdAt: string,
    updatedAt: string
    doctor: Doctor,
    specialty: Specialty
}
