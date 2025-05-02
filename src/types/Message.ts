export interface Message {
    id?: bigint;
    nom: string;
    email: string;
    phone: string;
    message: string;
    treated: number;
    created: Date;
}