import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    createUser(id: string, password: string): Promise<void>;
    login(id: string, password: string): Promise<void>;
    register(name: string, mobile: string): Promise<void>;
    submitContact(name: string, email: string, message: string): Promise<void>;
}
