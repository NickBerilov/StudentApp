import { SexEnum } from './enums';

export type Student = {
    id: string;
    name: string;
    sex: SexEnum;
    placeOfBirth: string;
    dateOfBirth: string;
    email: string;
};