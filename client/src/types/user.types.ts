import { Session } from "next-auth";

export interface User extends Session {
    id: string,
    name: string,
    picture?: string
}