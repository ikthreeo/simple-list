import { writable } from "svelte/store";
import type { Task } from '$lib/types'

export const tasks = writable<Task[]>([]);

export const addTask = (body: string) => {
    tasks.update(tasks => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            body,
            done: false,
            priority: 'low',
            position: tasks.length
        };
        return [...tasks, newTask]
    });
}

export const toggleDone = (id: string) => {
    tasks.update(tasks =>
        tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        )
    );
}

export const removeTask = (id: string) => {
    tasks.update(tasks =>
        tasks.filter(task =>
            task.id != id
        )
    );
}