export interface TaskType {
    title: string,
    createdAt: Date
}

export interface TaskProps {
    task: TaskType,
    key: number,
    removeTask(TaskName: string): void
}