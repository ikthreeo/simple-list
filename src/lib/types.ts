export type Task = {
    id: string;
    body: string;
    done: boolean;
    priority: 'low' | 'normal' | 'high';
    position: number;
};