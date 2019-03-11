export interface Task {
    taskId: number;
    taskName: string;
    startDate: string;
    endDate: string;
    priority: number;
    status: string;
    parentId: number;
}
