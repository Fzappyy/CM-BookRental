import { Book } from "./books/book";

export interface User {
    id: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    BRWD_books?: Book[];
}