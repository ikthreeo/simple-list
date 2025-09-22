<script lang="ts">
	import { removeTask, toggleDone, togglePriority } from '$lib/stores/taskStore';
	import type { Task } from '$lib/types';

	let {
		task
	}: {
		task: Task;
	} = $props();
</script>

<li class={task.done ? 'complete' : ''}>
	<input
		type="checkbox"
		name="done"
		checked={task.done ? true : false}
		onchange={() => toggleDone(task.id)}
	/>
	<span>{task.body}</span>
	<div class="btn-group">
		<button
			class={['btn-task', task.priority]}
			aria-label="Change Priority"
			onclick={() => togglePriority(task.id)}>❗️</button
		>
		<button class="btn-task" aria-label="Delete task" onclick={() => removeTask(task.id)}>🗑️</button
		>
	</div>
</li>

<style>
	li {
		display: flex;
		gap: 4px;
	}

	.complete {
		text-decoration: line-through;
	}

	.btn-task.low {
		background-color: white;
	}

	.btn-task.normal {
		background-color: yellow;
	}

	.btn-task.high {
		background-color: red;
	}
</style>
