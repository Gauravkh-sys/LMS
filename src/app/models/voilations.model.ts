export interface Violation {
    id: number;
    head: string;
    parentId?: number;
    children?: Violation[];
}
