

export enum Book_Status{
    BRW = "BORROWED",
    AVL = "AVAILABLE",
    DUE = "DUE",
    RMV = "REMOVED",
}

export interface Book {
    id: string; 
    bookid: string;
    name: string; 
    status: string; 
    published: string; 
    author: string; 
    price: any;
    days: number;
    total: number;
    date: any;
}

export const Setbook_Status = [
    { value: Book_Status.BRW, type: 'BORROWED' },
    { value: Book_Status.AVL, type: 'AVAILABLE' },
    
  ];