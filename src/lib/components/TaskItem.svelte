<script lang="ts">
	import { toggleDone, removeTask } from '$lib/stores/taskStore';
	import type { Task } from '$lib/types';

	let {
		task
	}: {
		task: Task;
	} = $props();
</script>

<li>
	<input
		type="checkbox"
		name="done"
		checked={task.done ? true : false}
		onchange={() => toggleDone(task.id)}
	/>
	<span>{task.body}</span>
	<div class="btn-group">
		<button class="btn-task" aria-label="Change Priority">❗️</button>
		<button class="btn-task" aria-label="Delete task" onclick={() => removeTask(task.id)}>🗑️</button
		>
	</div>
</li>

<style>
	li {
		display: flex;
		gap: 4px;
	}
</style>
