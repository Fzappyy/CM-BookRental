

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
    
}

export const Setbook_Status = [
    { value: Book_Status.BRW, type: 'BORROWED' },
    { value: Book_Status.AVL, type: 'AVAILABLE' },
    { value: Book_Status.DUE, type: 'DUE' },
    { value: Book_Status.RMV, type: 'REMOVED' }
  ];