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

export const removeTask = (id: string) => {
    tasks.update(tasks =>
        tasks.filter(task =>
            task.id != id
        )
    );
}

export const deleteDone = () => {
    tasks.update(tasks =>
        tasks.filter(task =>
            !task.done
        )
    );
}

export const toggleDone = (id: string) => {
    tasks.update(tasks =>
        tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        )
    );
}

export const togglePriority = (id: string) => {
    tasks.update(tasks =>
        tasks.map(task => {
            if (task.id === id) {

                switch (task.priority) {
                    case 'low':
                        return { ...task, priority: 'normal' }
                    case 'normal':
                        return { ...task, priority: 'high' }
                    case 'high':
                        return { ...task, priority: 'low' }
                }
            } else {
                return task
            }
        })
    );
}