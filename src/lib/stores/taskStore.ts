import { writable } from "svelte/store";
import type { Task } from '$lib/types'

export const tasks = writable<Task[]>([]);

export const addTask = (body: string) => {
    tasks.update(list => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            body,
            done: false,
            priority: 'low',
            position: list.length
        };
        return [...list, newTask]
    });
}

export const updateBody = (id: string, newBody: string) => {
    if (!newBody) throw Error('Empty');

    tasks.update(list =>
        list.map(task =>
            task.id === id
                ? task.body === newBody
                    ? task
                    : { ...task, body: newBody }
                : task
        )
    );
}

export const removeTask = (id: string) => {
    tasks.update(list =>
        list.filter(task =>
            task.id != id
        )
    );
}

export const deleteDone = () => {
    tasks.update(list =>
        list.filter(task =>
            !task.done
        )
    );
}

export const toggleDone = (id: string) => {
    tasks.update(list =>
        list.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        )
    );
}

export const togglePriority = (id: string) => {
    tasks.update(list =>
        list.map(task => {
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