export type User = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    gender: string,
    streetAddress: string,
    streetAddress2: string,
    city: string,
    region: string,
    postalCode: string,
    parties: string,
    position: string
}


export type UserLogin = {
    uid: string,
    password: string
}

export type SearchBoothForm = {
    state: string,
    vidhanSabha: string
} 