export interface Profile {
    id?: bigint;
    firstname?: string;
    lastname?: string;
    pseudo?: string;
    picture?: string;
    bio?: string;
    active: number;
    user_id: bigint;
}