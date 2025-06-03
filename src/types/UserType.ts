export interface User {
    id?: bigint;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    supprime: number;
}