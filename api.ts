import { ITask } from "./types/tasks";


const baseURL = 'http://localhost:3001';

export const getALLTodos = async(): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`);
    const todos = await res.json();

    return todos;
}