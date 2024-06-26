export interface ListBootcampResponse {
    count: number;
    hasNext: boolean;
    hasPrevious: boolean;
    index: number;
    pages: number;
    size: number;
    items: BootcampItem[];
}

export interface BootcampItem {
    id: number;
    name: string;
    InsturctorName:string,
    instructorId: string;
    bootcampState: boolean;
}